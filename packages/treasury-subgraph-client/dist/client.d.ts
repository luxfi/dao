import * as _wundergraph_sdk_client from '@wundergraph/sdk/client';
import { ClientOperationErrors, GraphQLError, ClientConfig, OperationMetadata, User as User$1, Client, QueryRequestOptions, OperationRequestOptions, MutationRequestOptions, SubscriptionRequestOptions, SubscriptionEventHandler, FetchUserRequestOptions, CreateClientConfig, OperationsDefinition } from '@wundergraph/sdk/client';
import * as _wundergraph_sdk_operations from '@wundergraph/sdk/operations';
import { ExtractInput, ExtractResponse } from '@wundergraph/sdk/operations';
import { OperationsClient, InternalOperationsDefinition, HooksConfiguration, QueryHook, QueryHookWithoutInput, BaseRequestContext, WunderGraphServerConfig, WunderGraphHooksAndServerConfig, CustomContext, WunderGraphUser } from '@wundergraph/sdk/server';
import { JSONSchema7 } from 'json-schema';
import { IOpenaiAgentFactory } from '@wundergraph/sdk/openai';

type OperationErrors = {
    "atBlock/internal/protocolMetrics": AtBlockInternalProtocolMetricsErrors;
    "atBlock/metrics": AtBlockMetricsErrors;
    "atBlock/tokenRecords": AtBlockTokenRecordsErrors;
    "atBlock/tokenSupplies": AtBlockTokenSuppliesErrors;
    "earliest/internal/protocolMetrics": EarliestInternalProtocolMetricsErrors;
    "earliest/metrics": EarliestMetricsErrors;
    "earliest/tokenRecords": EarliestTokenRecordsErrors;
    "earliest/tokenSupplies": EarliestTokenSuppliesErrors;
    "latest/metrics": LatestMetricsErrors;
    "latest/protocolMetrics": LatestProtocolMetricsErrors;
    "latest/tokenRecords": LatestTokenRecordsErrors;
    "latest/tokenSupplies": LatestTokenSuppliesErrors;
    "paginated/metrics": PaginatedMetricsErrors;
    "paginated/protocolMetrics": PaginatedProtocolMetricsErrors;
    "paginated/tokenRecords": PaginatedTokenRecordsErrors;
    "paginated/tokenSupplies": PaginatedTokenSuppliesErrors;
};
type AtBlockInternalProtocolMetricsErrors = ClientOperationErrors;
type AtBlockMetricsErrors = ClientOperationErrors;
type AtBlockTokenRecordsErrors = ClientOperationErrors;
type AtBlockTokenSuppliesErrors = ClientOperationErrors;
type EarliestInternalProtocolMetricsErrors = ClientOperationErrors;
type EarliestMetricsErrors = ClientOperationErrors;
type EarliestTokenRecordsErrors = ClientOperationErrors;
type EarliestTokenSuppliesErrors = ClientOperationErrors;
type LatestMetricsErrors = ClientOperationErrors;
type LatestProtocolMetricsErrors = ClientOperationErrors;
type LatestTokenRecordsErrors = ClientOperationErrors;
type LatestTokenSuppliesErrors = ClientOperationErrors;
type PaginatedMetricsErrors = ClientOperationErrors;
type PaginatedProtocolMetricsErrors = ClientOperationErrors;
type PaginatedTokenRecordsErrors = ClientOperationErrors;
type PaginatedTokenSuppliesErrors = ClientOperationErrors;

interface CustomClaims {
}
type PublicCustomClaims = CustomClaims;

type Queries$2 = {
    "raw/internal/protocolMetrics": {
        input: RawInternalProtocolMetricsInputInternal;
        response: {
            data?: RawInternalProtocolMetricsResponse["data"];
            error?: ClientOperationErrors;
        };
    };
    "raw/internal/protocolMetricsAtBlock": {
        input: RawInternalProtocolMetricsAtBlockInputInternal;
        response: {
            data?: RawInternalProtocolMetricsAtBlockResponse["data"];
            error?: ClientOperationErrors;
        };
    };
    "raw/internal/protocolMetricsEarliest": {
        input: undefined;
        response: {
            data?: RawInternalProtocolMetricsEarliestResponse["data"];
            error?: ClientOperationErrors;
        };
    };
    "raw/internal/protocolMetricsLatest": {
        input: undefined;
        response: {
            data?: RawInternalProtocolMetricsLatestResponse["data"];
            error?: ClientOperationErrors;
        };
    };
    tokenRecords: {
        input: TokenRecordsInputInternal;
        response: {
            data?: TokenRecordsResponse["data"];
            error?: ClientOperationErrors;
        };
    };
    tokenRecordsAtBlock: {
        input: TokenRecordsAtBlockInputInternal;
        response: {
            data?: TokenRecordsAtBlockResponse["data"];
            error?: ClientOperationErrors;
        };
    };
    tokenRecordsEarliest: {
        input: undefined;
        response: {
            data?: TokenRecordsEarliestResponse["data"];
            error?: ClientOperationErrors;
        };
    };
    tokenRecordsLatest: {
        input: undefined;
        response: {
            data?: TokenRecordsLatestResponse["data"];
            error?: ClientOperationErrors;
        };
    };
    tokenSupplies: {
        input: TokenSuppliesInputInternal;
        response: {
            data?: TokenSuppliesResponse["data"];
            error?: ClientOperationErrors;
        };
    };
    tokenSuppliesAtBlock: {
        input: TokenSuppliesAtBlockInputInternal;
        response: {
            data?: TokenSuppliesAtBlockResponse["data"];
            error?: ClientOperationErrors;
        };
    };
    tokenSuppliesEarliest: {
        input: undefined;
        response: {
            data?: TokenSuppliesEarliestResponse["data"];
            error?: ClientOperationErrors;
        };
    };
    tokenSuppliesLatest: {
        input: undefined;
        response: {
            data?: TokenSuppliesLatestResponse["data"];
            error?: ClientOperationErrors;
        };
    };
    "atBlock/internal/protocolMetrics": {
        input: AtBlockInternalProtocolMetricsInputInternal;
        response: {
            data?: AtBlockInternalProtocolMetricsResponseData;
            error?: OperationErrors["atBlock/internal/protocolMetrics"];
        };
    };
    "atBlock/metrics": {
        input: AtBlockMetricsInputInternal;
        response: {
            data?: AtBlockMetricsResponseData;
            error?: OperationErrors["atBlock/metrics"];
        };
    };
    "atBlock/tokenRecords": {
        input: AtBlockTokenRecordsInputInternal;
        response: {
            data?: AtBlockTokenRecordsResponseData;
            error?: OperationErrors["atBlock/tokenRecords"];
        };
    };
    "atBlock/tokenSupplies": {
        input: AtBlockTokenSuppliesInputInternal;
        response: {
            data?: AtBlockTokenSuppliesResponseData;
            error?: OperationErrors["atBlock/tokenSupplies"];
        };
    };
    "earliest/internal/protocolMetrics": {
        input: undefined;
        response: {
            data?: EarliestInternalProtocolMetricsResponseData;
            error?: OperationErrors["earliest/internal/protocolMetrics"];
        };
    };
    "earliest/metrics": {
        input: EarliestMetricsInputInternal;
        response: {
            data?: EarliestMetricsResponseData;
            error?: OperationErrors["earliest/metrics"];
        };
    };
    "earliest/tokenRecords": {
        input: EarliestTokenRecordsInputInternal;
        response: {
            data?: EarliestTokenRecordsResponseData;
            error?: OperationErrors["earliest/tokenRecords"];
        };
    };
    "earliest/tokenSupplies": {
        input: EarliestTokenSuppliesInputInternal;
        response: {
            data?: EarliestTokenSuppliesResponseData;
            error?: OperationErrors["earliest/tokenSupplies"];
        };
    };
    "latest/metrics": {
        input: LatestMetricsInputInternal;
        response: {
            data?: LatestMetricsResponseData;
            error?: OperationErrors["latest/metrics"];
        };
    };
    "latest/protocolMetrics": {
        input: LatestProtocolMetricsInputInternal;
        response: {
            data?: LatestProtocolMetricsResponseData;
            error?: OperationErrors["latest/protocolMetrics"];
        };
    };
    "latest/tokenRecords": {
        input: LatestTokenRecordsInputInternal;
        response: {
            data?: LatestTokenRecordsResponseData;
            error?: OperationErrors["latest/tokenRecords"];
        };
    };
    "latest/tokenSupplies": {
        input: LatestTokenSuppliesInputInternal;
        response: {
            data?: LatestTokenSuppliesResponseData;
            error?: OperationErrors["latest/tokenSupplies"];
        };
    };
    "paginated/metrics": {
        input: PaginatedMetricsInputInternal;
        response: {
            data?: PaginatedMetricsResponseData;
            error?: OperationErrors["paginated/metrics"];
        };
    };
    "paginated/protocolMetrics": {
        input: PaginatedProtocolMetricsInputInternal;
        response: {
            data?: PaginatedProtocolMetricsResponseData;
            error?: OperationErrors["paginated/protocolMetrics"];
        };
    };
    "paginated/tokenRecords": {
        input: PaginatedTokenRecordsInputInternal;
        response: {
            data?: PaginatedTokenRecordsResponseData;
            error?: OperationErrors["paginated/tokenRecords"];
        };
    };
    "paginated/tokenSupplies": {
        input: PaginatedTokenSuppliesInputInternal;
        response: {
            data?: PaginatedTokenSuppliesResponseData;
            error?: OperationErrors["paginated/tokenSupplies"];
        };
    };
};
type Mutations$2 = {};
type Subscriptions$1 = {};
type InternalOperations = InternalOperationsDefinition<Queries$2, Mutations$2, Subscriptions$1>;
type InternalOperationsClient = OperationsClient<InternalOperations>;

type DATA_SOURCES = "treasuryArbitrum" | "treasuryEthereum" | "treasuryFantom" | "treasuryPolygon";
interface HookContext<TCustomContext = any> extends BaseRequestContext<User, InternalOperationsClient, TCustomContext> {
}
type HooksConfig<TCustomContext = any> = HooksConfiguration<QueryHooks<TCustomContext>, MutationHooks<TCustomContext>, SubscriptionHooks<TCustomContext>, UploadHooks<TCustomContext>, DATA_SOURCES, HookContext<TCustomContext>>;
type QueryHooks<TCustomContext = any> = {
    TokenRecords?: QueryHook<TokenRecordsInputInjected, TokenRecordsResponse, HookContext<TCustomContext>>;
    TokenRecordsAtBlock?: QueryHook<TokenRecordsAtBlockInputInjected, TokenRecordsAtBlockResponse, HookContext<TCustomContext>>;
    TokenRecordsEarliest?: QueryHookWithoutInput<TokenRecordsEarliestResponse, HookContext<TCustomContext>>;
    TokenRecordsLatest?: QueryHookWithoutInput<TokenRecordsLatestResponse, HookContext<TCustomContext>>;
    TokenSupplies?: QueryHook<TokenSuppliesInputInjected, TokenSuppliesResponse, HookContext<TCustomContext>>;
    TokenSuppliesAtBlock?: QueryHook<TokenSuppliesAtBlockInputInjected, TokenSuppliesAtBlockResponse, HookContext<TCustomContext>>;
    TokenSuppliesEarliest?: QueryHookWithoutInput<TokenSuppliesEarliestResponse, HookContext<TCustomContext>>;
    TokenSuppliesLatest?: QueryHookWithoutInput<TokenSuppliesLatestResponse, HookContext<TCustomContext>>;
};
type MutationHooks<TCustomContext = any> = {};
type SubscriptionHooks<TCustomContext = any> = {};
interface UploadHooks<TCustomContext = any> {
}

type WebhooksConfig = {};

type Role = "admin" | "user";
interface User extends WunderGraphUser<Role, CustomClaims> {
}
/**
 * We extract the custom context defined by the user
 */
type RequestContext = CustomContext extends {
    request: infer R;
} ? R : any;
type GlobalContext = CustomContext extends {
    global: infer G;
} ? G : any;
declare module "@wundergraph/sdk/server" {
    function configureWunderGraphServer(configWrapper: () => WunderGraphServerConfig<HooksConfig<RequestContext>, WebhooksConfig, RequestContext, GlobalContext>): WunderGraphHooksAndServerConfig<any, any, RequestContext, GlobalContext>;
}

declare module "json-schema" {
    interface JSONSchema7 {
        "x-graphql-enum-name"?: string;
    }
}
interface Queries$1 {
    "raw/internal/protocolMetrics": {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    "raw/internal/protocolMetricsAtBlock": {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    "raw/internal/protocolMetricsEarliest": {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    "raw/internal/protocolMetricsLatest": {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    tokenRecords: {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    tokenRecordsAtBlock: {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    tokenRecordsEarliest: {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    tokenRecordsLatest: {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    tokenSupplies: {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    tokenSuppliesAtBlock: {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    tokenSuppliesEarliest: {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    tokenSuppliesLatest: {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    "atBlock/internal/protocolMetrics": {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    "atBlock/metrics": {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    "atBlock/tokenRecords": {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    "atBlock/tokenSupplies": {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    "earliest/internal/protocolMetrics": {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    "earliest/metrics": {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    "earliest/tokenRecords": {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    "earliest/tokenSupplies": {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    "latest/metrics": {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    "latest/protocolMetrics": {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    "latest/tokenRecords": {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    "latest/tokenSupplies": {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    "paginated/metrics": {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    "paginated/protocolMetrics": {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    "paginated/tokenRecords": {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
    "paginated/tokenSupplies": {
        input: JSONSchema7;
        response: JSONSchema7;
        operationType: string;
        description: string;
    };
}
interface Mutations$1 {
}

type QueriesAndMutations = Queries$1 & Mutations$1;
type OpenApiAgentFactory = IOpenaiAgentFactory<QueriesAndMutations>;

/**
 * This custom query will return a flat array containing the ProtocolMetric objects for
 * a specific block.
 *
 * NOTE: this is not available for public use, and is superseded by the Metric queries.
 */
declare const _default$f: _wundergraph_sdk_operations.NodeJSOperation<{
    arbitrumBlock: number;
    ethereumBlock: number;
    fantomBlock: number;
    polygonBlock: number;
}, {
    id: string;
    block: string | number;
    currentAPY: string;
    currentIndex: string;
    date: string;
    gOhmPrice: string;
    gOhmTotalSupply: string;
    nextDistributedOhm: string;
    nextEpochRebase: string;
    ohmPrice: string;
    ohmTotalSupply: string;
    sOhmCirculatingSupply: string;
    timestamp: string | number;
    totalValueLocked: string;
}[], unknown, "query", Role, CustomClaims, InternalOperationsClient, undefined, OpenApiAgentFactory, any>;

declare enum Chains {
    ARBITRUM = "Arbitrum",
    ETHEREUM = "Ethereum",
    FANTOM = "Fantom",
    POLYGON = "Polygon"
}
/**
 * If adding any new categories, be sure to update the getSupplyCategories function.
 */
declare enum TokenSupplyCategories {
    BONDS_DEPOSITS = "BondsDeposits",
    BONDS_PREMINTED = "BondsPreminted",
    BONDS_VESTING_DEPOSITS = "BondsDepositsVesting",
    BONDS_VESTING_TOKENS = "BondsTokensVesting",
    BOOSTED_LIQUIDITY_VAULT = "BoostedLiquidityVault",
    LENDING = "LendingMarkets",
    LIQUIDITY = "ProtocolOwnedLiquidity",
    MIGRATION_OFFSET = "MigrationOffset",
    TOTAL_SUPPLY = "TotalSupply",
    TREASURY = "Treasury"
}

type TokenRecord = TokenRecordsLatestResponseData["treasuryEthereum_tokenRecords"][0];

type TokenSupply = TokenSuppliesLatestResponseData["treasuryEthereum_tokenSupplies"][0];

type ChainValues = Record<Chains, number>;
type ChainRecords = Record<Chains, TokenRecord[]>;
type ChainSupplies = Record<Chains, TokenSupply[]>;
type SupplyCategoryValues = Record<TokenSupplyCategories, number>;
type Metric = {
    date: string;
    /**
     * The block for each chain.
     */
    blocks: ChainValues;
    /**
     * The Unix epoch timestamp (in seconds) for each chain.
     */
    timestamps: ChainValues;
    /**
     * The OHM index at the snapshot.
     */
    ohmIndex: number;
    /**
     * The OHM APY at the snapshot.
     */
    ohmApy: number;
    ohmTotalSupply: number;
    ohmTotalSupplyComponents: ChainValues;
    ohmTotalSupplyRecords?: ChainSupplies;
    ohmCirculatingSupply: number;
    ohmCirculatingSupplyComponents: ChainValues;
    ohmCirculatingSupplyRecords?: ChainSupplies;
    ohmFloatingSupply: number;
    ohmFloatingSupplyComponents: ChainValues;
    ohmFloatingSupplyRecords?: ChainSupplies;
    ohmBackedSupply: number;
    gOhmBackedSupply: number;
    ohmBackedSupplyComponents: ChainValues;
    ohmBackedSupplyRecords?: ChainSupplies;
    ohmSupplyCategories: SupplyCategoryValues;
    ohmPrice: number;
    gOhmPrice: number;
    marketCap: number;
    sOhmCirculatingSupply: number;
    sOhmTotalValueLocked: number;
    treasuryMarketValue: number;
    treasuryMarketValueComponents: ChainValues;
    treasuryMarketValueRecords?: ChainRecords;
    treasuryLiquidBacking: number;
    treasuryLiquidBackingComponents: ChainValues;
    treasuryLiquidBackingRecords?: ChainRecords;
    treasuryLiquidBackingPerOhmFloating: number;
    treasuryLiquidBackingPerOhmBacked: number;
    treasuryLiquidBackingPerGOhmBacked: number;
};

/**
 * This custom query will return the Metric object for a specific block.
 */
declare const _default$e: _wundergraph_sdk_operations.NodeJSOperation<{
    arbitrumBlock: number;
    ethereumBlock: number;
    fantomBlock: number;
    polygonBlock: number;
}, Metric | null, unknown, "query", Role, CustomClaims, InternalOperationsClient, undefined, OpenApiAgentFactory, any>;

/**
 * This custom query will return a flat array containing the latest TokenRecord objects for
 * each endpoint.
 */
declare const _default$d: _wundergraph_sdk_operations.NodeJSOperation<{
    arbitrumBlock: number;
    ethereumBlock: number;
    fantomBlock: number;
    polygonBlock: number;
}, {
    id: string;
    balance: string;
    block: string | number;
    blockchain: string;
    category: string;
    date: string;
    isBluechip: boolean;
    isLiquid: boolean;
    multiplier: string;
    rate: string;
    source: string;
    sourceAddress: string;
    timestamp: string | number;
    token: string;
    tokenAddress: string;
    value: string;
    valueExcludingOhm: string;
}[], unknown, "query", Role, CustomClaims, InternalOperationsClient, undefined, OpenApiAgentFactory, any>;

/**
 * This custom query will return a flat array containing the latest TokenSupply objects for
 * each endpoint.
 */
declare const _default$c: _wundergraph_sdk_operations.NodeJSOperation<{
    arbitrumBlock: number;
    ethereumBlock: number;
    fantomBlock: number;
    polygonBlock: number;
}, {
    id: string;
    balance: string;
    block: string | number;
    blockchain?: string | undefined;
    date: string;
    pool?: string | undefined;
    poolAddress?: string | undefined;
    source?: string | undefined;
    sourceAddress?: string | undefined;
    supplyBalance: string;
    timestamp: string | number;
    token: string;
    tokenAddress: string;
    type: string;
}[], unknown, "query", Role, CustomClaims, InternalOperationsClient, undefined, OpenApiAgentFactory, any>;

/**
 * This custom query will return a flat array containing the earliest ProtocolMetric object for
 * each blockchain.
 *
 * NOTE: this is not available for public use, and is superseded by the Metric queries.
 */
declare const _default$b: _wundergraph_sdk_operations.NodeJSOperation<any, {
    id: string;
    block: string | number;
    currentAPY: string;
    currentIndex: string;
    date: string;
    gOhmPrice: string;
    gOhmTotalSupply: string;
    nextDistributedOhm: string;
    nextEpochRebase: string;
    ohmPrice: string;
    ohmTotalSupply: string;
    sOhmCirculatingSupply: string;
    timestamp: string | number;
    totalValueLocked: string;
}[], unknown, "query", Role, CustomClaims, InternalOperationsClient, undefined, OpenApiAgentFactory, any>;

/**
 * This custom query will return the earliest Metric object.
 */
declare const _default$a: _wundergraph_sdk_operations.NodeJSOperation<{
    ignoreCache?: boolean | undefined;
}, Metric | null, unknown, "query", Role, CustomClaims, InternalOperationsClient, undefined, OpenApiAgentFactory, any>;

/**
 * This custom query will return a flat array containing the latest TokenRecord object for
 * each blockchain.
 */
declare const _default$9: _wundergraph_sdk_operations.NodeJSOperation<{
    ignoreCache?: boolean | undefined;
}, {
    id: string;
    balance: string;
    block: string | number;
    blockchain: string;
    category: string;
    date: string;
    isBluechip: boolean;
    isLiquid: boolean;
    multiplier: string;
    rate: string;
    source: string;
    sourceAddress: string;
    timestamp: string | number;
    token: string;
    tokenAddress: string;
    value: string;
    valueExcludingOhm: string;
}[], unknown, "query", Role, CustomClaims, InternalOperationsClient, undefined, OpenApiAgentFactory, any>;

/**
 * This custom query will return a flat array containing the latest TokenSupply object for
 * each blockchain.
 */
declare const _default$8: _wundergraph_sdk_operations.NodeJSOperation<{
    ignoreCache?: boolean | undefined;
}, {
    id: string;
    balance: string;
    block: string | number;
    blockchain?: string | undefined;
    date: string;
    pool?: string | undefined;
    poolAddress?: string | undefined;
    source?: string | undefined;
    sourceAddress?: string | undefined;
    supplyBalance: string;
    timestamp: string | number;
    token: string;
    tokenAddress: string;
    type: string;
}[], unknown, "query", Role, CustomClaims, InternalOperationsClient, undefined, OpenApiAgentFactory, any>;

/**
 * This custom query will return the latest Metric object.
 */
declare const _default$7: _wundergraph_sdk_operations.NodeJSOperation<{
    ignoreCache?: boolean | undefined;
}, Metric | null, unknown, "query", Role, CustomClaims, InternalOperationsClient, undefined, OpenApiAgentFactory, any>;

/**
 * This custom query will return a flat array containing the latest ProtocolMetric object for
 * each blockchain.
 *
 * NOTE: this is not available for public use, and is superseded by the Metric queries.
 *
 * TODO: remove this query once the Metric queries are in use in the frontend
 */
declare const _default$6: _wundergraph_sdk_operations.NodeJSOperation<{
    ignoreCache?: boolean | undefined;
}, {
    id: string;
    block: string | number;
    currentAPY: string;
    currentIndex: string;
    date: string;
    gOhmPrice: string;
    gOhmTotalSupply: string;
    nextDistributedOhm: string;
    nextEpochRebase: string;
    ohmPrice: string;
    ohmTotalSupply: string;
    sOhmCirculatingSupply: string;
    timestamp: string | number;
    totalValueLocked: string;
}[], unknown, "query", Role, CustomClaims, InternalOperationsClient, undefined, OpenApiAgentFactory, any>;

/**
 * This custom query will return a flat array containing the latest TokenRecord object for
 * each blockchain.
 */
declare const _default$5: _wundergraph_sdk_operations.NodeJSOperation<{
    ignoreCache?: boolean | undefined;
}, {
    id: string;
    balance: string;
    block: string | number;
    blockchain: string;
    category: string;
    date: string;
    isBluechip: boolean;
    isLiquid: boolean;
    multiplier: string;
    rate: string;
    source: string;
    sourceAddress: string;
    timestamp: string | number;
    token: string;
    tokenAddress: string;
    value: string;
    valueExcludingOhm: string;
}[], unknown, "query", Role, CustomClaims, InternalOperationsClient, undefined, OpenApiAgentFactory, any>;

/**
 * This custom query will return a flat array containing the latest TokenSupply object for
 * each blockchain.
 */
declare const _default$4: _wundergraph_sdk_operations.NodeJSOperation<{
    ignoreCache?: boolean | undefined;
}, {
    id: string;
    balance: string;
    block: string | number;
    blockchain?: string | undefined;
    date: string;
    pool?: string | undefined;
    poolAddress?: string | undefined;
    source?: string | undefined;
    sourceAddress?: string | undefined;
    supplyBalance: string;
    timestamp: string | number;
    token: string;
    tokenAddress: string;
    type: string;
}[], unknown, "query", Role, CustomClaims, InternalOperationsClient, undefined, OpenApiAgentFactory, any>;

/**
 * This custom query will return a flat array containing Metric objects from
 * across all endpoints.
 *
 * It also handles pagination to work around the Graph Protocol's 1000 record limit.
 */
declare const _default$3: _wundergraph_sdk_operations.NodeJSOperation<{
    startDate: string;
    dateOffset?: number | undefined;
    crossChainDataComplete?: boolean | undefined;
    includeRecords?: boolean | undefined;
    ignoreCache?: boolean | undefined;
}, Metric[], unknown, "query", Role, CustomClaims, InternalOperationsClient, undefined, OpenApiAgentFactory, any>;

/**
 * This custom query will return a flat array containing ProtocolMetric objects from
 * across all endpoints.
 *
 * It also handles pagination to work around the Graph Protocol's 1000 record limit.
 *
 * NOTE: this is not recommended for public use, and is superseded by the Metric queries.
 */
declare const _default$2: _wundergraph_sdk_operations.NodeJSOperation<{
    startDate: string;
    dateOffset?: number | undefined;
    ignoreCache?: boolean | undefined;
}, {
    id: string;
    block: string | number;
    currentAPY: string;
    currentIndex: string;
    date: string;
    gOhmPrice: string;
    gOhmTotalSupply: string;
    nextDistributedOhm: string;
    nextEpochRebase: string;
    ohmPrice: string;
    ohmTotalSupply: string;
    sOhmCirculatingSupply: string;
    timestamp: string | number;
    totalValueLocked: string;
}[], unknown, "query", Role, CustomClaims, InternalOperationsClient, undefined, OpenApiAgentFactory, any>;

/**
 * This custom query will return a flat array containing TokenRecord objects from
 * across all endpoints.
 *
 * It also handles pagination to work around the Graph Protocol's 1000 record limit.
 */
declare const _default$1: _wundergraph_sdk_operations.NodeJSOperation<{
    startDate: string;
    dateOffset?: number | undefined;
    crossChainDataComplete?: boolean | undefined;
    ignoreCache?: boolean | undefined;
}, {
    id: string;
    balance: string;
    block: string | number;
    blockchain: string;
    category: string;
    date: string;
    isBluechip: boolean;
    isLiquid: boolean;
    multiplier: string;
    rate: string;
    source: string;
    sourceAddress: string;
    timestamp: string | number;
    token: string;
    tokenAddress: string;
    value: string;
    valueExcludingOhm: string;
}[], unknown, "query", Role, CustomClaims, InternalOperationsClient, undefined, OpenApiAgentFactory, any>;

/**
 * This custom query will return a flat array containing TokenSupply objects from
 * across all endpoints.
 *
 * As TokenSupply snapshots can be created at different blocks, this operation
 * returns the latest snapshot for each day.
 *
 * It also handles pagination to work around the Graph Protocol's 1000 record limit.
 */
declare const _default: _wundergraph_sdk_operations.NodeJSOperation<{
    startDate: string;
    dateOffset?: number | undefined;
    pageSize?: number | undefined;
    crossChainDataComplete?: boolean | undefined;
    ignoreCache?: boolean | undefined;
}, {
    id: string;
    balance: string;
    block: string | number;
    blockchain?: string | undefined;
    date: string;
    pool?: string | undefined;
    poolAddress?: string | undefined;
    source?: string | undefined;
    sourceAddress?: string | undefined;
    supplyBalance: string;
    timestamp: string | number;
    token: string;
    tokenAddress: string;
    type: string;
}[], unknown, "query", Role, CustomClaims, InternalOperationsClient, undefined, OpenApiAgentFactory, any>;

interface TokenRecordsInput {
    pageSize?: number;
    startDate: string;
    endDate: string;
}
interface TokenRecordsAtBlockInput {
    pageSize?: number;
    arbitrumBlock: string | number;
    ethereumBlock: string | number;
    fantomBlock: string | number;
    polygonBlock: string | number;
}
interface TokenSuppliesInput {
    pageSize?: number;
    startDate: string;
    endDate: string;
}
interface TokenSuppliesAtBlockInput {
    pageSize?: number;
    arbitrumBlock: string | number;
    ethereumBlock: string | number;
    fantomBlock: string | number;
    polygonBlock: string | number;
}
type AtBlockMetricsInput = ExtractInput<typeof _default$e>;
type AtBlockTokenRecordsInput = ExtractInput<typeof _default$d>;
type AtBlockTokenSuppliesInput = ExtractInput<typeof _default$c>;
type EarliestMetricsInput = ExtractInput<typeof _default$a>;
type EarliestTokenRecordsInput = ExtractInput<typeof _default$9>;
type EarliestTokenSuppliesInput = ExtractInput<typeof _default$8>;
type LatestMetricsInput = ExtractInput<typeof _default$7>;
type LatestProtocolMetricsInput = ExtractInput<typeof _default$6>;
type LatestTokenRecordsInput = ExtractInput<typeof _default$5>;
type LatestTokenSuppliesInput = ExtractInput<typeof _default$4>;
type PaginatedMetricsInput = ExtractInput<typeof _default$3>;
type PaginatedProtocolMetricsInput = ExtractInput<typeof _default$2>;
type PaginatedTokenRecordsInput = ExtractInput<typeof _default$1>;
type PaginatedTokenSuppliesInput = ExtractInput<typeof _default>;
interface RawInternalProtocolMetricsInputInternal {
    pageSize?: number;
    startDate: string;
    endDate: string;
}
interface RawInternalProtocolMetricsAtBlockInputInternal {
    pageSize?: number;
    arbitrumBlock: string | number;
    ethereumBlock: string | number;
    fantomBlock: string | number;
    polygonBlock: string | number;
}
interface TokenRecordsInputInternal {
    pageSize?: number;
    startDate: string;
    endDate: string;
}
interface TokenRecordsAtBlockInputInternal {
    pageSize?: number;
    arbitrumBlock: string | number;
    ethereumBlock: string | number;
    fantomBlock: string | number;
    polygonBlock: string | number;
}
interface TokenSuppliesInputInternal {
    pageSize?: number;
    startDate: string;
    endDate: string;
}
interface TokenSuppliesAtBlockInputInternal {
    pageSize?: number;
    arbitrumBlock: string | number;
    ethereumBlock: string | number;
    fantomBlock: string | number;
    polygonBlock: string | number;
}
interface AtBlockInternalProtocolMetricsInputInternal {
    arbitrumBlock: number;
    ethereumBlock: number;
    fantomBlock: number;
    polygonBlock: number;
}
interface AtBlockMetricsInputInternal {
    arbitrumBlock: number;
    ethereumBlock: number;
    fantomBlock: number;
    polygonBlock: number;
}
interface AtBlockTokenRecordsInputInternal {
    arbitrumBlock: number;
    ethereumBlock: number;
    fantomBlock: number;
    polygonBlock: number;
}
interface AtBlockTokenSuppliesInputInternal {
    arbitrumBlock: number;
    ethereumBlock: number;
    fantomBlock: number;
    polygonBlock: number;
}
interface EarliestMetricsInputInternal {
    ignoreCache?: boolean;
}
interface EarliestTokenRecordsInputInternal {
    ignoreCache?: boolean;
}
interface EarliestTokenSuppliesInputInternal {
    ignoreCache?: boolean;
}
interface LatestMetricsInputInternal {
    ignoreCache?: boolean;
}
interface LatestProtocolMetricsInputInternal {
    ignoreCache?: boolean;
}
interface LatestTokenRecordsInputInternal {
    ignoreCache?: boolean;
}
interface LatestTokenSuppliesInputInternal {
    ignoreCache?: boolean;
}
interface PaginatedMetricsInputInternal {
    startDate: string;
    dateOffset?: number;
    crossChainDataComplete?: boolean;
    includeRecords?: boolean;
    ignoreCache?: boolean;
}
interface PaginatedProtocolMetricsInputInternal {
    startDate: string;
    dateOffset?: number;
    ignoreCache?: boolean;
}
interface PaginatedTokenRecordsInputInternal {
    startDate: string;
    dateOffset?: number;
    crossChainDataComplete?: boolean;
    ignoreCache?: boolean;
}
interface PaginatedTokenSuppliesInputInternal {
    startDate: string;
    dateOffset?: number;
    pageSize?: number;
    crossChainDataComplete?: boolean;
    ignoreCache?: boolean;
}
interface TokenRecordsInputInjected {
    pageSize?: number;
    startDate: string;
    endDate: string;
}
interface TokenRecordsAtBlockInputInjected {
    pageSize?: number;
    arbitrumBlock: string | number;
    ethereumBlock: string | number;
    fantomBlock: string | number;
    polygonBlock: string | number;
}
interface TokenSuppliesInputInjected {
    pageSize?: number;
    startDate: string;
    endDate: string;
}
interface TokenSuppliesAtBlockInputInjected {
    pageSize?: number;
    arbitrumBlock: string | number;
    ethereumBlock: string | number;
    fantomBlock: string | number;
    polygonBlock: string | number;
}
interface RawInternalProtocolMetricsResponse {
    data?: RawInternalProtocolMetricsResponseData;
    errors?: GraphQLError[];
}
interface RawInternalProtocolMetricsAtBlockResponse {
    data?: RawInternalProtocolMetricsAtBlockResponseData;
    errors?: GraphQLError[];
}
interface RawInternalProtocolMetricsEarliestResponse {
    data?: RawInternalProtocolMetricsEarliestResponseData;
    errors?: GraphQLError[];
}
interface RawInternalProtocolMetricsLatestResponse {
    data?: RawInternalProtocolMetricsLatestResponseData;
    errors?: GraphQLError[];
}
interface TokenRecordsResponse {
    data?: TokenRecordsResponseData;
    errors?: GraphQLError[];
}
interface TokenRecordsAtBlockResponse {
    data?: TokenRecordsAtBlockResponseData;
    errors?: GraphQLError[];
}
interface TokenRecordsEarliestResponse {
    data?: TokenRecordsEarliestResponseData;
    errors?: GraphQLError[];
}
interface TokenRecordsLatestResponse {
    data?: TokenRecordsLatestResponseData;
    errors?: GraphQLError[];
}
interface TokenSuppliesResponse {
    data?: TokenSuppliesResponseData;
    errors?: GraphQLError[];
}
interface TokenSuppliesAtBlockResponse {
    data?: TokenSuppliesAtBlockResponseData;
    errors?: GraphQLError[];
}
interface TokenSuppliesEarliestResponse {
    data?: TokenSuppliesEarliestResponseData;
    errors?: GraphQLError[];
}
interface TokenSuppliesLatestResponse {
    data?: TokenSuppliesLatestResponseData;
    errors?: GraphQLError[];
}
interface AtBlockMetricsResponse {
    data?: AtBlockMetricsResponseData;
    errors?: GraphQLError[];
}
interface AtBlockTokenRecordsResponse {
    data?: AtBlockTokenRecordsResponseData;
    errors?: GraphQLError[];
}
interface AtBlockTokenSuppliesResponse {
    data?: AtBlockTokenSuppliesResponseData;
    errors?: GraphQLError[];
}
interface EarliestMetricsResponse {
    data?: EarliestMetricsResponseData;
    errors?: GraphQLError[];
}
interface EarliestTokenRecordsResponse {
    data?: EarliestTokenRecordsResponseData;
    errors?: GraphQLError[];
}
interface EarliestTokenSuppliesResponse {
    data?: EarliestTokenSuppliesResponseData;
    errors?: GraphQLError[];
}
interface LatestMetricsResponse {
    data?: LatestMetricsResponseData;
    errors?: GraphQLError[];
}
interface LatestProtocolMetricsResponse {
    data?: LatestProtocolMetricsResponseData;
    errors?: GraphQLError[];
}
interface LatestTokenRecordsResponse {
    data?: LatestTokenRecordsResponseData;
    errors?: GraphQLError[];
}
interface LatestTokenSuppliesResponse {
    data?: LatestTokenSuppliesResponseData;
    errors?: GraphQLError[];
}
interface PaginatedMetricsResponse {
    data?: PaginatedMetricsResponseData;
    errors?: GraphQLError[];
}
interface PaginatedProtocolMetricsResponse {
    data?: PaginatedProtocolMetricsResponseData;
    errors?: GraphQLError[];
}
interface PaginatedTokenRecordsResponse {
    data?: PaginatedTokenRecordsResponseData;
    errors?: GraphQLError[];
}
interface PaginatedTokenSuppliesResponse {
    data?: PaginatedTokenSuppliesResponseData;
    errors?: GraphQLError[];
}
interface RawInternalProtocolMetricsResponseData {
    treasuryArbitrum_protocolMetrics: {
        id: string;
        block: string | number;
        currentAPY: string;
        currentIndex: string;
        date: string;
        gOhmPrice: string;
        gOhmTotalSupply: string;
        nextDistributedOhm: string;
        nextEpochRebase: string;
        ohmPrice: string;
        ohmTotalSupply: string;
        sOhmCirculatingSupply: string;
        timestamp: string | number;
        totalValueLocked: string;
    }[];
    treasuryEthereum_protocolMetrics: {
        id: string;
        block: string | number;
        currentAPY: string;
        currentIndex: string;
        date: string;
        gOhmPrice: string;
        gOhmTotalSupply: string;
        nextDistributedOhm: string;
        nextEpochRebase: string;
        ohmPrice: string;
        ohmTotalSupply: string;
        sOhmCirculatingSupply: string;
        timestamp: string | number;
        totalValueLocked: string;
    }[];
    treasuryFantom_protocolMetrics: {
        id: string;
        block: string | number;
        currentAPY: string;
        currentIndex: string;
        date: string;
        gOhmPrice: string;
        gOhmTotalSupply: string;
        nextDistributedOhm: string;
        nextEpochRebase: string;
        ohmPrice: string;
        ohmTotalSupply: string;
        sOhmCirculatingSupply: string;
        timestamp: string | number;
        totalValueLocked: string;
    }[];
    treasuryPolygon_protocolMetrics: {
        id: string;
        block: string | number;
        currentAPY: string;
        currentIndex: string;
        date: string;
        gOhmPrice: string;
        gOhmTotalSupply: string;
        nextDistributedOhm: string;
        nextEpochRebase: string;
        ohmPrice: string;
        ohmTotalSupply: string;
        sOhmCirculatingSupply: string;
        timestamp: string | number;
        totalValueLocked: string;
    }[];
}
interface RawInternalProtocolMetricsAtBlockResponseData {
    treasuryArbitrum_protocolMetrics: {
        id: string;
        block: string | number;
        currentAPY: string;
        currentIndex: string;
        date: string;
        gOhmPrice: string;
        gOhmTotalSupply: string;
        nextDistributedOhm: string;
        nextEpochRebase: string;
        ohmPrice: string;
        ohmTotalSupply: string;
        sOhmCirculatingSupply: string;
        timestamp: string | number;
        totalValueLocked: string;
    }[];
    treasuryEthereum_protocolMetrics: {
        id: string;
        block: string | number;
        currentAPY: string;
        currentIndex: string;
        date: string;
        gOhmPrice: string;
        gOhmTotalSupply: string;
        nextDistributedOhm: string;
        nextEpochRebase: string;
        ohmPrice: string;
        ohmTotalSupply: string;
        sOhmCirculatingSupply: string;
        timestamp: string | number;
        totalValueLocked: string;
    }[];
    treasuryFantom_protocolMetrics: {
        id: string;
        block: string | number;
        currentAPY: string;
        currentIndex: string;
        date: string;
        gOhmPrice: string;
        gOhmTotalSupply: string;
        nextDistributedOhm: string;
        nextEpochRebase: string;
        ohmPrice: string;
        ohmTotalSupply: string;
        sOhmCirculatingSupply: string;
        timestamp: string | number;
        totalValueLocked: string;
    }[];
    treasuryPolygon_protocolMetrics: {
        id: string;
        block: string | number;
        currentAPY: string;
        currentIndex: string;
        date: string;
        gOhmPrice: string;
        gOhmTotalSupply: string;
        nextDistributedOhm: string;
        nextEpochRebase: string;
        ohmPrice: string;
        ohmTotalSupply: string;
        sOhmCirculatingSupply: string;
        timestamp: string | number;
        totalValueLocked: string;
    }[];
}
interface RawInternalProtocolMetricsEarliestResponseData {
    treasuryArbitrum_protocolMetrics: {
        id: string;
        block: string | number;
        currentAPY: string;
        currentIndex: string;
        date: string;
        gOhmPrice: string;
        gOhmTotalSupply: string;
        nextDistributedOhm: string;
        nextEpochRebase: string;
        ohmPrice: string;
        ohmTotalSupply: string;
        sOhmCirculatingSupply: string;
        timestamp: string | number;
        totalValueLocked: string;
    }[];
    treasuryEthereum_protocolMetrics: {
        id: string;
        block: string | number;
        currentAPY: string;
        currentIndex: string;
        date: string;
        gOhmPrice: string;
        gOhmTotalSupply: string;
        nextDistributedOhm: string;
        nextEpochRebase: string;
        ohmPrice: string;
        ohmTotalSupply: string;
        sOhmCirculatingSupply: string;
        timestamp: string | number;
        totalValueLocked: string;
    }[];
    treasuryFantom_protocolMetrics: {
        id: string;
        block: string | number;
        currentAPY: string;
        currentIndex: string;
        date: string;
        gOhmPrice: string;
        gOhmTotalSupply: string;
        nextDistributedOhm: string;
        nextEpochRebase: string;
        ohmPrice: string;
        ohmTotalSupply: string;
        sOhmCirculatingSupply: string;
        timestamp: string | number;
        totalValueLocked: string;
    }[];
    treasuryPolygon_protocolMetrics: {
        id: string;
        block: string | number;
        currentAPY: string;
        currentIndex: string;
        date: string;
        gOhmPrice: string;
        gOhmTotalSupply: string;
        nextDistributedOhm: string;
        nextEpochRebase: string;
        ohmPrice: string;
        ohmTotalSupply: string;
        sOhmCirculatingSupply: string;
        timestamp: string | number;
        totalValueLocked: string;
    }[];
}
interface RawInternalProtocolMetricsLatestResponseData {
    treasuryArbitrum_protocolMetrics: {
        id: string;
        block: string | number;
        currentAPY: string;
        currentIndex: string;
        date: string;
        gOhmPrice: string;
        gOhmTotalSupply: string;
        nextDistributedOhm: string;
        nextEpochRebase: string;
        ohmPrice: string;
        ohmTotalSupply: string;
        sOhmCirculatingSupply: string;
        timestamp: string | number;
        totalValueLocked: string;
    }[];
    treasuryEthereum_protocolMetrics: {
        id: string;
        block: string | number;
        currentAPY: string;
        currentIndex: string;
        date: string;
        gOhmPrice: string;
        gOhmTotalSupply: string;
        nextDistributedOhm: string;
        nextEpochRebase: string;
        ohmPrice: string;
        ohmTotalSupply: string;
        sOhmCirculatingSupply: string;
        timestamp: string | number;
        totalValueLocked: string;
    }[];
    treasuryFantom_protocolMetrics: {
        id: string;
        block: string | number;
        currentAPY: string;
        currentIndex: string;
        date: string;
        gOhmPrice: string;
        gOhmTotalSupply: string;
        nextDistributedOhm: string;
        nextEpochRebase: string;
        ohmPrice: string;
        ohmTotalSupply: string;
        sOhmCirculatingSupply: string;
        timestamp: string | number;
        totalValueLocked: string;
    }[];
    treasuryPolygon_protocolMetrics: {
        id: string;
        block: string | number;
        currentAPY: string;
        currentIndex: string;
        date: string;
        gOhmPrice: string;
        gOhmTotalSupply: string;
        nextDistributedOhm: string;
        nextEpochRebase: string;
        ohmPrice: string;
        ohmTotalSupply: string;
        sOhmCirculatingSupply: string;
        timestamp: string | number;
        totalValueLocked: string;
    }[];
}
interface TokenRecordsResponseData {
    treasuryArbitrum_tokenRecords: {
        id: string;
        balance: string;
        block: string | number;
        blockchain: string;
        category: string;
        date: string;
        isBluechip: boolean;
        isLiquid: boolean;
        multiplier: string;
        rate: string;
        source: string;
        sourceAddress: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        value: string;
        valueExcludingOhm: string;
    }[];
    treasuryEthereum_tokenRecords: {
        id: string;
        balance: string;
        block: string | number;
        blockchain: string;
        category: string;
        date: string;
        isBluechip: boolean;
        isLiquid: boolean;
        multiplier: string;
        rate: string;
        source: string;
        sourceAddress: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        value: string;
        valueExcludingOhm: string;
    }[];
    treasuryFantom_tokenRecords: {
        id: string;
        balance: string;
        block: string | number;
        blockchain: string;
        category: string;
        date: string;
        isBluechip: boolean;
        isLiquid: boolean;
        multiplier: string;
        rate: string;
        source: string;
        sourceAddress: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        value: string;
        valueExcludingOhm: string;
    }[];
    treasuryPolygon_tokenRecords: {
        id: string;
        balance: string;
        block: string | number;
        blockchain: string;
        category: string;
        date: string;
        isBluechip: boolean;
        isLiquid: boolean;
        multiplier: string;
        rate: string;
        source: string;
        sourceAddress: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        value: string;
        valueExcludingOhm: string;
    }[];
}
interface TokenRecordsAtBlockResponseData {
    treasuryArbitrum_tokenRecords: {
        id: string;
        balance: string;
        block: string | number;
        blockchain: string;
        category: string;
        date: string;
        isBluechip: boolean;
        isLiquid: boolean;
        multiplier: string;
        rate: string;
        source: string;
        sourceAddress: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        value: string;
        valueExcludingOhm: string;
    }[];
    treasuryEthereum_tokenRecords: {
        id: string;
        balance: string;
        block: string | number;
        blockchain: string;
        category: string;
        date: string;
        isBluechip: boolean;
        isLiquid: boolean;
        multiplier: string;
        rate: string;
        source: string;
        sourceAddress: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        value: string;
        valueExcludingOhm: string;
    }[];
    treasuryFantom_tokenRecords: {
        id: string;
        balance: string;
        block: string | number;
        blockchain: string;
        category: string;
        date: string;
        isBluechip: boolean;
        isLiquid: boolean;
        multiplier: string;
        rate: string;
        source: string;
        sourceAddress: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        value: string;
        valueExcludingOhm: string;
    }[];
    treasuryPolygon_tokenRecords: {
        id: string;
        balance: string;
        block: string | number;
        blockchain: string;
        category: string;
        date: string;
        isBluechip: boolean;
        isLiquid: boolean;
        multiplier: string;
        rate: string;
        source: string;
        sourceAddress: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        value: string;
        valueExcludingOhm: string;
    }[];
}
interface TokenRecordsEarliestResponseData {
    treasuryArbitrum_tokenRecords: {
        id: string;
        balance: string;
        block: string | number;
        blockchain: string;
        category: string;
        date: string;
        isBluechip: boolean;
        isLiquid: boolean;
        multiplier: string;
        rate: string;
        source: string;
        sourceAddress: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        value: string;
        valueExcludingOhm: string;
    }[];
    treasuryEthereum_tokenRecords: {
        id: string;
        balance: string;
        block: string | number;
        blockchain: string;
        category: string;
        date: string;
        isBluechip: boolean;
        isLiquid: boolean;
        multiplier: string;
        rate: string;
        source: string;
        sourceAddress: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        value: string;
        valueExcludingOhm: string;
    }[];
    treasuryFantom_tokenRecords: {
        id: string;
        balance: string;
        block: string | number;
        blockchain: string;
        category: string;
        date: string;
        isBluechip: boolean;
        isLiquid: boolean;
        multiplier: string;
        rate: string;
        source: string;
        sourceAddress: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        value: string;
        valueExcludingOhm: string;
    }[];
    treasuryPolygon_tokenRecords: {
        id: string;
        balance: string;
        block: string | number;
        blockchain: string;
        category: string;
        date: string;
        isBluechip: boolean;
        isLiquid: boolean;
        multiplier: string;
        rate: string;
        source: string;
        sourceAddress: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        value: string;
        valueExcludingOhm: string;
    }[];
}
interface TokenRecordsLatestResponseData {
    treasuryArbitrum_tokenRecords: {
        id: string;
        balance: string;
        block: string | number;
        blockchain: string;
        category: string;
        date: string;
        isBluechip: boolean;
        isLiquid: boolean;
        multiplier: string;
        rate: string;
        source: string;
        sourceAddress: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        value: string;
        valueExcludingOhm: string;
    }[];
    treasuryEthereum_tokenRecords: {
        id: string;
        balance: string;
        block: string | number;
        blockchain: string;
        category: string;
        date: string;
        isBluechip: boolean;
        isLiquid: boolean;
        multiplier: string;
        rate: string;
        source: string;
        sourceAddress: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        value: string;
        valueExcludingOhm: string;
    }[];
    treasuryFantom_tokenRecords: {
        id: string;
        balance: string;
        block: string | number;
        blockchain: string;
        category: string;
        date: string;
        isBluechip: boolean;
        isLiquid: boolean;
        multiplier: string;
        rate: string;
        source: string;
        sourceAddress: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        value: string;
        valueExcludingOhm: string;
    }[];
    treasuryPolygon_tokenRecords: {
        id: string;
        balance: string;
        block: string | number;
        blockchain: string;
        category: string;
        date: string;
        isBluechip: boolean;
        isLiquid: boolean;
        multiplier: string;
        rate: string;
        source: string;
        sourceAddress: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        value: string;
        valueExcludingOhm: string;
    }[];
}
interface TokenSuppliesResponseData {
    treasuryArbitrum_tokenSupplies: {
        id: string;
        balance: string;
        block: string | number;
        blockchain?: string;
        date: string;
        pool?: string;
        poolAddress?: string;
        source?: string;
        sourceAddress?: string;
        supplyBalance: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        type: string;
    }[];
    treasuryEthereum_tokenSupplies: {
        id: string;
        balance: string;
        block: string | number;
        blockchain?: string;
        date: string;
        pool?: string;
        poolAddress?: string;
        source?: string;
        sourceAddress?: string;
        supplyBalance: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        type: string;
    }[];
    treasuryFantom_tokenSupplies: {
        id: string;
        balance: string;
        block: string | number;
        blockchain?: string;
        date: string;
        pool?: string;
        poolAddress?: string;
        source?: string;
        sourceAddress?: string;
        supplyBalance: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        type: string;
    }[];
    treasuryPolygon_tokenSupplies: {
        id: string;
        balance: string;
        block: string | number;
        blockchain?: string;
        date: string;
        pool?: string;
        poolAddress?: string;
        source?: string;
        sourceAddress?: string;
        supplyBalance: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        type: string;
    }[];
}
interface TokenSuppliesAtBlockResponseData {
    treasuryArbitrum_tokenSupplies: {
        id: string;
        balance: string;
        block: string | number;
        blockchain?: string;
        date: string;
        pool?: string;
        poolAddress?: string;
        source?: string;
        sourceAddress?: string;
        supplyBalance: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        type: string;
    }[];
    treasuryEthereum_tokenSupplies: {
        id: string;
        balance: string;
        block: string | number;
        blockchain?: string;
        date: string;
        pool?: string;
        poolAddress?: string;
        source?: string;
        sourceAddress?: string;
        supplyBalance: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        type: string;
    }[];
    treasuryFantom_tokenSupplies: {
        id: string;
        balance: string;
        block: string | number;
        blockchain?: string;
        date: string;
        pool?: string;
        poolAddress?: string;
        source?: string;
        sourceAddress?: string;
        supplyBalance: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        type: string;
    }[];
    treasuryPolygon_tokenSupplies: {
        id: string;
        balance: string;
        block: string | number;
        blockchain?: string;
        date: string;
        pool?: string;
        poolAddress?: string;
        source?: string;
        sourceAddress?: string;
        supplyBalance: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        type: string;
    }[];
}
interface TokenSuppliesEarliestResponseData {
    treasuryArbitrum_tokenSupplies: {
        id: string;
        balance: string;
        block: string | number;
        blockchain?: string;
        date: string;
        pool?: string;
        poolAddress?: string;
        source?: string;
        sourceAddress?: string;
        supplyBalance: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        type: string;
    }[];
    treasuryEthereum_tokenSupplies: {
        id: string;
        balance: string;
        block: string | number;
        blockchain?: string;
        date: string;
        pool?: string;
        poolAddress?: string;
        source?: string;
        sourceAddress?: string;
        supplyBalance: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        type: string;
    }[];
    treasuryFantom_tokenSupplies: {
        id: string;
        balance: string;
        block: string | number;
        blockchain?: string;
        date: string;
        pool?: string;
        poolAddress?: string;
        source?: string;
        sourceAddress?: string;
        supplyBalance: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        type: string;
    }[];
    treasuryPolygon_tokenSupplies: {
        id: string;
        balance: string;
        block: string | number;
        blockchain?: string;
        date: string;
        pool?: string;
        poolAddress?: string;
        source?: string;
        sourceAddress?: string;
        supplyBalance: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        type: string;
    }[];
}
interface TokenSuppliesLatestResponseData {
    treasuryArbitrum_tokenSupplies: {
        id: string;
        balance: string;
        block: string | number;
        blockchain?: string;
        date: string;
        pool?: string;
        poolAddress?: string;
        source?: string;
        sourceAddress?: string;
        supplyBalance: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        type: string;
    }[];
    treasuryEthereum_tokenSupplies: {
        id: string;
        balance: string;
        block: string | number;
        blockchain?: string;
        date: string;
        pool?: string;
        poolAddress?: string;
        source?: string;
        sourceAddress?: string;
        supplyBalance: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        type: string;
    }[];
    treasuryFantom_tokenSupplies: {
        id: string;
        balance: string;
        block: string | number;
        blockchain?: string;
        date: string;
        pool?: string;
        poolAddress?: string;
        source?: string;
        sourceAddress?: string;
        supplyBalance: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        type: string;
    }[];
    treasuryPolygon_tokenSupplies: {
        id: string;
        balance: string;
        block: string | number;
        blockchain?: string;
        date: string;
        pool?: string;
        poolAddress?: string;
        source?: string;
        sourceAddress?: string;
        supplyBalance: string;
        timestamp: string | number;
        token: string;
        tokenAddress: string;
        type: string;
    }[];
}
type AtBlockInternalProtocolMetricsResponseData = ExtractResponse<typeof _default$f>;
type AtBlockMetricsResponseData = ExtractResponse<typeof _default$e>;
type AtBlockTokenRecordsResponseData = ExtractResponse<typeof _default$d>;
type AtBlockTokenSuppliesResponseData = ExtractResponse<typeof _default$c>;
type EarliestInternalProtocolMetricsResponseData = ExtractResponse<typeof _default$b>;
type EarliestMetricsResponseData = ExtractResponse<typeof _default$a>;
type EarliestTokenRecordsResponseData = ExtractResponse<typeof _default$9>;
type EarliestTokenSuppliesResponseData = ExtractResponse<typeof _default$8>;
type LatestMetricsResponseData = ExtractResponse<typeof _default$7>;
type LatestProtocolMetricsResponseData = ExtractResponse<typeof _default$6>;
type LatestTokenRecordsResponseData = ExtractResponse<typeof _default$5>;
type LatestTokenSuppliesResponseData = ExtractResponse<typeof _default$4>;
type PaginatedMetricsResponseData = ExtractResponse<typeof _default$3>;
type PaginatedProtocolMetricsResponseData = ExtractResponse<typeof _default$2>;
type PaginatedTokenRecordsResponseData = ExtractResponse<typeof _default$1>;
type PaginatedTokenSuppliesResponseData = ExtractResponse<typeof _default>;

type UserRole = "admin" | "user";
declare const WUNDERGRAPH_S3_ENABLED = false;
declare const WUNDERGRAPH_AUTH_ENABLED = false;
declare const defaultClientConfig: ClientConfig;
declare const operationMetadata: OperationMetadata;
type PublicUser = User$1<UserRole, PublicCustomClaims>;
declare class WunderGraphClient extends Client {
    query<OperationName extends Extract<keyof Operations["queries"], string>, Input extends Operations["queries"][OperationName]["input"] = Operations["queries"][OperationName]["input"], Response extends Operations["queries"][OperationName]["response"] = Operations["queries"][OperationName]["response"]>(options: OperationName extends string ? QueryRequestOptions<OperationName, Input> : OperationRequestOptions): Promise<_wundergraph_sdk_client.ClientResponse<Response["data"], Response["error"]>>;
    mutate<OperationName extends Extract<keyof Operations["mutations"], string>, Input extends Operations["mutations"][OperationName]["input"] = Operations["mutations"][OperationName]["input"], Response extends Operations["mutations"][OperationName]["response"] = Operations["mutations"][OperationName]["response"]>(options: OperationName extends string ? MutationRequestOptions<OperationName, Input> : OperationRequestOptions): Promise<_wundergraph_sdk_client.ClientResponse<Response["data"], Response["error"]>>;
    subscribe<OperationName extends Extract<keyof Operations["subscriptions"], string>, Input extends Operations["subscriptions"][OperationName]["input"] = Operations["subscriptions"][OperationName]["input"], Response extends Operations["subscriptions"][OperationName]["response"] = Operations["subscriptions"][OperationName]["response"]>(options: OperationName extends string ? SubscriptionRequestOptions<OperationName, Input> : SubscriptionRequestOptions, cb?: SubscriptionEventHandler<Response["data"], Response["error"]>): Promise<void | _wundergraph_sdk_client.ClientResponse<Response["data"], Response["error"]>>;
    login(authProviderID: Operations["authProvider"], redirectURI?: string): void;
    fetchUser<TUser extends PublicUser = PublicUser>(options?: FetchUserRequestOptions): Promise<TUser>;
}
declare const createClient: (config?: CreateClientConfig) => WunderGraphClient;
type Queries = {
    tokenRecords: {
        input: TokenRecordsInput;
        response: {
            data?: TokenRecordsResponse["data"];
            error?: ClientOperationErrors;
        };
        requiresAuthentication: false;
        liveQuery: boolean;
    };
    tokenRecordsAtBlock: {
        input: TokenRecordsAtBlockInput;
        response: {
            data?: TokenRecordsAtBlockResponse["data"];
            error?: ClientOperationErrors;
        };
        requiresAuthentication: false;
        liveQuery: boolean;
    };
    tokenRecordsEarliest: {
        input?: undefined;
        response: {
            data?: TokenRecordsEarliestResponse["data"];
            error?: ClientOperationErrors;
        };
        requiresAuthentication: false;
        liveQuery: boolean;
    };
    tokenRecordsLatest: {
        input?: undefined;
        response: {
            data?: TokenRecordsLatestResponse["data"];
            error?: ClientOperationErrors;
        };
        requiresAuthentication: false;
        liveQuery: boolean;
    };
    tokenSupplies: {
        input: TokenSuppliesInput;
        response: {
            data?: TokenSuppliesResponse["data"];
            error?: ClientOperationErrors;
        };
        requiresAuthentication: false;
        liveQuery: boolean;
    };
    tokenSuppliesAtBlock: {
        input: TokenSuppliesAtBlockInput;
        response: {
            data?: TokenSuppliesAtBlockResponse["data"];
            error?: ClientOperationErrors;
        };
        requiresAuthentication: false;
        liveQuery: boolean;
    };
    tokenSuppliesEarliest: {
        input?: undefined;
        response: {
            data?: TokenSuppliesEarliestResponse["data"];
            error?: ClientOperationErrors;
        };
        requiresAuthentication: false;
        liveQuery: boolean;
    };
    tokenSuppliesLatest: {
        input?: undefined;
        response: {
            data?: TokenSuppliesLatestResponse["data"];
            error?: ClientOperationErrors;
        };
        requiresAuthentication: false;
        liveQuery: boolean;
    };
    "atBlock/metrics": {
        input: AtBlockMetricsInput;
        response: {
            data?: AtBlockMetricsResponseData;
            error?: OperationErrors["atBlock/metrics"];
        };
        requiresAuthentication: false;
        liveQuery: boolean;
    };
    "atBlock/tokenRecords": {
        input: AtBlockTokenRecordsInput;
        response: {
            data?: AtBlockTokenRecordsResponseData;
            error?: OperationErrors["atBlock/tokenRecords"];
        };
        requiresAuthentication: false;
        liveQuery: boolean;
    };
    "atBlock/tokenSupplies": {
        input: AtBlockTokenSuppliesInput;
        response: {
            data?: AtBlockTokenSuppliesResponseData;
            error?: OperationErrors["atBlock/tokenSupplies"];
        };
        requiresAuthentication: false;
        liveQuery: boolean;
    };
    "earliest/metrics": {
        input: EarliestMetricsInput;
        response: {
            data?: EarliestMetricsResponseData;
            error?: OperationErrors["earliest/metrics"];
        };
        requiresAuthentication: false;
        liveQuery: boolean;
    };
    "earliest/tokenRecords": {
        input: EarliestTokenRecordsInput;
        response: {
            data?: EarliestTokenRecordsResponseData;
            error?: OperationErrors["earliest/tokenRecords"];
        };
        requiresAuthentication: false;
        liveQuery: boolean;
    };
    "earliest/tokenSupplies": {
        input: EarliestTokenSuppliesInput;
        response: {
            data?: EarliestTokenSuppliesResponseData;
            error?: OperationErrors["earliest/tokenSupplies"];
        };
        requiresAuthentication: false;
        liveQuery: boolean;
    };
    "latest/metrics": {
        input: LatestMetricsInput;
        response: {
            data?: LatestMetricsResponseData;
            error?: OperationErrors["latest/metrics"];
        };
        requiresAuthentication: false;
        liveQuery: boolean;
    };
    "latest/protocolMetrics": {
        input: LatestProtocolMetricsInput;
        response: {
            data?: LatestProtocolMetricsResponseData;
            error?: OperationErrors["latest/protocolMetrics"];
        };
        requiresAuthentication: false;
        liveQuery: boolean;
    };
    "latest/tokenRecords": {
        input: LatestTokenRecordsInput;
        response: {
            data?: LatestTokenRecordsResponseData;
            error?: OperationErrors["latest/tokenRecords"];
        };
        requiresAuthentication: false;
        liveQuery: boolean;
    };
    "latest/tokenSupplies": {
        input: LatestTokenSuppliesInput;
        response: {
            data?: LatestTokenSuppliesResponseData;
            error?: OperationErrors["latest/tokenSupplies"];
        };
        requiresAuthentication: false;
        liveQuery: boolean;
    };
    "paginated/metrics": {
        input: PaginatedMetricsInput;
        response: {
            data?: PaginatedMetricsResponseData;
            error?: OperationErrors["paginated/metrics"];
        };
        requiresAuthentication: false;
        liveQuery: boolean;
    };
    "paginated/protocolMetrics": {
        input: PaginatedProtocolMetricsInput;
        response: {
            data?: PaginatedProtocolMetricsResponseData;
            error?: OperationErrors["paginated/protocolMetrics"];
        };
        requiresAuthentication: false;
        liveQuery: boolean;
    };
    "paginated/tokenRecords": {
        input: PaginatedTokenRecordsInput;
        response: {
            data?: PaginatedTokenRecordsResponseData;
            error?: OperationErrors["paginated/tokenRecords"];
        };
        requiresAuthentication: false;
        liveQuery: boolean;
    };
    "paginated/tokenSupplies": {
        input: PaginatedTokenSuppliesInput;
        response: {
            data?: PaginatedTokenSuppliesResponseData;
            error?: OperationErrors["paginated/tokenSupplies"];
        };
        requiresAuthentication: false;
        liveQuery: boolean;
    };
};
type Mutations = {};
type Subscriptions = {
    tokenRecords: {
        input: TokenRecordsInput;
        response: {
            data?: TokenRecordsResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    tokenRecordsAtBlock: {
        input: TokenRecordsAtBlockInput;
        response: {
            data?: TokenRecordsAtBlockResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    tokenRecordsEarliest: {
        input?: undefined;
        response: {
            data?: TokenRecordsEarliestResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    tokenRecordsLatest: {
        input?: undefined;
        response: {
            data?: TokenRecordsLatestResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    tokenSupplies: {
        input: TokenSuppliesInput;
        response: {
            data?: TokenSuppliesResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    tokenSuppliesAtBlock: {
        input: TokenSuppliesAtBlockInput;
        response: {
            data?: TokenSuppliesAtBlockResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    tokenSuppliesEarliest: {
        input?: undefined;
        response: {
            data?: TokenSuppliesEarliestResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    tokenSuppliesLatest: {
        input?: undefined;
        response: {
            data?: TokenSuppliesLatestResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "atBlock/metrics": {
        input: AtBlockMetricsInput;
        response: {
            data?: AtBlockMetricsResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "atBlock/tokenRecords": {
        input: AtBlockTokenRecordsInput;
        response: {
            data?: AtBlockTokenRecordsResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "atBlock/tokenSupplies": {
        input: AtBlockTokenSuppliesInput;
        response: {
            data?: AtBlockTokenSuppliesResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "earliest/metrics": {
        input: EarliestMetricsInput;
        response: {
            data?: EarliestMetricsResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "earliest/tokenRecords": {
        input: EarliestTokenRecordsInput;
        response: {
            data?: EarliestTokenRecordsResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "earliest/tokenSupplies": {
        input: EarliestTokenSuppliesInput;
        response: {
            data?: EarliestTokenSuppliesResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "latest/metrics": {
        input: LatestMetricsInput;
        response: {
            data?: LatestMetricsResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "latest/protocolMetrics": {
        input: LatestProtocolMetricsInput;
        response: {
            data?: LatestProtocolMetricsResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "latest/tokenRecords": {
        input: LatestTokenRecordsInput;
        response: {
            data?: LatestTokenRecordsResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "latest/tokenSupplies": {
        input: LatestTokenSuppliesInput;
        response: {
            data?: LatestTokenSuppliesResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "paginated/metrics": {
        input: PaginatedMetricsInput;
        response: {
            data?: PaginatedMetricsResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "paginated/protocolMetrics": {
        input: PaginatedProtocolMetricsInput;
        response: {
            data?: PaginatedProtocolMetricsResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "paginated/tokenRecords": {
        input: PaginatedTokenRecordsInput;
        response: {
            data?: PaginatedTokenRecordsResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "paginated/tokenSupplies": {
        input: PaginatedTokenSuppliesInput;
        response: {
            data?: PaginatedTokenSuppliesResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
};
type LiveQueries = {
    tokenRecords: {
        input: TokenRecordsInput;
        response: {
            data?: TokenRecordsResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    tokenRecordsAtBlock: {
        input: TokenRecordsAtBlockInput;
        response: {
            data?: TokenRecordsAtBlockResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    tokenRecordsEarliest: {
        input?: undefined;
        response: {
            data?: TokenRecordsEarliestResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    tokenRecordsLatest: {
        input?: undefined;
        response: {
            data?: TokenRecordsLatestResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    tokenSupplies: {
        input: TokenSuppliesInput;
        response: {
            data?: TokenSuppliesResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    tokenSuppliesAtBlock: {
        input: TokenSuppliesAtBlockInput;
        response: {
            data?: TokenSuppliesAtBlockResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    tokenSuppliesEarliest: {
        input?: undefined;
        response: {
            data?: TokenSuppliesEarliestResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    tokenSuppliesLatest: {
        input?: undefined;
        response: {
            data?: TokenSuppliesLatestResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "atBlock/metrics": {
        input: AtBlockMetricsInput;
        response: {
            data?: AtBlockMetricsResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "atBlock/tokenRecords": {
        input: AtBlockTokenRecordsInput;
        response: {
            data?: AtBlockTokenRecordsResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "atBlock/tokenSupplies": {
        input: AtBlockTokenSuppliesInput;
        response: {
            data?: AtBlockTokenSuppliesResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "earliest/metrics": {
        input: EarliestMetricsInput;
        response: {
            data?: EarliestMetricsResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "earliest/tokenRecords": {
        input: EarliestTokenRecordsInput;
        response: {
            data?: EarliestTokenRecordsResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "earliest/tokenSupplies": {
        input: EarliestTokenSuppliesInput;
        response: {
            data?: EarliestTokenSuppliesResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "latest/metrics": {
        input: LatestMetricsInput;
        response: {
            data?: LatestMetricsResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "latest/protocolMetrics": {
        input: LatestProtocolMetricsInput;
        response: {
            data?: LatestProtocolMetricsResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "latest/tokenRecords": {
        input: LatestTokenRecordsInput;
        response: {
            data?: LatestTokenRecordsResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "latest/tokenSupplies": {
        input: LatestTokenSuppliesInput;
        response: {
            data?: LatestTokenSuppliesResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "paginated/metrics": {
        input: PaginatedMetricsInput;
        response: {
            data?: PaginatedMetricsResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "paginated/protocolMetrics": {
        input: PaginatedProtocolMetricsInput;
        response: {
            data?: PaginatedProtocolMetricsResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "paginated/tokenRecords": {
        input: PaginatedTokenRecordsInput;
        response: {
            data?: PaginatedTokenRecordsResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
    "paginated/tokenSupplies": {
        input: PaginatedTokenSuppliesInput;
        response: {
            data?: PaginatedTokenSuppliesResponse["data"];
            error?: ClientOperationErrors;
        };
        liveQuery: true;
        requiresAuthentication: false;
    };
};
interface Operations extends OperationsDefinition<Queries, Mutations, Subscriptions, LiveQueries, UserRole, {}> {
}

export { LiveQueries, Mutations, Operations, PublicUser, Queries, Subscriptions, UserRole, WUNDERGRAPH_AUTH_ENABLED, WUNDERGRAPH_S3_ENABLED, WunderGraphClient, createClient, defaultClientConfig, operationMetadata };
