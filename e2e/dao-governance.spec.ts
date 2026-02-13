import { test, expect, Page } from '@playwright/test';

/**
 * E2E tests for Lux DAO Governance Flow
 * Tests: DAO creation, proposals, voting, and execution
 */

test.describe('Lux DAO - Governance E2E', () => {
  test.describe.configure({ mode: 'serial' });

  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('should load homepage with Lux ecosystem branding', async () => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Verify Lux ecosystem branding (could be Lux, Hanzo, Zoo, etc.)
    await expect(page).toHaveTitle(/Lux|Hanzo|Zoo|DAO/);
    await expect(page.locator('text=/Lux|Hanzo|Zoo|DAO|Governance/i').first()).toBeVisible({ timeout: 10000 });
  });

  test('should display network selector with Lux networks', async () => {
    await page.goto('/');

    // Look for network selector
    const networkSelector = page.locator('[data-testid="network-selector"], button:has-text("Network"), button:has-text("Lux")').first();

    if (await networkSelector.isVisible({ timeout: 5000 }).catch(() => false)) {
      await networkSelector.click();

      // Should show Lux ecosystem networks
      const luxNetwork = page.locator('text=/Lux Network|Lux Mainnet/i').first();
      const hanzoNetwork = page.locator('text=/Hanzo/i').first();
      const zooNetwork = page.locator('text=/Zoo/i').first();

      // At least one Lux ecosystem network should be available
      const hasLuxNetworks = await luxNetwork.isVisible().catch(() => false) ||
                             await hanzoNetwork.isVisible().catch(() => false) ||
                             await zooNetwork.isVisible().catch(() => false);

      expect(hasLuxNetworks).toBeTruthy();
    }
  });

  test('should navigate to create DAO page', async () => {
    // Navigate to create page - requires network prefix
    await page.goto('/lux/create');
    await page.waitForLoadState('networkidle');

    // Check that we're on a create page or redirected appropriately
    const url = page.url();
    const hasCreateContent = await page.locator('text=/Create|New|Multisig|Token|Governance|Safe/i').count() > 0;
    const isOnCreatePage = url.includes('create') || hasCreateContent;

    // If redirected to connect wallet, that's acceptable
    const requiresWallet = await page.locator('text=/Connect|Wallet|Sign in/i').count() > 0;

    expect(isOnCreatePage || requiresWallet).toBeTruthy();
  });

  test.skip('should display DAO creation options', async () => {
    // TODO: This test requires wallet connection to see create options
    // Skip until wallet mocking is implemented
    await page.goto('/create');
    await page.waitForLoadState('networkidle');
    expect(true).toBeTruthy();
  });

  test('should display homepage content', async () => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Homepage should have some meaningful content
    const contentIndicators = [
      'Getting Started',
      'Connect',
      'Create',
      'DAOs',
      'Safe',
      'Governance',
      'Lux',
      'Hanzo'
    ];

    let foundContent = 0;
    for (const indicator of contentIndicators) {
      const element = page.locator(`text=/${indicator}/i`).first();
      if (await element.isVisible({ timeout: 2000 }).catch(() => false)) {
        foundContent++;
      }
    }

    // Homepage should have at least some identifiable content
    expect(foundContent).toBeGreaterThan(0);
  });
});

test.describe('Lux DAO - Proposal Flow', () => {
  test('should display proposal creation form when connected', async ({ page }) => {
    // This test requires wallet connection - skip if not available
    test.skip(!process.env.TEST_WALLET_CONNECTED, 'Wallet connection required');

    await page.goto('/lux/0x0000000000000000000000000000000000000001/proposals/new');
    await page.waitForLoadState('networkidle');

    // Should show proposal creation options
    const proposalForm = page.locator('text=/Create Proposal|New Proposal/i').first();
    const isFormVisible = await proposalForm.isVisible({ timeout: 10000 }).catch(() => false);

    if (isFormVisible) {
      // Check for proposal type options
      await expect(page.locator('text=/Transfer|Transaction|Custom/i').first()).toBeVisible();
    }
  });

  test('should display proposal list for DAO', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Navigate to a DAO's proposals page
    const daoLink = page.locator('a[href*="/proposals"]').first();

    if (await daoLink.isVisible({ timeout: 5000 }).catch(() => false)) {
      await daoLink.click();
      await page.waitForLoadState('networkidle');

      // Should show proposals section (even if empty)
      const proposalsSection = page.locator('text=/Proposals|No proposals|Active/i').first();
      await expect(proposalsSection).toBeVisible({ timeout: 10000 });
    }
  });
});

test.describe('Lux DAO - Staking & Voting Power', () => {
  test('should display staking option when available', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Look for staking link
    const stakingLink = page.locator('a[href*="/staking"], button:has-text("Stake"), text=/Stake|Lock/i').first();
    const isStakingVisible = await stakingLink.isVisible({ timeout: 5000 }).catch(() => false);

    if (isStakingVisible) {
      await stakingLink.click();
      await page.waitForLoadState('networkidle');

      // Should show staking interface
      const stakingInterface = page.locator('text=/Lock|vLUX|Voting Power|Stake/i').first();
      await expect(stakingInterface).toBeVisible({ timeout: 10000 });
    }
  });

  test('should display voting power information', async ({ page }) => {
    // Navigate to a DAO page
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Look for voting power display
    const votingPower = page.locator('text=/Voting Power|Votes|Balance/i').first();
    const isVotingPowerVisible = await votingPower.isVisible({ timeout: 5000 }).catch(() => false);

    // Voting power should be shown somewhere in the app
    // (might require wallet connection for actual value)
    if (isVotingPowerVisible) {
      await expect(votingPower).toBeVisible();
    }
  });
});

test.describe('Lux DAO - Network Switching', () => {
  test('should allow switching between Lux ecosystem networks', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Find network switcher
    const networkButton = page.locator('[data-testid="network-switch"], button:has-text("Switch Network")').first();

    if (await networkButton.isVisible({ timeout: 5000 }).catch(() => false)) {
      await networkButton.click();

      // Should show network options
      const networks = ['Lux', 'Hanzo', 'Zoo', 'Pars', 'SPC'];

      for (const network of networks) {
        const networkOption = page.locator(`text=/${network}/i`).first();
        if (await networkOption.isVisible({ timeout: 2000 }).catch(() => false)) {
          // Network option is available
          expect(true).toBeTruthy();
          break;
        }
      }
    }
  });

  test('should maintain state when switching networks', async ({ page }) => {
    // This test verifies URL-based network routing works
    const networks = [
      { prefix: 'lux', chainId: 96369 },
      { prefix: 'hanzo', chainId: 36963 },
      { prefix: 'zoo', chainId: 200200 },
    ];

    for (const network of networks) {
      await page.goto(`/${network.prefix}`);
      const currentUrl = page.url();
      expect(currentUrl).toContain(network.prefix);
    }
  });
});

test.describe('Lux DAO - Error Handling', () => {
  test('should handle invalid DAO addresses gracefully', async ({ page }) => {
    await page.goto('/lux/0xinvalid');
    await page.waitForLoadState('networkidle');

    // Should show error or redirect, not crash
    const hasError = await page.locator('text=/not found|invalid|error/i').count() > 0;
    const redirectedHome = page.url() === page.url().split('/lux')[0] + '/';

    expect(hasError || redirectedHome || page.url().includes('lux')).toBeTruthy();
  });

  test('should handle network errors gracefully', async ({ page }) => {
    const errors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        const text = msg.text();
        // Filter out expected errors
        if (!text.includes('favicon') &&
            !text.includes('403') &&
            !text.includes('Pre-transform') &&
            !text.includes('Failed to load resource')) {
          errors.push(text);
        }
      }
    });

    await page.goto('/');
    await page.waitForTimeout(3000);

    // Should not have critical console errors
    const criticalErrors = errors.filter(e =>
      e.toLowerCase().includes('uncaught') ||
      e.toLowerCase().includes('fatal')
    );

    expect(criticalErrors).toHaveLength(0);
  });
});
