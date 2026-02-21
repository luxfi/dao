// Re-export wagmi hooks
export {
  useAccount,
  useConnect,
  useDisconnect,
  useBalance,
  useChainId,
  useSwitchChain,
  useSignMessage,
  useSignTypedData,
  useSendTransaction,
  useWaitForTransactionReceipt,
} from 'wagmi'

// Re-export RainbowKit hooks
export {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from '@rainbow-me/rainbowkit'

// Re-export Solana hooks
export {
  useConnection as useSolanaConnection,
  useWallet as useSolanaWallet,
} from '@solana/wallet-adapter-react'

// Custom unified hooks
export { useOmniWallet } from './useOmniWallet'
