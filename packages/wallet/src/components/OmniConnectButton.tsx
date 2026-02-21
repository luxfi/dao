'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useOmniWallet } from '../hooks/useOmniWallet'

interface OmniConnectButtonProps {
  showSolana?: boolean
  className?: string
}

/**
 * Unified connect button for both EVM and Solana
 */
export function OmniConnectButton({
  showSolana = false,
  className,
}: OmniConnectButtonProps) {
  const { isEvmConnected, isSolanaConnected } = useOmniWallet()

  return (
    <div className={className} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <ConnectButton
        chainStatus="icon"
        accountStatus={{
          smallScreen: 'avatar',
          largeScreen: 'full',
        }}
        showBalance={{
          smallScreen: false,
          largeScreen: true,
        }}
      />
      {showSolana && (
        <WalletMultiButton style={{
          backgroundColor: isEvmConnected && !isSolanaConnected ? '#9945FF' : undefined,
        }} />
      )}
    </div>
  )
}
