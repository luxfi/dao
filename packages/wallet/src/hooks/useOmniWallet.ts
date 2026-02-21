import { useAccount, useDisconnect } from 'wagmi'
import { useWallet as useSolanaWallet } from '@solana/wallet-adapter-react'
import { useMemo } from 'react'
import type { ConnectedWallet } from '../types'

/**
 * Unified hook for both EVM and Solana wallets
 */
export function useOmniWallet() {
  const evmAccount = useAccount()
  const { disconnect: disconnectEvm } = useDisconnect()

  const solanaWallet = useSolanaWallet()

  const connectedWallets = useMemo<ConnectedWallet[]>(() => {
    const wallets: ConnectedWallet[] = []

    if (evmAccount.address) {
      wallets.push({
        address: evmAccount.address,
        networkType: 'evm',
        chainId: evmAccount.chainId,
      })
    }

    if (solanaWallet.publicKey) {
      wallets.push({
        address: solanaWallet.publicKey.toBase58(),
        networkType: 'solana',
      })
    }

    return wallets
  }, [evmAccount.address, evmAccount.chainId, solanaWallet.publicKey])

  const isConnected = connectedWallets.length > 0
  const isEvmConnected = !!evmAccount.address
  const isSolanaConnected = !!solanaWallet.publicKey

  const disconnectAll = () => {
    if (evmAccount.address) disconnectEvm()
    if (solanaWallet.connected) solanaWallet.disconnect()
  }

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
    disconnectAll,
  }
}
