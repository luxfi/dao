import type { Chain } from 'viem'

export interface LuxWalletConfig {
  appName: string
  appDescription?: string
  appUrl?: string
  appIcon?: string
  projectId?: string
  chains: Chain[]
  solanaNetwork?: 'mainnet-beta' | 'devnet' | 'testnet'
  enableSolana?: boolean
}

export type NetworkType = 'evm' | 'solana'

export interface ConnectedWallet {
  address: string
  networkType: NetworkType
  chainId?: number
}
