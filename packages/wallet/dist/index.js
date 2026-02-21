'use strict';

var react = require('react');
var rainbowkit = require('@rainbow-me/rainbowkit');
var wagmi = require('wagmi');
var reactQuery = require('@tanstack/react-query');
require('@rainbow-me/rainbowkit/styles.css');
var jsxRuntime = require('react/jsx-runtime');
var web3_js = require('@solana/web3.js');
var walletAdapterBase = require('@solana/wallet-adapter-base');
var walletAdapterPhantom = require('@solana/wallet-adapter-phantom');
var walletAdapterCoinbase = require('@solana/wallet-adapter-coinbase');
var walletAdapterSolflare = require('@solana/wallet-adapter-solflare');
var walletAdapterGlow = require('@solana/wallet-adapter-glow');
var walletAdapterWalletconnect = require('@solana/wallet-adapter-walletconnect');
var walletAdapterReact = require('@solana/wallet-adapter-react');
var walletAdapterReactUi = require('@solana/wallet-adapter-react-ui');
require('@solana/wallet-adapter-react-ui/styles.css');
var wallets = require('@rainbow-me/rainbowkit/wallets');

// src/providers/LuxWalletProvider.tsx
var queryClient = new reactQuery.QueryClient();
function EVMProvider({
  children,
  config,
  theme = "dark"
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(wagmi.WagmiProvider, { config, children: /* @__PURE__ */ jsxRuntime.jsx(reactQuery.QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntime.jsx(
    rainbowkit.RainbowKitProvider,
    {
      theme: theme === "dark" ? rainbowkit.darkTheme({
        accentColor: "#FFD700",
        accentColorForeground: "#000",
        borderRadius: "medium"
      }) : rainbowkit.lightTheme({
        accentColor: "#FFD700",
        accentColorForeground: "#000",
        borderRadius: "medium"
      }),
      modalSize: "compact",
      children
    }
  ) }) });
}

// src/constants.ts
var LUX_WALLETCONNECT_PROJECT_ID = "e89228fed40d4c6e9520912214dfd68b";
var LUX_SOLANA_RPC = {
  mainnet: "https://solana-rpc.lux.network",
  devnet: "https://solana-devnet.lux.network"
};
var LUX_EVM_RPC = {
  lux: "https://rpc.lux.network",
  pars: "https://rpc.pars.network"
};
function SolanaProvider({
  children,
  network = "mainnet-beta",
  endpoint,
  projectId = LUX_WALLETCONNECT_PROJECT_ID
}) {
  const wcNetwork = network === "mainnet-beta" ? walletAdapterBase.WalletAdapterNetwork.Mainnet : walletAdapterBase.WalletAdapterNetwork.Devnet;
  const rpcEndpoint = react.useMemo(() => {
    if (endpoint) return endpoint;
    if (network === "mainnet-beta") return LUX_SOLANA_RPC.mainnet;
    return web3_js.clusterApiUrl(network);
  }, [endpoint, network]);
  const wallets = react.useMemo(
    () => [
      new walletAdapterPhantom.PhantomWalletAdapter(),
      new walletAdapterCoinbase.CoinbaseWalletAdapter(),
      new walletAdapterSolflare.SolflareWalletAdapter(),
      new walletAdapterGlow.GlowWalletAdapter(),
      new walletAdapterWalletconnect.WalletConnectWalletAdapter({
        network: wcNetwork,
        options: { projectId }
      })
    ],
    [wcNetwork, projectId]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(walletAdapterReact.ConnectionProvider, { endpoint: rpcEndpoint, children: /* @__PURE__ */ jsxRuntime.jsx(walletAdapterReact.WalletProvider, { wallets, autoConnect: true, children: /* @__PURE__ */ jsxRuntime.jsx(walletAdapterReactUi.WalletModalProvider, { children }) }) });
}
function createWagmiConfig(config) {
  const {
    appName,
    appDescription = "Powered by Lux Network",
    appUrl = "https://lux.network",
    appIcon = "https://lux.network/favicon.svg",
    projectId = LUX_WALLETCONNECT_PROJECT_ID,
    chains
  } = config;
  const transports = {};
  for (const chain of chains) {
    transports[chain.id] = wagmi.http();
  }
  return rainbowkit.getDefaultConfig({
    appName,
    appDescription,
    appUrl,
    appIcon,
    projectId,
    chains,
    transports,
    wallets: [
      {
        groupName: "Popular",
        wallets: [
          wallets.metaMaskWallet,
          wallets.phantomWallet,
          wallets.rainbowWallet,
          wallets.coinbaseWallet
        ]
      },
      {
        groupName: "More",
        wallets: [
          wallets.walletConnectWallet,
          wallets.trustWallet,
          wallets.ledgerWallet,
          wallets.okxWallet
        ]
      }
    ]
  });
}
function LuxWalletProvider({
  children,
  theme = "dark",
  enableSolana = false,
  solanaNetwork = "mainnet-beta",
  ...config
}) {
  const wagmiConfig = react.useMemo(() => createWagmiConfig(config), [config]);
  let content = /* @__PURE__ */ jsxRuntime.jsx(EVMProvider, { config: wagmiConfig, theme, children });
  if (enableSolana) {
    content = /* @__PURE__ */ jsxRuntime.jsx(SolanaProvider, { network: solanaNetwork, projectId: config.projectId, children: content });
  }
  return content;
}
function useOmniWallet() {
  const evmAccount = wagmi.useAccount();
  const { disconnect: disconnectEvm } = wagmi.useDisconnect();
  const solanaWallet = walletAdapterReact.useWallet();
  const connectedWallets = react.useMemo(() => {
    const wallets = [];
    if (evmAccount.address) {
      wallets.push({
        address: evmAccount.address,
        networkType: "evm",
        chainId: evmAccount.chainId
      });
    }
    if (solanaWallet.publicKey) {
      wallets.push({
        address: solanaWallet.publicKey.toBase58(),
        networkType: "solana"
      });
    }
    return wallets;
  }, [evmAccount.address, evmAccount.chainId, solanaWallet.publicKey]);
  const isConnected = connectedWallets.length > 0;
  const isEvmConnected = !!evmAccount.address;
  const isSolanaConnected = !!solanaWallet.publicKey;
  const disconnectAll = () => {
    if (evmAccount.address) disconnectEvm();
    if (solanaWallet.connected) solanaWallet.disconnect();
  };
  return {
    // EVM
    evmAddress: evmAccount.address,
    evmChainId: evmAccount.chainId,
    isEvmConnected,
    disconnectEvm,
    // Solana
    solanaAddress: solanaWallet.publicKey?.toBase58(),
    isSolanaConnected,
    disconnectSolana: solanaWallet.disconnect,
    // Unified
    connectedWallets,
    isConnected,
    disconnectAll
  };
}
function OmniConnectButton({
  showSolana = false,
  className
}) {
  const { isEvmConnected, isSolanaConnected } = useOmniWallet();
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className, style: { display: "flex", gap: "8px", alignItems: "center" }, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      rainbowkit.ConnectButton,
      {
        chainStatus: "icon",
        accountStatus: {
          smallScreen: "avatar",
          largeScreen: "full"
        },
        showBalance: {
          smallScreen: false,
          largeScreen: true
        }
      }
    ),
    showSolana && /* @__PURE__ */ jsxRuntime.jsx(walletAdapterReactUi.WalletMultiButton, { style: {
      backgroundColor: isEvmConnected && !isSolanaConnected ? "#9945FF" : void 0
    } })
  ] });
}

Object.defineProperty(exports, "ConnectButton", {
  enumerable: true,
  get: function () { return rainbowkit.ConnectButton; }
});
Object.defineProperty(exports, "useAccountModal", {
  enumerable: true,
  get: function () { return rainbowkit.useAccountModal; }
});
Object.defineProperty(exports, "useChainModal", {
  enumerable: true,
  get: function () { return rainbowkit.useChainModal; }
});
Object.defineProperty(exports, "useConnectModal", {
  enumerable: true,
  get: function () { return rainbowkit.useConnectModal; }
});
Object.defineProperty(exports, "useAccount", {
  enumerable: true,
  get: function () { return wagmi.useAccount; }
});
Object.defineProperty(exports, "useBalance", {
  enumerable: true,
  get: function () { return wagmi.useBalance; }
});
Object.defineProperty(exports, "useChainId", {
  enumerable: true,
  get: function () { return wagmi.useChainId; }
});
Object.defineProperty(exports, "useConnect", {
  enumerable: true,
  get: function () { return wagmi.useConnect; }
});
Object.defineProperty(exports, "useDisconnect", {
  enumerable: true,
  get: function () { return wagmi.useDisconnect; }
});
Object.defineProperty(exports, "useSendTransaction", {
  enumerable: true,
  get: function () { return wagmi.useSendTransaction; }
});
Object.defineProperty(exports, "useSignMessage", {
  enumerable: true,
  get: function () { return wagmi.useSignMessage; }
});
Object.defineProperty(exports, "useSignTypedData", {
  enumerable: true,
  get: function () { return wagmi.useSignTypedData; }
});
Object.defineProperty(exports, "useSwitchChain", {
  enumerable: true,
  get: function () { return wagmi.useSwitchChain; }
});
Object.defineProperty(exports, "useWaitForTransactionReceipt", {
  enumerable: true,
  get: function () { return wagmi.useWaitForTransactionReceipt; }
});
Object.defineProperty(exports, "useSolanaConnection", {
  enumerable: true,
  get: function () { return walletAdapterReact.useConnection; }
});
Object.defineProperty(exports, "useSolanaWallet", {
  enumerable: true,
  get: function () { return walletAdapterReact.useWallet; }
});
Object.defineProperty(exports, "SolanaConnectButton", {
  enumerable: true,
  get: function () { return walletAdapterReactUi.WalletMultiButton; }
});
Object.defineProperty(exports, "SolanaDisconnectButton", {
  enumerable: true,
  get: function () { return walletAdapterReactUi.WalletDisconnectButton; }
});
Object.defineProperty(exports, "SolanaWalletModalButton", {
  enumerable: true,
  get: function () { return walletAdapterReactUi.WalletModalButton; }
});
exports.EVMProvider = EVMProvider;
exports.LUX_EVM_RPC = LUX_EVM_RPC;
exports.LUX_SOLANA_RPC = LUX_SOLANA_RPC;
exports.LUX_WALLETCONNECT_PROJECT_ID = LUX_WALLETCONNECT_PROJECT_ID;
exports.LuxWalletProvider = LuxWalletProvider;
exports.OmniConnectButton = OmniConnectButton;
exports.SolanaProvider = SolanaProvider;
exports.createWagmiConfig = createWagmiConfig;
exports.useOmniWallet = useOmniWallet;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map