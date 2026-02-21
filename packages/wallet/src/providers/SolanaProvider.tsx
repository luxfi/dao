'use client'

import { useMemo, type ReactNode } from 'react'
import { clusterApiUrl, type Cluster } from '@solana/web3.js'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom'
import { CoinbaseWalletAdapter } from '@solana/wallet-adapter-coinbase'
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare'
import { GlowWalletAdapter } from '@solana/wallet-adapter-glow'
import { WalletConnectWalletAdapter } from '@solana/wallet-adapter-walletconnect'
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { LUX_WALLETCONNECT_PROJECT_ID, LUX_SOLANA_RPC } from '../constants'

// Import Solana wallet styles
import '@solana/wallet-adapter-react-ui/styles.css'

interface SolanaProviderProps {
  children: ReactNode
  network?: 'mainnet-beta' | 'devnet' | 'testnet'
  endpoint?: string
  projectId?: string
}

export function SolanaProvider({
  children,
  network = 'mainnet-beta',
  endpoint,
  projectId = LUX_WALLETCONNECT_PROJECT_ID,
}: SolanaProviderProps) {
  // WalletConnect only supports mainnet and devnet
  const wcNetwork = network === 'mainnet-beta'
    ? WalletAdapterNetwork.Mainnet
    : WalletAdapterNetwork.Devnet

  const rpcEndpoint = useMemo(() => {
    if (endpoint) return endpoint
    if (network === 'mainnet-beta') return LUX_SOLANA_RPC.mainnet
    return clusterApiUrl(network as Cluster)
  }, [endpoint, network])

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new CoinbaseWalletAdapter(),
      new SolflareWalletAdapter(),
      new GlowWalletAdapter(),
      new WalletConnectWalletAdapter({
        network: wcNetwork,
        options: { projectId },
      }),
    ],
    [wcNetwork, projectId]
  )

  return (
    <ConnectionProvider endpoint={rpcEndpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
