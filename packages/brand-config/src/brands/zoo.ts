import type { BrandConfig } from "../index";

export const zooBrand: BrandConfig = {
  id: "zoo",
  name: "Zoo",
  description: "Open AI research network for decentralized science",
  website: "https://zoo.ngo",
  docsUrl: "https://docs.zoo.ngo",
  communityUrl: "https://discord.gg/zoo",
  githubOrg: "zoo-labs",

  tokens: {
    native: "ZOO",
    governance: "ZOO",
    staked: "sZOO",
    gWrapped: "gZOO",
    wsWrapped: "wsZOO",
    veToken: "veZOO",
    decimals: 18,
  },

  chains: {
    mainnet: {
      name: "Zoo Network",
      chainId: 200200,
      rpcUrl: "https://api.zoo.ngo/ext/bc/C/rpc",
      explorerUrl: "https://explorer.zoo.ngo",
    },
    testnet: {
      name: "Zoo Testnet",
      chainId: 200201,
      rpcUrl: "https://api.zoo-test.ngo/ext/bc/C/rpc",
      explorerUrl: "https://explorer.zoo-test.ngo",
    },
  },

  contracts: {
    200200: {
      governanceToken: "",
      treasury: "",
      staking: "",
    },
    200201: {},
  },

  theme: {
    light: {
      primaryColor: "#10b981",
      secondaryColor: "#34d399",
      accentColor: "#f97316",
      backgroundColor: "#ffffff",
      paperColor: "#ecfdf5",
      fontFamily: "'Inter', sans-serif",
    },
    dark: {
      primaryColor: "#34d399",
      secondaryColor: "#10b981",
      accentColor: "#fb923c",
      backgroundColor: "#0a1628",
      paperColor: "#064e3b",
      fontFamily: "'Inter', sans-serif",
    },
  },

  api: {
    treasurySubgraph: "https://treasury-subgraph.zoo.ngo",
    coingeckoId: "zoo",
  },
};
