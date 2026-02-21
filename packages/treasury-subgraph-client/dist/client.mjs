// Lux DAO Treasury Subgraph Client
// Forked from @olympusdao/treasury-subgraph-client
// Configurable baseURL for white-label deployments (pars, lux, zoo)
import { Client } from "@wundergraph/sdk/client";

var WUNDERGRAPH_S3_ENABLED = false;
var WUNDERGRAPH_AUTH_ENABLED = false;

// Default points to Lux DAO treasury subgraph
// Override via createClient({ baseURL: "..." }) or VITE_WUNDERGRAPH_NODE_URL env
var defaultClientConfig = {
  applicationHash: "luxdao01",
  baseURL: "https://treasury-subgraph.lux.network",
  sdkVersion: "0.178.1"
};

var operationMetadata = {
  tokenRecords: { requiresAuthentication: false },
  tokenRecordsAtBlock: { requiresAuthentication: false },
  tokenRecordsEarliest: { requiresAuthentication: false },
  tokenRecordsLatest: { requiresAuthentication: false },
  tokenSupplies: { requiresAuthentication: false },
  tokenSuppliesAtBlock: { requiresAuthentication: false },
  tokenSuppliesEarliest: { requiresAuthentication: false },
  tokenSuppliesLatest: { requiresAuthentication: false },
  "atBlock/metrics": { requiresAuthentication: false },
  "atBlock/tokenRecords": { requiresAuthentication: false },
  "atBlock/tokenSupplies": { requiresAuthentication: false },
  "earliest/metrics": { requiresAuthentication: false },
  "earliest/tokenRecords": { requiresAuthentication: false },
  "earliest/tokenSupplies": { requiresAuthentication: false },
  "latest/metrics": { requiresAuthentication: false },
  "latest/protocolMetrics": { requiresAuthentication: false },
  "latest/tokenRecords": { requiresAuthentication: false },
  "latest/tokenSupplies": { requiresAuthentication: false },
  "paginated/metrics": { requiresAuthentication: false },
  "paginated/protocolMetrics": { requiresAuthentication: false },
  "paginated/tokenRecords": { requiresAuthentication: false },
  "paginated/tokenSupplies": { requiresAuthentication: false }
};

var WunderGraphClient = class extends Client {
  query(options) { return super.query(options); }
  mutate(options) { return super.mutate(options); }
  subscribe(options, cb) { return super.subscribe(options, cb); }
  login(authProviderID, redirectURI) { return super.login(authProviderID, redirectURI); }
  async fetchUser(options) { return super.fetchUser(options); }
};

var createClient = (config) => {
  return new WunderGraphClient({
    ...defaultClientConfig,
    ...config,
    operationMetadata,
    csrfEnabled: false
  });
};

export {
  WUNDERGRAPH_AUTH_ENABLED,
  WUNDERGRAPH_S3_ENABLED,
  WunderGraphClient,
  createClient,
  defaultClientConfig,
  operationMetadata
};
