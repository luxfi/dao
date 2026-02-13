import { test as base, Page } from '@playwright/test';

// Anvil default test accounts
const TEST_ACCOUNTS = [
  {
    address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    privateKey: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
  },
  {
    address: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
    privateKey: '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d',
  },
  {
    address: '0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc',
    privateKey: '0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a',
  },
];

const LOCALHOST_CHAIN = {
  chainId: '0x539', // 1337
  chainName: 'Localhost',
  rpcUrls: ['http://127.0.0.1:8545'],
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
};

/**
 * Mock Ethereum provider that simulates wallet behavior
 */
function createMockProvider(account: typeof TEST_ACCOUNTS[0]) {
  return `
    window.mockEthereumProvider = {
      isMetaMask: true,
      selectedAddress: '${account.address}',
      chainId: '${LOCALHOST_CHAIN.chainId}',
      networkVersion: '1337',
      _events: {},

      on(event, callback) {
        if (!this._events[event]) this._events[event] = [];
        this._events[event].push(callback);
        return this;
      },

      removeListener(event, callback) {
        if (this._events[event]) {
          this._events[event] = this._events[event].filter(cb => cb !== callback);
        }
        return this;
      },

      emit(event, ...args) {
        if (this._events[event]) {
          this._events[event].forEach(cb => cb(...args));
        }
      },

      async request({ method, params }) {
        console.log('[MockProvider] Request:', method, params);

        switch (method) {
          case 'eth_chainId':
            return '${LOCALHOST_CHAIN.chainId}';

          case 'net_version':
            return '1337';

          case 'eth_accounts':
          case 'eth_requestAccounts':
            return ['${account.address}'];

          case 'personal_sign':
          case 'eth_signTypedData_v4':
            // Return a mock signature
            return '0x' + '00'.repeat(65);

          case 'eth_sendTransaction':
            // Forward to local node
            const response = await fetch('http://127.0.0.1:8545', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                jsonrpc: '2.0',
                id: Date.now(),
                method: 'eth_sendTransaction',
                params: params
              })
            });
            const result = await response.json();
            if (result.error) throw new Error(result.error.message);
            return result.result;

          case 'eth_call':
          case 'eth_estimateGas':
          case 'eth_getBalance':
          case 'eth_getCode':
          case 'eth_getTransactionCount':
          case 'eth_getTransactionReceipt':
          case 'eth_blockNumber':
          case 'eth_getBlockByNumber':
          case 'eth_getLogs':
            // Forward RPC calls to local node
            const rpcResponse = await fetch('http://127.0.0.1:8545', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                jsonrpc: '2.0',
                id: Date.now(),
                method: method,
                params: params
              })
            });
            const rpcResult = await rpcResponse.json();
            if (rpcResult.error) throw new Error(rpcResult.error.message);
            return rpcResult.result;

          case 'wallet_switchEthereumChain':
            this.chainId = params[0].chainId;
            this.emit('chainChanged', params[0].chainId);
            return null;

          case 'wallet_addEthereumChain':
            return null;

          default:
            console.warn('[MockProvider] Unhandled method:', method);
            return null;
        }
      },

      send(method, params) {
        return this.request({ method, params });
      },

      sendAsync(payload, callback) {
        this.request(payload)
          .then(result => callback(null, { id: payload.id, jsonrpc: '2.0', result }))
          .catch(error => callback(error, null));
      },

      enable() {
        return this.request({ method: 'eth_requestAccounts' });
      }
    };

    // Inject as window.ethereum
    window.ethereum = window.mockEthereumProvider;

    // Also set up EIP-6963 compatible provider
    window.dispatchEvent(new CustomEvent('eip6963:announceProvider', {
      detail: {
        info: {
          uuid: 'mock-wallet-uuid',
          name: 'Mock Wallet',
          icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>'
        },
        provider: window.mockEthereumProvider
      }
    }));

    console.log('[MockProvider] Injected with account: ${account.address}');
  `;
}

export interface WalletTestFixtures {
  connectedPage: Page;
  testAccount: typeof TEST_ACCOUNTS[0];
}

/**
 * Extended test fixture with wallet mocking
 */
export const test = base.extend<WalletTestFixtures>({
  testAccount: async ({}, use) => {
    await use(TEST_ACCOUNTS[0]);
  },

  connectedPage: async ({ page, testAccount }, use) => {
    // Inject mock provider before page loads
    await page.addInitScript(createMockProvider(testAccount));

    // Set TEST_WALLET_CONNECTED env flag for test conditionals
    process.env.TEST_WALLET_CONNECTED = 'true';

    await use(page);

    delete process.env.TEST_WALLET_CONNECTED;
  },
});

export { expect } from '@playwright/test';
export { TEST_ACCOUNTS, LOCALHOST_CHAIN };
