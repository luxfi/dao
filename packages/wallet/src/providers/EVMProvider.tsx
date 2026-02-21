'use client'

import { type ReactNode } from 'react'
import { RainbowKitProvider, darkTheme, lightTheme } from '@rainbow-me/rainbowkit'
import { WagmiProvider, type Config } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Import RainbowKit styles
import '@rainbow-me/rainbowkit/styles.css'

const queryClient = new QueryClient()

interface EVMProviderProps {
  children: ReactNode
  config: Config
  theme?: 'dark' | 'light'
}

export function EVMProvider({
  children,
  config,
  theme = 'dark',
}: EVMProviderProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={theme === 'dark' ? darkTheme({
            accentColor: '#FFD700',
            accentColorForeground: '#000',
            borderRadius: 'medium',
          }) : lightTheme({
            accentColor: '#FFD700',
            accentColorForeground: '#000',
            borderRadius: 'medium',
          })}
          modalSize="compact"
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
