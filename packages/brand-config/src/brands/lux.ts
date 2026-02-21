import type { BrandConfig } from "../index";

export const luxBrand: BrandConfig = {
  id: "lux",
  name: "Lux",
  description: "Multi-consensus blockchain with post-quantum security",
  website: "https://lux.network",
  docsUrl: "https://docs.lux.network",
  communityUrl: "https://discord.gg/lux",
  githubOrg: "luxfi",

  tokens: {
    native: "LUX",
    governance: "LUX",
    staked: "sLUX",
    gWrapped: "gLUX",
    wsWrapped: "wsLUX",
    veToken: "veLUX",
    decimals: 18,
  },

  chains: {
    mainnet: {
      name: "Lux C-Chain",
      chainId: 96369,
      rpcUrl: "https://api.lux.network/ext/bc/C/rpc",
      explorerUrl: "https://explorer.lux.network",
      subgraphUrl: "https://subgraph.lux.network",
    },
    testnet: {
      name: "Lux Testnet",
      chainId: 96368,
      rpcUrl: "https://api.lux-test.network/ext/bc/C/rpc",
      explorerUrl: "https://explorer.lux-test.network",
    },
  },

  contracts: {
    96369: {
      governanceToken: "",
      treasury: "",
      staking: "",
    },
    96368: {},
  },

  theme: {
    light: {
      primaryColor: "#6366f1",
      secondaryColor: "#818cf8",
      accentColor: "#f59e0b",
      backgroundColor: "#ffffff",
      paperColor: "#f5f3ff",
      fontFamily: "'Inter', sans-serif",
    },
    dark: {
      primaryColor: "#818cf8",
      secondaryColor: "#6366f1",
      accentColor: "#fbbf24",
      backgroundColor: "#0f0f23",
      paperColor: "#1e1b4b",
      fontFamily: "'Inter', sans-serif",
    },
  },

  api: {
    treasurySubgraph: "https://treasury-subgraph.lux.network",
    coingeckoId: "lux",
  },
};
