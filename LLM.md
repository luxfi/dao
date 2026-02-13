# LLM.md - Lux DAO Project Documentation

## Overview
Lux DAO is a decentralized autonomous organization platform built for the Lux Protocol ecosystem. It enables transparent, accountable governance that evolves with the community needs at lux.vote.

## Project Location
✅ **Isolated in luxdao/stack** - The DAO project is now isolated in `/Users/z/work/luxdao/stack/dao/` separate from the main Lux monorepo for easier independent development and deployment.

## Project Status
✅ **Successfully Running Locally** - All critical issues resolved
- Fixed Docker space issues with local development script
- Resolved all import errors (useDAOModal → useLuxModal, DAOTooltip → LuxTooltip)
- Fixed contract configuration for localhost deployment
- Flipped triangle logo to point downward as requested
- Updated favicon and branding to Lux Protocol
- Configured Playwright E2E tests for wallet connection
- **Monochromatic theme applied** - Using only black/white/grays with Inter font
- **Switched to Anvil** - Better performance than Hardhat for local development
- **E2E Tests Running** - 5/7 tests passing, wallet connection working
- **Scripts Organized** - All scripts moved to scripts/ directory, no one-off scripts
- **Makefile Complete** - Single entry point for all commands including `make test`
- **Docker Compose Ready** - Full stack with Anvil, API, indexer, PostgreSQL, Redis, IPFS
- **Contract Deployment** - Scripts support both local and Docker environments

## Architecture

### Technology Stack
- **Frontend**: React 18 + TypeScript + Vite
- **UI Framework**: Chakra UI with custom Lux theme
- **Web3**: Wagmi v2, Viem v2, RainbowKit v2 (migrated from Web3Modal)
- **Wallet SDK**: @luxfi/wallet - Omnichain wallet (EVM + Solana)
- **Smart Contracts**: Hardhat + Solidity
- **Testing**: Playwright for E2E tests
- **State Management**: React Query + Zustand
- **Package Manager**: pnpm

### Project Structure
```
/dao/
├── app/                 # React frontend application
│   ├── src/
│   │   ├── assets/     # Icons, themes, images
│   │   ├── components/ # React components
│   │   ├── pages/      # Route pages
│   │   ├── providers/  # Context providers
│   │   └── utils/      # Utility functions
│   └── public/         # Static assets
├── contracts/          # Smart contracts (@luxfi/contracts)
│   ├── contracts/      # Solidity contracts
│   ├── ignition/       # Hardhat Ignition deployment modules
│   └── publish/        # Contract ABIs and addresses (re-exports @luxfi/standard)
├── api/                # Backend API
├── sdk/                # TypeScript SDK
├── subgraph/           # Graph Protocol integration
├── packages/
│   └── wallet/         # @luxfi/wallet SDK (RainbowKit + Solana)
└── e2e/                # E2E test suites
```

### @luxfi/wallet SDK
Shared omnichain wallet SDK for Lux ecosystem apps.

**Location**: `/packages/wallet/`

**Features**:
- RainbowKit v2 for EVM wallet connections
- Solana wallet adapters (Phantom, Solflare, Coinbase, Glow, WalletConnect)
- Unified `useOmniWallet` hook for cross-chain state
- Pre-configured with Lux shared WalletConnect Project ID
- Dark theme by default

**Usage**:
```tsx
import { LuxWalletProvider, ConnectButton } from '@luxfi/wallet'
import '@luxfi/wallet/styles.css'

<LuxWalletProvider appName="My App" chains={[mainnet]}>
  <ConnectButton />
</LuxWalletProvider>
```

**Exports**:
- `LuxWalletProvider` - Main provider (wraps RainbowKit + optional Solana)
- `ConnectButton` - RainbowKit connect button
- `OmniConnectButton` - Multi-chain connect (EVM + Solana)
- `useOmniWallet` - Hook for both EVM and Solana wallet state
- `useAccount`, `useConnect`, `useDisconnect` - Re-exported from wagmi

## Key Components

### Branding & UI
- **Logo**: Inverted triangle (pointing downward) in Lux purple (#DCC8F0)
- **Theme**: Dark mode with Lux color palette
- **Icon**: `LuxTriangle` component used throughout the app
- **Favicon**: lux-triangle.svg

### Smart Contracts (Lux Governor Protocol)

**Core Governance (from @luxfi/standard)**:
- **ModuleGovernorV1**: Central governance module managing proposals
- **StrategyV1**: Voting strategy with quorum and timelock
- **ModuleFractalV1**: Parent-child DAO relationships (SubDAO)
- **FreezeGuardGovernorV1**: Transaction freezing mechanism
- **FreezeVotingGovernorV1**: Freeze voting for parent DAOs

**Voting Weight Adapters**:
- **VotingWeightERC20V1**: ERC20 token-based voting
- **VotingWeightERC721V1**: NFT-based voting
- **ProposerAdapterHatsV1**: Hats Protocol integration

**Tokens & Utilities**:
- **VotesERC20V1**: Voting-enabled ERC20 token
- **KeyValuePairsV1**: On-chain key-value storage
- **SystemDeployerV1**: Orchestrates contract deployments
- **AutonomousAdminV1**: Admin functions
- **PaymasterV1**: Account abstraction paymaster

### Network Configuration
- **Localhost**: Chain ID 1337 for development
- **Mainnet Support**: Ethereum, Optimism, Polygon, Base, Sepolia
- **RPC Endpoints**: Configured for each network
- **Contract Addresses**: Properly mapped per chain

## Development Workflow

### Local Development (Without Docker)
```bash
# Using Makefile (recommended)
make install       # Install dependencies
make up           # Start local development
make test         # Run all tests
make down         # Stop services

# Direct scripts
./scripts/start-local.sh    # Start services
./scripts/stop-local.sh     # Stop services
```

### Docker Development (Full Stack)
```bash
# Build and start all services
make build-docker  # Build Docker images
make up-docker     # Start with Docker Compose
make logs-docker   # View logs
make down-docker   # Stop services

# Services included:
# - Anvil blockchain (port 8545)
# - Frontend app (port 3000)
# - API backend (port 4000)
# - PostgreSQL database (port 5432)
# - Redis cache (port 6379)
# - IPFS storage (port 8080/5001)
# - Graph Node (optional, port 8000)
# - Grafana monitoring (optional, port 3001)
```

### Git Workflow
```bash
# Initial commit made with all fixes
git add -A
git commit -m "Initial commit: Lux DAO with flipped triangle logo and Lux Protocol branding"
```

## Recent Fixes & Improvements

### Import Path Fixes
1. **useDAOModal → useLuxModal**: Updated all imports across 150+ files
2. **DAOTooltip → LuxTooltip**: Fixed tooltip component references
3. **Created Missing Modules**:
   - `useDAOAPI.ts`: DAO search functionality
   - `DAOHourGlass.tsx`: Loading indicator component
   - `useDAOModules.ts`: DAO module management

### Contract Configuration
1. **ES Module Conversion**: Fixed CommonJS to ES module syntax in publish files
2. **Localhost Addresses**: Added proper chain ID 1337 configuration
3. **Null Safety**: Added checks to prevent undefined contract errors
4. **Deployables Export**: Fixed missing deployables property in exports

### UI/UX Updates
1. **Logo Orientation**: Flipped triangle to point downward (M10 20 L90 20 L50 90 Z)
2. **Favicon**: Created lux-triangle.svg with proper colors
3. **Theme Integration**: Applied Lux purple (#DCC8F0) consistently

## Testing

### E2E Tests
- **Framework**: Playwright
- **Test Location**: `/e2e/wallet-connection.spec.ts`
- **Coverage**: Wallet connection, homepage loading, logo verification
- **Screenshots**: Captured in `.playwright-mcp/` directory

### Running Tests
```bash
# Run E2E tests
npm test

# Run with UI
npx playwright test --ui

# Debug mode
npx playwright test --debug
```

## Known Issues & TODOs

### Current Warnings
1. **Public Asset Import**: Warning about importing from public directory
   - Solution: Move warning-yellow.svg to src/images/
2. **Contract Address Errors**: Some contract addresses return undefined
   - Temporary fix: Null checks added, needs proper contract deployment

### Future Improvements
1. Configure proper git remote for pushing to repository
2. Deploy contracts to testnet/mainnet
3. Implement Lux Consensus integration
4. Add comprehensive test coverage
5. Set up CI/CD pipeline
6. Document API endpoints

## Lux Consensus Integration

### Planned Features
1. **Consensus Parameters**: Configure for 21-node mainnet, 11-node testnet
2. **Chain Integration**: Connect to Lux L1/L2/L3 architecture
3. **Validator Support**: Enable validator participation in governance
4. **Cross-Chain**: Bridge governance tokens between chains

### Configuration
```typescript
// Future Lux integration
const luxConfig = {
  mainnet: {
    chainId: 96369,
    validators: 21,
    consensusTime: '9.63s'
  },
  testnet: {
    chainId: 96368,
    validators: 11,
    consensusTime: '6.3s'
  }
}
```

## Deployment

### Local Deployment
```bash
# Start all services
make up

# Or run individually
cd contracts && npx hardhat node
cd app && pnpm dev
```

### Production Deployment
- **Domain**: lux.vote (Lux DAO), pars.vote (Pars DAO)
- **pars.vote**: Deployed via GitHub Pages from `parsdao/pars.vote` repo
- **Infrastructure**: GitHub Pages with Cloudflare CDN
- **SSL**: Required for Web3 wallet connections
- **CDN**: Cloudflare for global distribution

### pars.vote Deployment (2026-01-30)
- Rebranded from CYRUS DAO to Pars DAO
- Repository: `parsdao/pars.vote`
- Deployment: GitHub Actions → GitHub Pages
- Changes made:
  - `.env`: VITE_APP_NAME="Pars DAO", VITE_APP_SITE_URL="https://pars.vote"
  - Locale files: Updated CYRUS → PARS references
  - E2E tests: Updated for Pars branding
  - Favicon: Changed from "C" to "P"
  - **Wallet Migration**: Web3Modal → RainbowKit v2
    - `Providers.tsx`: Added RainbowKitProvider with dark theme
    - `web3-modal.config.ts`: Converted to RainbowKit getDefaultConfig
    - `WalletMenu.tsx`: useWeb3Modal → useConnectModal
  - Uses Lux shared infrastructure (rpc.lux.network, ipfs.lux.network)

## Security Considerations

1. **Smart Contract Audits**: Required before mainnet deployment
2. **Private Keys**: Never commit to repository
3. **RPC Endpoints**: Use environment variables
4. **CORS Configuration**: Properly configure for production
5. **Input Validation**: Sanitize all user inputs

## Contributing

### Code Style
- TypeScript strict mode enabled
- ESLint + Prettier configured
- Component naming: PascalCase
- File naming: kebab-case for utils, PascalCase for components

### Pull Request Process
1. Create feature branch from develop
2. Make changes and test locally
3. Run linter and fix issues
4. Create PR with detailed description
5. Ensure CI passes
6. Request review from maintainers

## Package Architecture

### @luxfi/standard (Core Library)
- **Location**: `~/work/lux/standard/contracts`
- **Exports**: Governance ABIs (GovernorAbi, StrategyAbi, SubDAOAbi, etc.)
- **NPM**: `npm i @luxfi/standard`

### @luxfi/contracts (DAO Contracts)
- **Location**: `~/work/lux/dao/contracts`
- **Depends on**: @luxfi/standard
- **Exports**: Re-exports @luxfi/standard ABIs + DAO-specific addresses
- **NPM**: `npm i @luxfi/contracts`

### Import Usage
```typescript
// From @luxfi/contracts (DAO apps)
import { GovernorAbi, StrategyAbi, abis, addresses } from '@luxfi/contracts';

// From @luxfi/standard directly (general use)
import { GovernorAbi, StrategyAbi } from '@luxfi/standard';
```

## Resources

- **Documentation**: https://lux.vote (future)
- **Smart Contracts**: Deployed addresses in `/contracts/publish/`
- **UI Components**: Chakra UI documentation
- **Web3 Integration**: Wagmi v2 documentation

## Maintenance Notes

### Regular Updates Required
1. Dependencies: Check for security updates monthly
2. Contract upgrades: Follow governance process
3. UI/UX improvements: Based on user feedback
4. Performance optimization: Monitor and improve

### Monitoring
- Error tracking: Implement Sentry or similar
- Analytics: Privacy-respecting analytics
- Performance: Web Vitals monitoring
- Uptime: Service availability checks

## Recent Changes (2026-01-30)

### @luxfi/standard Import Standardization

All contracts in `@luxfi/standard` now use consistent import paths via re-export modules instead of direct `@openzeppelin` imports:

**Re-export Modules**:
- `@luxfi/standard/tokens/ERC20.sol` → IERC20, SafeERC20, ERC20, all extensions
- `@luxfi/standard/access/Access.sol` → Ownable, AccessControl, all extensions
- `@luxfi/standard/utils/Utils.sol` → ReentrancyGuard, Pausable, EnumerableSet, Math, etc.

**foundry.toml remapping added**:
```toml
"@luxfi/standard/=contracts/",  # Primary package name
```

**Why**: Consistent API, easier to maintain, single source of truth for OpenZeppelin exports.

### Treasury Contracts (OHM-Style Bonding)

New treasury contracts for OHM-style bonding with sats-based pricing:

| Contract | Purpose |
|----------|---------|
| `LiquidBond.sol` | OHM-style bonding for ASHA with multi-collateral support |
| `CollateralRegistry.sol` | Registry for bondable assets with risk tiers |
| `Bond.sol` | DAO treasury bond issuance with vesting |
| `Recall.sol` | Parent DAO fund recall mechanism (ALLOCATED only, not BONDED) |

**Key Design Principles**:
- **Sats-Based Pricing**: All values in satoshis (BTC base unit), NOT USD
- **Commodity Swaps**: ETH→ASHA is commodity-to-commodity, cleaner legally
- **Global Compliance**: Designed for real DAOs/non-profits worldwide
- **Community Sovereignty**: BONDED funds (from bonds) cannot be recalled by parent DAOs

**Collateral Tiers**:
| Tier | Assets | Discount |
|------|--------|----------|
| TIER_1 | Native ecosystem (LUSD, LETH, CYRUS, MIGA, PARS) | 25% |
| TIER_2 | Major assets (ETH, BTC wrappers, stables) | 20% |
| TIER_3 | LP tokens (ASHA pairs) | 15% |
| TIER_4 | Other volatile assets | 10% |

**Integration with Liquid Protocol**:
- All L* tokens (LUSD, LETH, LBTC, etc.) can be whitelisted
- Non-whitelisted assets can swap to primary collateral
- LP tokens with ASHA pairs get bonus discounts

### Liquid Protocol Architecture

**Two Distinct Mechanisms**:

| Mechanism | What Happens | Rate |
|-----------|--------------|------|
| **Liquid Staking** (L* tokens) | Deposit ETH → LETH, deposit BTC → LBTC | 1:1 in-kind |
| **ASHA Bonding** | Deposit collateral → ASHA | Discounted (10-25%) |

**Ecosystem L* Tokens** (added 2026-01-30):
- `LCYRUS` - Liquid CYRUS (1:1, TIER_1 collateral)
- `LMIGA` - Liquid MIGA (1:1, TIER_1 collateral)
- `LPARS` - Liquid PARS (1:1, TIER_1 collateral)

**Complete L* Token List**:
```
LETH, LBTC, LUSD, LSOL, LAVAX, LBNB, LPOL, LTON, LFTM, LCELO,
LCYRUS, LMIGA, LPARS (ecosystem)
LADA, LAI16Z, LBLAST, LBOME, LBONK, LDOGS, LFWOG, LGIGA,
LMEW, LMOODENG, LMRB, LNOT, LPNUT, LPONKE, LPOPCAT, LREDO,
LWIF, LXDAI, LZOO (memecoins/others)
```

**Flow**:
```
┌─────────────────────────────────────────────────────────────────┐
│                     LIQUID PROTOCOL                              │
├─────────────────────────────────────────────────────────────────┤
│  Deposit ETH  ──► LETH (1:1)  ──► Use as collateral            │
│  Deposit BTC  ──► LBTC (1:1)  ──► Use as collateral            │
│  Deposit CYRUS ─► LCYRUS (1:1) ─► Use as collateral            │
│  Deposit MIGA ──► LMIGA (1:1) ──► Use as collateral            │
│  Deposit PARS ──► LPARS (1:1) ──► Use as collateral            │
├─────────────────────────────────────────────────────────────────┤
│                     ASHA BONDING                                 │
├─────────────────────────────────────────────────────────────────┤
│  LETH/LBTC/LCYRUS... ──► Bond ──► ASHA (discounted, vested)    │
│  25% discount for TIER_1 (ecosystem)                            │
│  20% discount for TIER_2 (majors)                               │
│  15% discount for TIER_3 (LP tokens)                            │
│  10% discount for TIER_4 (volatile)                             │
└─────────────────────────────────────────────────────────────────┘
```

### Contract Architecture (POLITICAL TERMINOLOGY)

**From @luxfi/standard** (the one source of truth):

The Lux governance stack uses political/diplomatic terms that governments and NGOs understand:

| Contract | Political Analog | Purpose |
|----------|------------------|---------|
| `Council` | Legislative Body / Board | Proposal management, voting coordination |
| `Charter` | Constitution / Bylaws | Voting strategy + rules + constitutional text |
| `Safe` | Treasury / Execution | Asset custody, transaction execution |
| `Veto` | Veto Power | Parent DAO's ability to block child actions |
| `Sanction` | Enforcement / Sanctions | Guard that enforces veto decisions |
| `Identity` | Citizenship / Voting Rights | Governance token representing voting power |
| `Secretariat` | Administrative Office | Module integration and admin functions |

**NOT these legacy names**: Azorius, Governor, Strategy, FreezeGuard, FreezeVoting, SubDAO, GnosisSafe

### Local Contract Deployment (from @luxfi/standard)
- **Forge/Foundry**: Using Forge for deployment
- **Anvil**: Local blockchain with chain ID 1337
- **Source**: Deployed from `~/work/lux/standard` (correct contracts)

#### Deployed Contracts (localhost:1337)
| Contract | Address | Political Term |
|----------|---------|----------------|
| SafeL2 | `0x3Aa5ebB10DC797CAC828524e59A333d0A371443c` | Treasury |
| SafeProxyFactory | `0xc6e7DF5E7b4f2A278906862b61205850344D4e7d` | - |
| MultiSendCallOnly | `0x59b670e9fA9D0A427751Af201D676719a970857b` | - |
| CompatibilityFallbackHandler | `0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1` | - |
| Council | `0x4A679253410272dd5232B3Ff7cF5dbB88f295319` | Legislative Body |
| Charter | `0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f` | Constitution |
| Identity | `0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44` | Voting Rights |
| Sanction | `0x7a2088a1bFc9d81c55368AE168C2C02570cB814F` | Enforcement |
| Veto | `0x09635F643e140090A9A8Dcd712eD6285858ceBef` | Veto Power |

### Package Architecture
- **@luxfi/standard**: Core contracts with ABIs (Council, Charter, Identity, Veto, Sanction)
- **@luxfi/contracts**: Re-exports ABIs from @luxfi/standard + network addresses
- **NO legacy code**: Removed all "Azorius", "Gnosis", "Governor", "Strategy", "FreezeGuard" naming

### Fractal Governance (As Above, So Below)
The same governance patterns repeat at every scale:
- **L1 DAO (Sovereign)**: Full autonomy, can create child DAOs
- **L2+ DAO (Nested)**: Own Safe, may have parent Veto/Sanction
- Each level: Council + Charter + Safe
- Fork freedom: Disagreement → new DAO, no permission needed
- Exit liquidity: Members can always withdraw and support new initiatives

### Treasury Infrastructure (LIP-7005)
For complex treasury architectures (e.g., Pars Network):

| Contract | Purpose |
|----------|---------|
| `FeeRouter` | Automatic fee distribution by policy |
| `GaugeController` | Epoch-based allocation voting |
| `VaultRegistry` | Multi-vault management |
| `SpendingTimelock` | Tiered spending delays (24h-168h) |
| `SpendingAllowlist` | Approved recipients and limits |
| `ReceiptRegistry` | Expense accountability |

**Pars Network Architecture**:
- Main Treasury (T): $5M reserves
- Fee Vault: 90% of protocol fees → gauge-controlled
- POL Vault: Protocol-owned liquidity
- 10 DAO Vaults: 1% baseline each (Security, Treasury, Governance, Health, Culture, Research, Infrastructure, Consular, Venture, Impact)
- Gauge allocations: POL Growth (30%), Holder Rewards (40%), Program Budgets (20%), Reserves (10%)
- Epoch: 1 week, ±5% max change per epoch
- Timelocks: Standard (24-72h), POL (72-168h), Emergency (168h expiry)

## Deployment Commands

### Start Local Blockchain
```bash
# Start Anvil with chain ID 1337
anvil --chain-id 1337 --host 0.0.0.0
```

### Deploy Contracts (from @luxfi/standard)
```bash
# Deploy governance contracts to localhost
cd ~/work/lux/standard
forge script script/DeployLocal.s.sol --rpc-url http://127.0.0.1:8545 --broadcast
```

## Lux Identity System (LP-3006)

### Overview
The Lux Identity system provides unified on-chain identity for governance. It combines three layers:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         IDENTITY HUB                                         │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  W3C DID Layer (DIDRegistry)                                          │  │
│  │  - did:lux:<identifier>                                               │  │
│  │  - Verification methods, services, credentials                        │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                              ▲                                              │
│                              │ links to                                     │
│                              ▼                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  SoulID Layer (SoulID.sol)                                            │  │
│  │  - Soulbound NFT (non-transferable)                                   │  │
│  │  - Reputation fields (humanity, governance, community, protocol)      │  │
│  │  - Badges and attestations                                            │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                              ▲                                              │
│                              │ reputation from                              │
│                              ▼                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  Karma Layer (Karma.sol + KarmaController.sol)                        │  │
│  │  - Soul-bound reputation token                                        │  │
│  │  - earnKarma / giveKarma / purgeKarma                                 │  │
│  │  - Activity-driven decay (1% active, 10% inactive)                    │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Identity Contracts

| Contract | Location | Purpose |
|----------|----------|---------|
| `IdentityHub` | `identity/IdentityHub.sol` | Unified entry point for all identity operations |
| `IIdentityHub` | `identity/interfaces/IIdentityHub.sol` | Interface for governance contracts |
| `SoulID` | `identity/SoulID.sol` | Soulbound NFT with reputation fields |
| `Karma` | `tokens/Karma.sol` | Non-transferable reputation token |
| `KarmaController` | `governance/KarmaController.sol` | Orchestrates karma operations |
| `DIDRegistry` | `identity/DIDRegistry.sol` | W3C DID management |

### Governance Integration

**From Governor.sol**:
```solidity
IIdentityHub public identityHub;

function _getVotes(address account) internal view returns (uint256) {
    return identityHub.getVotingPower(account);
}

function propose(...) external {
    require(identityHub.canPropose(msg.sender), "Insufficient karma");
    require(identityHub.isHuman(msg.sender), "Human verification required");
    ...
}

function _afterVote(address voter) internal {
    identityHub.recordGovernanceActivity(voter);
}
```

### Key Functions

| Function | Purpose |
|----------|---------|
| `createIdentity(identifier)` | Create DID + SoulID in one call |
| `getVotingPower(account)` | karma × (50 + trustLevel/2) / 100 |
| `canPropose(account)` | karma >= 100 KARMA |
| `isHuman(account)` | humanityScore >= 50 |
| `getIdentity(account)` | Returns complete Identity struct |
| `recordGovernanceActivity(account)` | Updates karma decay timer |

### lux.id App Integration

**Location**: `/Users/z/work/lux/apps/id/`

**Contract Hooks**:
```typescript
// Identity
import { useIdentity, useCreateIdentity, useDID } from '../hooks/useIdentity'

// SoulID
import { useHasSoul, useSoulOf, useReputation, useBadges } from '../hooks/useSoulID'

// Karma
import { useKarmaBalance, useGiveKarma, useSacrificeKarma } from '../hooks/useKarma'
```

**Contract Addresses**: Configure in `/src/lib/contracts/addresses.ts`

**Features**:
- Identity creation flow
- Reputation scores display (humanity, governance, community, protocol)
- Karma balance and lifetime stats
- Human verification badge
- Can Propose badge

### Reputation Scores (0-100)

| Score | Updated By | Purpose |
|-------|-----------|---------|
| `humanityScore` | Attestors | Sybil resistance, humanity verification |
| `governanceParticipation` | IdentityHub | Voting and proposal activity |
| `communityContribution` | Controllers | Community involvement |
| `protocolUsage` | Controllers | DeFi/protocol activity |
| `trustLevel` | Computed | Composite score for voting weight |

### Karma Operations

| Operation | Who Can Call | Effect |
|-----------|--------------|--------|
| `earnKarma` | Controllers | Protocol rewards user |
| `giveKarma` | Anyone | Transfer karma to another (spends own) |
| `purgeKarma` | Admin | Remove karma for violations |
| `sacrificeKarma` | Anyone | Burn own karma voluntarily |

### Security Fixes Applied (2026-01-30)

- **C-08**: ECDSA signature malleability - Fixed with `ECDSA.recover` + `MessageHashUtils.toEthSignedMessageHash`
- **C-10**: Unbounded loops - MAX_BATCH_SIZE limits in DIDRegistry, CredentialManager
- **C-11**: Centralization risks - Multi-sig requirements, timelocks
- **M-06**: Rate limiting - TokenBucketRateLimiter for sensitive operations
- **L-05**: Authorization - Controller authorization in KarmaController

---

*Last Updated: 2026-01-31*
*Maintained for AI assistants and developers working on Lux DAO*