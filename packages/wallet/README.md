# @luxfi/wallet

Lux Omnichain Wallet SDK - RainbowKit + Solana wallet adapters unified.

## Installation

```bash
pnpm add @luxfi/wallet
```

## Usage

### Basic EVM Setup

```tsx
import { LuxWalletProvider, ConnectButton } from '@luxfi/wallet'
import '@luxfi/wallet/styles.css'
import { mainnet, polygon, optimism } from 'wagmi/chains'

function App() {
  return (
    <LuxWalletProvider
      appName="My App"
      chains={[mainnet, polygon, optimism]}
    >
      <ConnectButton />
    </LuxWalletProvider>
  )
}
```

### With Solana Support

```tsx
import { LuxWalletProvider, OmniConnectButton } from '@luxfi/wallet'
import '@luxfi/wallet/styles.css'

function App() {
  return (
    <LuxWalletProvider
      appName="My App"
      chains={[mainnet]}
      enableSolana
      solanaNetwork="mainnet-beta"
    >
      <OmniConnectButton showSolana />
    </LuxWalletProvider>
  )
}
```

### Using Hooks

```tsx
import { useAccount, useOmniWallet } from '@luxfi/wallet'

function WalletStatus() {
  // EVM only
  const { address, chainId } = useAccount()

  // Both EVM and Solana
  const {
    evmAddress,
    solanaAddress,
    connectedWallets,
    disconnectAll
  } = useOmniWallet()

  return <div>Connected: {connectedWallets.length} wallets</div>
}
```

## Features

- **RainbowKit v2** - Beautiful wallet connection UI
- **Solana Wallet Adapters** - Phantom, Solflare, Coinbase, Glow, WalletConnect
- **Unified Hooks** - `useOmniWallet` for cross-chain wallet state
- **Dark/Light Theme** - Customizable theming
- **Lux Defaults** - Pre-configured for Lux Network

## Supported Wallets

### EVM
- MetaMask
- Rainbow
- Coinbase Wallet
- WalletConnect
- Trust Wallet
- Ledger
- Phantom (EVM)
- OKX Wallet

### Solana
- Phantom
- Solflare
- Coinbase Wallet
- Glow
- WalletConnect

## Configuration

```tsx
interface LuxWalletConfig {
  appName: string
  appDescription?: string
  appUrl?: string
  appIcon?: string
  projectId?: string // WalletConnect project ID (uses Lux shared by default)
  chains: Chain[]
  enableSolana?: boolean
  solanaNetwork?: 'mainnet-beta' | 'devnet' | 'testnet'
}
```

## License

MIT
