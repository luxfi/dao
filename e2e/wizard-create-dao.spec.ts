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

    // 3) ERC-20 token step: name / symbol / supply / an allocation to the connected signer.
    await page.waitForTimeout(800);
    const fillFirst = async (labels: RegExp[], value: string) => {
      for (const l of labels) {
        const el = page.getByLabel(l).first();
        if (await el.isVisible({ timeout: 1500 }).catch(() => false)) {
          await el.fill(value);
          return true;
        }
      }
      // fallback: fill the visible empty text/number inputs in order
      return false;
    };
    await fillFirst([/token name/i, /name/i], `${daoName} Token`);
    await fillFirst([/symbol/i], 'E2E');
    await fillFirst([/supply/i, /amount/i], '1000000');
    await page.getByTestId('create-skipNextButton').click();

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
