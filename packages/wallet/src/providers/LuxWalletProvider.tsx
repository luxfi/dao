'use client'

import { type ReactNode, useMemo } from 'react'
import { EVMProvider } from './EVMProvider'
import { SolanaProvider } from './SolanaProvider'
import { createWagmiConfig } from '../config'
import type { LuxWalletConfig } from '../types'

interface LuxWalletProviderProps extends LuxWalletConfig {
  children: ReactNode
  theme?: 'dark' | 'light'
}

export function LuxWalletProvider({
  children,
  theme = 'dark',
  enableSolana = false,
  solanaNetwork = 'mainnet-beta',
  ...config
}: LuxWalletProviderProps) {
  const wagmiConfig = useMemo(() => createWagmiConfig(config), [config])

  // Wrap with EVM provider
  let content = (
    <EVMProvider config={wagmiConfig} theme={theme}>
      {children}
    </EVMProvider>
  )

  // Optionally wrap with Solana provider
  if (enableSolana) {
    content = (
      <SolanaProvider network={solanaNetwork} projectId={config.projectId}>
        {content}
      </SolanaProvider>
    )
  }

  return content
}
