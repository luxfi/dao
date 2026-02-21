"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// Lux DAO Treasury Subgraph Client
var client_exports = {};
__export(client_exports, {
  WUNDERGRAPH_AUTH_ENABLED: () => WUNDERGRAPH_AUTH_ENABLED,
  WUNDERGRAPH_S3_ENABLED: () => WUNDERGRAPH_S3_ENABLED,
  WunderGraphClient: () => WunderGraphClient,
  createClient: () => createClient,
  defaultClientConfig: () => defaultClientConfig,
  operationMetadata: () => operationMetadata
});
module.exports = __toCommonJS(client_exports);
var import_client = require("@wundergraph/sdk/client");
var WUNDERGRAPH_S3_ENABLED = false;
var WUNDERGRAPH_AUTH_ENABLED = false;
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
var WunderGraphClient = class extends import_client.Client {
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
0 && (module.exports = {
  WUNDERGRAPH_AUTH_ENABLED,
  WUNDERGRAPH_S3_ENABLED,
  WunderGraphClient,
  createClient,
  defaultClientConfig,
  operationMetadata
});
