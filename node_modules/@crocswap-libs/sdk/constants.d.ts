type ChainAddress = string;
type ChainId = string;
export declare const MIN_TICK = -665454;
export declare const MAX_TICK = 831818;
export declare const MAX_SQRT_PRICE: bigint;
export declare const MIN_SQRT_PRICE: bigint;
export declare const MAX_LIQ: bigint;
export interface ChainSpec {
    nodeUrl: string;
    wsUrl?: string;
    poolIndex: number;
    addrs: {
        dex: ChainAddress;
        query: ChainAddress;
        impact: ChainAddress;
        router?: ChainAddress;
        routerBypass?: ChainAddress;
    };
    isTestNet: boolean;
    chainId: ChainId;
    gridSize: number;
    proxyPaths: {
        cold: number;
        liq: number;
        long: number;
        dfltColdSwap?: boolean;
    };
    blockExplorer?: string;
    displayName: string;
    logoUrl?: string;
}
export declare const CHAIN_SPECS: {
    [chainId: string]: ChainSpec;
};
export {};
