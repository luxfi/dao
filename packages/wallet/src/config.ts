import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import {
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
  trustWallet,
  ledgerWallet,
  phantomWallet,
  okxWallet,
  coinbaseWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { http } from 'wagmi'
import type { Chain, HttpTransport } from 'viem'
import { LUX_WALLETCONNECT_PROJECT_ID } from './constants'
import type { LuxWalletConfig } from './types'

export function createWagmiConfig(config: LuxWalletConfig) {
  const {
    appName,
    appDescription = 'Powered by Lux Network',
    appUrl = 'https://lux.network',
    appIcon = 'https://lux.network/favicon.svg',
    projectId = LUX_WALLETCONNECT_PROJECT_ID,
    chains,
  } = config

  // Build transports for each chain
  const transports: Record<number, HttpTransport> = {}
  for (const chain of chains) {
    transports[chain.id] = http()
  }

  return getDefaultConfig({
    appName,
    appDescription,
    appUrl,
    appIcon,
    projectId,
    chains: chains as [Chain, ...Chain[]],
    transports,
    wallets: [
      {
        groupName: 'Popular',
        wallets: [
          metaMaskWallet,
          phantomWallet,
          rainbowWallet,
          coinbaseWallet,
        ],
      },
      {
        groupName: 'More',
        wallets: [
          walletConnectWallet,
          trustWallet,
          ledgerWallet,
          okxWallet,
        ],
      },
    ],
  })
}
