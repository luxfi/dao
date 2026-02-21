/**
 * @luxdao/brand-config
 *
 * White-label brand configuration for the Lux DAO governance stack.
 * Import a brand preset or create a custom BrandConfig to white-label
 * the full governance UI for any DAO.
 *
 * Usage:
 *   import { parsBrand } from "@luxdao/brand-config/pars"
 *   import { luxBrand } from "@luxdao/brand-config/lux"
 *   import { zooBrand } from "@luxdao/brand-config/zoo"
 *   import type { BrandConfig } from "@luxdao/brand-config"
 */

export interface TokenConfig {
  /** Native/network token symbol */
  native: string;
  /** Governance token symbol */
  governance: string;
  /** Staked governance token symbol */
  staked: string;
  /** Governance-wrapped token symbol */
  gWrapped: string;
  /** Wrapped staked token symbol */
  wsWrapped: string;
  /** Vote-escrowed token symbol */
  veToken: string;
  /** Migration token symbol (if applicable) */
  migration?: string;
  /** Token decimals (default: 9 for governance, 18 for ERC20) */
  decimals?: number;
}

export interface ChainConfig {
  /** Chain name */
  name: string;
  /** Chain ID */
  chainId: number;
  /** RPC endpoint */
  rpcUrl: string;
  /** Block explorer URL */
  explorerUrl: string;
  /** Treasury subgraph endpoint */
  subgraphUrl?: string;
}

export interface ContractAddresses {
  /** Governance token */
  governanceToken: string;
  /** Staked token */
  stakedToken: string;
  /** gWrapped token */
  gWrappedToken: string;
  /** Treasury */
  treasury: string;
  /** Staking contract */
  staking: string;
  /** Bond depository */
  bondDepository?: string;
  /** Fee router */
  feeRouter?: string;
  /** Charter (governance parameters) */
  charter?: string;
  /** Kernel (module system) */
  kernel?: string;
  /** Vote-escrowed token */
  veToken?: string;
  /** Migration token */
  migrationToken?: string;
}

export interface ThemeConfig {
  /** Primary brand color (hex) */
  primaryColor: string;
  /** Secondary brand color (hex) */
  secondaryColor: string;
  /** Accent color for special elements */
  accentColor: string;
  /** Background color */
  backgroundColor: string;
  /** Paper/card color */
  paperColor: string;
  /** Font family */
  fontFamily?: string;
}

export interface BrandConfig {
  /** Brand identifier (lowercase, no spaces) */
  id: string;
  /** Display name */
  name: string;
  /** Short description */
  description: string;
  /** Website URL */
  website: string;
  /** Documentation URL */
  docsUrl: string;
  /** Discord/community URL */
  communityUrl?: string;
  /** GitHub organization */
  githubOrg: string;

  /** Token configuration */
  tokens: TokenConfig;

  /** Chain configuration */
  chains: {
    mainnet: ChainConfig;
    testnet?: ChainConfig;
  };

  /** Contract addresses by chain ID */
  contracts: Record<number, Partial<ContractAddresses>>;

  /** Theme configuration */
  theme: {
    light: ThemeConfig;
    dark: ThemeConfig;
  };

  /** API endpoints */
  api: {
    /** Treasury subgraph WunderGraph endpoint */
    treasurySubgraph?: string;
    /** Cooler loans API */
    coolerLoansApi?: string;
    /** Token price API (CoinGecko ID) */
    coingeckoId?: string;
  };
}

// Brand implementations are NOT exported here.
// Each project owns its own brand config locally.
// This package exports only the type interfaces.
