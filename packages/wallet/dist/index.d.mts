import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';
import { Chain, HttpTransport } from 'viem';
import * as wagmi from 'wagmi';
import { Config } from 'wagmi';
export { useAccount, useBalance, useChainId, useConnect, useDisconnect, useSendTransaction, useSignMessage, useSignTypedData, useSwitchChain, useWaitForTransactionReceipt } from 'wagmi';
export { ConnectButton, useAccountModal, useChainModal, useConnectModal } from '@rainbow-me/rainbowkit';
export { useConnection as useSolanaConnection, useWallet as useSolanaWallet } from '@solana/wallet-adapter-react';
import * as wagmi_query from 'wagmi/query';
export { WalletMultiButton as SolanaConnectButton, WalletDisconnectButton as SolanaDisconnectButton, WalletModalButton as SolanaWalletModalButton } from '@solana/wallet-adapter-react-ui';

interface LuxWalletConfig {
    appName: string;
    appDescription?: string;
    appUrl?: string;
    appIcon?: string;
    projectId?: string;
    chains: Chain[];
    solanaNetwork?: 'mainnet-beta' | 'devnet' | 'testnet';
    enableSolana?: boolean;
}
type NetworkType = 'evm' | 'solana';
interface ConnectedWallet {
    address: string;
    networkType: NetworkType;
    chainId?: number;
}

interface LuxWalletProviderProps extends LuxWalletConfig {
    children: ReactNode;
    theme?: 'dark' | 'light';
}
declare function LuxWalletProvider({ children, theme, enableSolana, solanaNetwork, ...config }: LuxWalletProviderProps): react_jsx_runtime.JSX.Element;

interface EVMProviderProps {
    children: ReactNode;
    config: Config;
    theme?: 'dark' | 'light';
}
declare function EVMProvider({ children, config, theme, }: EVMProviderProps): react_jsx_runtime.JSX.Element;

interface SolanaProviderProps {
    children: ReactNode;
    network?: 'mainnet-beta' | 'devnet' | 'testnet';
    endpoint?: string;
    projectId?: string;
}
declare function SolanaProvider({ children, network, endpoint, projectId, }: SolanaProviderProps): react_jsx_runtime.JSX.Element;

declare function createWagmiConfig(config: LuxWalletConfig): wagmi.Config<[Chain, ...Chain[]], Record<number, HttpTransport>, wagmi.CreateConnectorFn<unknown, Record<string, unknown>, Record<string, unknown>>[]>;

/**
 * Unified hook for both EVM and Solana wallets
 */
declare function useOmniWallet(): {
    evmAddress: `0x${string}` | undefined;
    evmChainId: number | undefined;
    isEvmConnected: boolean;
    disconnectEvm: wagmi_query.DisconnectMutate<unknown>;
    solanaAddress: string | undefined;
    isSolanaConnected: boolean;
    disconnectSolana: () => Promise<void>;
    connectedWallets: ConnectedWallet[];
    isConnected: boolean;
    disconnectAll: () => void;
};

interface OmniConnectButtonProps {
    showSolana?: boolean;
    className?: string;
}
/**
 * Unified connect button for both EVM and Solana
 */
declare function OmniConnectButton({ showSolana, className, }: OmniConnectButtonProps): react_jsx_runtime.JSX.Element;

declare const LUX_WALLETCONNECT_PROJECT_ID = "e89228fed40d4c6e9520912214dfd68b";
declare const LUX_SOLANA_RPC: {
    readonly mainnet: "https://solana-rpc.lux.network";
    readonly devnet: "https://solana-devnet.lux.network";
};
declare const LUX_EVM_RPC: {
    readonly lux: "https://rpc.lux.network";
    readonly pars: "https://rpc.pars.network";
};

export { type ConnectedWallet, EVMProvider, LUX_EVM_RPC, LUX_SOLANA_RPC, LUX_WALLETCONNECT_PROJECT_ID, type LuxWalletConfig, LuxWalletProvider, type NetworkType, OmniConnectButton, SolanaProvider, createWagmiConfig, useOmniWallet };
