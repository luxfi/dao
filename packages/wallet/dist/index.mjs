import { useMemo } from 'react';
import { RainbowKitProvider, darkTheme, lightTheme, getDefaultConfig, ConnectButton } from '@rainbow-me/rainbowkit';
export { ConnectButton, useAccountModal, useChainModal, useConnectModal } from '@rainbow-me/rainbowkit';
import { WagmiProvider, http, useAccount, useDisconnect } from 'wagmi';
export { useAccount, useBalance, useChainId, useConnect, useDisconnect, useSendTransaction, useSignMessage, useSignTypedData, useSwitchChain, useWaitForTransactionReceipt } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@rainbow-me/rainbowkit/styles.css';
import { jsx, jsxs } from 'react/jsx-runtime';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { CoinbaseWalletAdapter } from '@solana/wallet-adapter-coinbase';
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare';
import { GlowWalletAdapter } from '@solana/wallet-adapter-glow';
import { WalletConnectWalletAdapter } from '@solana/wallet-adapter-walletconnect';
import { ConnectionProvider, WalletProvider, useWallet } from '@solana/wallet-adapter-react';
export { useConnection as useSolanaConnection, useWallet as useSolanaWallet } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
export { WalletMultiButton as SolanaConnectButton, WalletDisconnectButton as SolanaDisconnectButton, WalletModalButton as SolanaWalletModalButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { metaMaskWallet, phantomWallet, rainbowWallet, coinbaseWallet, walletConnectWallet, trustWallet, ledgerWallet, okxWallet } from '@rainbow-me/rainbowkit/wallets';

// src/providers/LuxWalletProvider.tsx
var queryClient = new QueryClient();
function EVMProvider({
  children,
  config,
  theme = "dark"
}) {
  return /* @__PURE__ */ jsx(WagmiProvider, { config, children: /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(
    RainbowKitProvider,
    {
      theme: theme === "dark" ? darkTheme({
        accentColor: "#FFD700",
        accentColorForeground: "#000",
        borderRadius: "medium"
      }) : lightTheme({
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
  const wcNetwork = network === "mainnet-beta" ? WalletAdapterNetwork.Mainnet : WalletAdapterNetwork.Devnet;
  const rpcEndpoint = useMemo(() => {
    if (endpoint) return endpoint;
    if (network === "mainnet-beta") return LUX_SOLANA_RPC.mainnet;
    return clusterApiUrl(network);
  }, [endpoint, network]);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new CoinbaseWalletAdapter(),
      new SolflareWalletAdapter(),
      new GlowWalletAdapter(),
      new WalletConnectWalletAdapter({
        network: wcNetwork,
        options: { projectId }
      })
    ],
    [wcNetwork, projectId]
  );
  return /* @__PURE__ */ jsx(ConnectionProvider, { endpoint: rpcEndpoint, children: /* @__PURE__ */ jsx(WalletProvider, { wallets, autoConnect: true, children: /* @__PURE__ */ jsx(WalletModalProvider, { children }) }) });
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
    transports[chain.id] = http();
  }
  return getDefaultConfig({
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
          metaMaskWallet,
          phantomWallet,
          rainbowWallet,
          coinbaseWallet
        ]
      },
      {
        groupName: "More",
        wallets: [
          walletConnectWallet,
          trustWallet,
          ledgerWallet,
          okxWallet
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
  const wagmiConfig = useMemo(() => createWagmiConfig(config), [config]);
  let content = /* @__PURE__ */ jsx(EVMProvider, { config: wagmiConfig, theme, children });
  if (enableSolana) {
    content = /* @__PURE__ */ jsx(SolanaProvider, { network: solanaNetwork, projectId: config.projectId, children: content });
  }
  return content;
}
function useOmniWallet() {
  const evmAccount = useAccount();
  const { disconnect: disconnectEvm } = useDisconnect();
  const solanaWallet = useWallet();
  const connectedWallets = useMemo(() => {
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
  return /* @__PURE__ */ jsxs("div", { className, style: { display: "flex", gap: "8px", alignItems: "center" }, children: [
    /* @__PURE__ */ jsx(
      ConnectButton,
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
    showSolana && /* @__PURE__ */ jsx(WalletMultiButton, { style: {
      backgroundColor: isEvmConnected && !isSolanaConnected ? "#9945FF" : void 0
    } })
  ] });
}

export { EVMProvider, LUX_EVM_RPC, LUX_SOLANA_RPC, LUX_WALLETCONNECT_PROJECT_ID, LuxWalletProvider, OmniConnectButton, SolanaProvider, createWagmiConfig, useOmniWallet };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map