import { test, expect } from './fixtures/wallet-mock';

/**
 * E2E: create a DAO through the wizard UI, wallet-signed, end-to-end.
 *
 * Proves the V1 create path from the UI (the create TX itself is separately fork-proven):
 * the wizard's submit builds a single createProxyWithNonce whose Safe.setup delegatecalls
 * SystemDeployerV1.setupSafe (see app: models/helpers/buildV1CreateDao.ts + useBuildDAOTx.ts),
 * the mock wallet forwards eth_sendTransaction to the anvil fork, and the new DAO then loads.
 *
 * Requires (see README / harness):
 *   - anvil fork of Lux 96369 on :8545 with Multicall3 + the V1 create-stack deployed
 *   - app served at BASE_URL with VITE_APP_LUX_MULTICALL3 + VITE_APP_LUX_V1_DEPLOYABLES set
 *   - E2E_CHAIN_ID=0x17871 E2E_RPC=http://127.0.0.1:8545 (so the mock wallet is on Lux)
 *
 * Run: E2E_CHAIN_ID=0x17871 E2E_RPC=http://127.0.0.1:8545 pnpm exec playwright test wizard-create-dao
 */

const uniq = () => Math.floor(Math.random() * 1e6);

test.describe('Create DAO — wizard UI (V1 governance)', () => {
  test('creates an ERC-20 Token Voting DAO from the wizard and it loads', async ({
    connectedPage: page,
  }) => {
    test.setTimeout(120_000);
    const daoName = `E2E Wizard DAO ${uniq()}`;

    // 1) Open the create wizard.
    await page.goto('/create', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500); // let the injected provider be detected + wagmi autoconnect

    // 2) Essentials: name + ERC-20 Token Voting. (Network already defaults to the built brand net.)
    await page.getByTestId('essentials-daoName').fill(daoName);
    await page.getByTestId('choose-governor').click(); // ERC-20 token voting
    await page.getByTestId('create-skipNextButton').click();

    // 3) ERC-20 token step: name / symbol / supply + an allocation to the connected signer
    // (so the wallet has voting power). Real testids from VotesTokenNew / GovernorTokenAllocations.
    // token step defaults to "existing token" (fields disabled) — choose "new token" first
    await page.getByTestId('choose-newToken').click();
    await page.getByTestId('tokenVoting-tokenNameInput').waitFor({ timeout: 15_000 });
    await expect(page.getByTestId('tokenVoting-tokenNameInput')).toBeEnabled({ timeout: 10_000 });
    await page.getByTestId('tokenVoting-tokenNameInput').fill(`${daoName} Token`);
    await page.getByTestId('tokenVoting-tokenSymbolInput').fill('E2E');
    await page.getByTestId('tokenVoting-tokenSupplyInput').fill('1000000');
    // add one allocation row (address + amount) so Next validates
    await page.getByTestId('tokenVoting-addAllocation').click();
    const alloc = page.getByTestId('tokenVoting-tokenAllocations');
    const allocInputs = alloc.locator('input');
    await allocInputs.nth(0).fill('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'); // signer
    await allocInputs.nth(1).fill('100000');
    const next = page.getByTestId('create-skipNextButton');
    await expect(next).toBeEnabled({ timeout: 15_000 });
    await next.click();

    // 4) Governance step: quorum (+ any defaults are fine). Then deploy.
    await page.waitForTimeout(800);
    const quorum = page.getByTestId('govConfig-quorumPercentage');
    if (await quorum.isVisible({ timeout: 2000 }).catch(() => false)) {
      await quorum.fill('4');
    }
    // Advance any remaining steps until the Deploy button is present.
    for (let i = 0; i < 3; i++) {
      const deploy = page.getByTestId('create-deployDAO');
      if (await deploy.isVisible({ timeout: 1500 }).catch(() => false)) break;
      const next = page.getByTestId('create-skipNextButton');
      if (await next.isVisible({ timeout: 1500 }).catch(() => false)) {
        await next.click();
        await page.waitForTimeout(600);
      }
    }

    // 5) Deploy — wallet-signed createProxyWithNonce, forwarded to the anvil fork.
    await page.getByTestId('create-deployDAO').click();

    // 6) Assert: the app navigates into the newly-created DAO and it loads as a token DAO.
    await page.waitForURL(/\/home\?dao=/, { timeout: 90_000 });
    await expect(page.getByText(/ERC-20 Token Voting/i)).toBeVisible({ timeout: 30_000 });
    // the DAO name we set should render somewhere on the loaded DAO page
    await expect(page.getByText(daoName).first()).toBeVisible({ timeout: 15_000 });
  });
});
