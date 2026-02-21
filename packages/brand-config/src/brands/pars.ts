import type { BrandConfig } from "../index";

export const parsBrand: BrandConfig = {
  id: "pars",
  name: "Pars",
  description: "Sovereign L1 with post-quantum secure messaging",
  website: "https://pars.network",
  docsUrl: "https://docs.pars.network",
  communityUrl: "https://discord.gg/pars",
  githubOrg: "pars-network",

  tokens: {
    native: "PARS",
    governance: "PARS",
    staked: "sPARS",
    gWrapped: "gPARS",
    wsWrapped: "wsPARS",
    veToken: "vePARS",
    migration: "MIGA",
    decimals: 9,
  },

  chains: {
    mainnet: {
      name: "Pars Mainnet",
      chainId: 7070,
      rpcUrl: "https://rpc.pars.network/ext/bc/C/rpc",
      explorerUrl: "https://explorer.pars.network",
    },
    testnet: {
      name: "Pars Testnet",
      chainId: 7071,
      rpcUrl: "https://rpc-testnet.pars.network/ext/bc/C/rpc",
      explorerUrl: "https://explorer-testnet.pars.network",
    },
  },

  contracts: {
    // Mainnet (7070) - addresses TBD after CREATE2 deployment
    7070: {
      governanceToken: "",
      stakedToken: "",
      gWrappedToken: "",
      treasury: "",
      staking: "",
      feeRouter: "",
      charter: "",
      kernel: "",
      veToken: "",
      migrationToken: "",
    },
    // Testnet (7071)
    7071: {},
  },

  theme: {
    light: {
      primaryColor: "#1a73e8",
      secondaryColor: "#4285f4",
      accentColor: "#ea4335",
      backgroundColor: "#ffffff",
      paperColor: "#f8f9fa",
      fontFamily: "'Inter', sans-serif",
    },
    dark: {
      primaryColor: "#8ab4f8",
      secondaryColor: "#4285f4",
      accentColor: "#f28b82",
      backgroundColor: "#1a1a2e",
      paperColor: "#16213e",
      fontFamily: "'Inter', sans-serif",
    },
  },

  api: {
    treasurySubgraph: "https://treasury-subgraph.pars.network",
    coingeckoId: "pars",
  },
};
