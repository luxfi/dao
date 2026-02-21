/**
 * DAO Documentation Configuration
 *
 * This configuration file contains template variables that can be overridden
 * when forking this documentation for different projects (Pars, Zoo, MIGA, etc.)
 *
 * Usage:
 *   1. Fork this docs/ directory to your project
 *   2. Update the values below to match your project
 *   3. Run the build process to generate branded documentation
 */

export interface DocsConfig {
  // Project identity
  name: string
  description: string
  url: string
  logo: string

  // External links
  github: string
  discord: string
  twitter: string
  forum?: string
  support?: string

  // Token configuration
  tokens: {
    governance: string // Main governance token symbol
    staked: string // Staked token symbol (sDAO, sTOKEN)
    veToken: string // Vote-escrowed token (veDAO, veTOKEN)
    native?: string // Native network token (ETH, LUX, SOL)
  }

  // Network configuration
  network: {
    name: string
    chainId: number
    rpc: string
    explorer: string
    isTestnet?: boolean
  }

  // Governance parameters (defaults, can be customized per DAO)
  governance: {
    votingPeriod: string // e.g., "7 days"
    timelockDelay: string // e.g., "3 days"
    proposalThreshold: string // e.g., "100,000 tokens"
    quorumThreshold: string // e.g., "1,000,000 tokens"
  }

  // Feature flags
  features: {
    multisig: boolean
    gaslessVoting: boolean
    delegation: boolean
    staking: boolean
    streaming: boolean
    hierarchy: boolean
  }

  // Audit information
  audit: {
    firm: string
    date: string
    reportUrl: string
    status: "completed" | "in-progress" | "scheduled"
  }

  // App URLs
  app: {
    main: string
    governance: string
    staking?: string
    bridge?: string
  }
}

/**
 * Default configuration - override these values for your project
 */
export const docsConfig: DocsConfig = {
  // Project identity
  name: "DAO Docs",
  description: "Complete documentation for decentralized governance",
  url: "https://docs.dao.vote",
  logo: "/logo.svg",

  // External links
  github: "https://github.com/org/dao",
  discord: "https://discord.gg/dao",
  twitter: "@dao",
  forum: "https://forum.dao.vote",
  support: "support@dao.vote",

  // Token configuration
  tokens: {
    governance: "TOKEN",
    staked: "sTOKEN",
    veToken: "veTOKEN",
    native: "ETH",
  },

  // Network configuration
  network: {
    name: "Network",
    chainId: 1,
    rpc: "https://rpc.network.com",
    explorer: "https://explorer.network.com",
    isTestnet: false,
  },

  // Governance parameters
  governance: {
    votingPeriod: "7 days",
    timelockDelay: "3 days",
    proposalThreshold: "100,000 tokens",
    quorumThreshold: "1,000,000 tokens",
  },

  // Feature flags
  features: {
    multisig: true,
    gaslessVoting: true,
    delegation: true,
    staking: true,
    streaming: true,
    hierarchy: true,
  },

  // Audit information
  audit: {
    firm: "Auditor Name",
    date: "2026-01-01",
    reportUrl: "/audit-report.pdf",
    status: "completed",
  },

  // App URLs
  app: {
    main: "https://app.dao.vote",
    governance: "https://app.dao.vote/governance",
    staking: "https://app.dao.vote/staking",
    bridge: "https://bridge.dao.vote",
  },
}

/**
 * Example project configurations for reference
 */
export const projectExamples = {
  pars: {
    name: "Pars DAO",
    tokens: { governance: "PARS", staked: "sPARS", veToken: "vePARS" },
    network: { name: "Pars Network", chainId: 6133 },
  },
  miga: {
    name: "MIGA DAO",
    tokens: { governance: "MIGA", staked: "sMIGA", veToken: "veMIGA" },
    network: { name: "Solana", chainId: 101 },
  },
  zoo: {
    name: "Zoo DAO",
    tokens: { governance: "ZOO", staked: "sZOO", veToken: "veZOO" },
    network: { name: "Lux Network", chainId: 96369 },
  },
}

export default docsConfig
