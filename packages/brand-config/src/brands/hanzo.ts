import type { BrandConfig } from "../index";

export const hanzoBrand: BrandConfig = {
  id: "hanzo",
  name: "Hanzo",
  description: "AI infrastructure and frontier model governance",
  website: "https://hanzo.ai",
  docsUrl: "https://docs.hanzo.ai",
  communityUrl: "https://discord.gg/hanzo",
  githubOrg: "hanzoai",

  tokens: {
    native: "HANZO",
    governance: "HANZO",
    staked: "sHANZO",
    gWrapped: "gHANZO",
    wsWrapped: "wsHANZO",
    veToken: "veHANZO",
    decimals: 18,
  },

  chains: {
    mainnet: {
      name: "Hanzo Network",
      chainId: 36963,
      rpcUrl: "https://api.hanzo.ai/ext/bc/C/rpc",
      explorerUrl: "https://explorer.hanzo.ai",
    },
    testnet: {
      name: "Hanzo Testnet",
      chainId: 36962,
      rpcUrl: "https://api.hanzo-test.ai/ext/bc/C/rpc",
      explorerUrl: "https://explorer.hanzo-test.ai",
    },
  },

  contracts: {
    36963: {
      governanceToken: "",
      treasury: "",
      staking: "",
    },
    36962: {},
  },

  theme: {
    light: {
      primaryColor: "#0ea5e9",
      secondaryColor: "#38bdf8",
      accentColor: "#f43f5e",
      backgroundColor: "#ffffff",
      paperColor: "#f0f9ff",
      fontFamily: "'Inter', sans-serif",
    },
    dark: {
      primaryColor: "#38bdf8",
      secondaryColor: "#0ea5e9",
      accentColor: "#fb7185",
      backgroundColor: "#0c0a1d",
      paperColor: "#1a1333",
      fontFamily: "'Inter', sans-serif",
    },
  },

  api: {
    treasurySubgraph: "https://treasury-subgraph.hanzo.ai",
    coingeckoId: "hanzo",
  },
};
