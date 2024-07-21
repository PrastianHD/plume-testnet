type Address = string;
type PoolType = number;
export declare class WarmPathEncoder {
    constructor(base: Address, quote: Address, poolIdx: PoolType);
    private base;
    private quote;
    private poolIdx;
    private abiCoder;
    encodeMintConc(lowerTick: number, upperTick: number, qty: bigint, qtyIsBase: boolean, limitLow: number, limitHigh: number, useSurplus: number): string;
    encodeBurnConc(lowerTick: number, upperTick: number, liq: bigint, limitLow: number, limitHigh: number, useSurplus: number): string;
    encodeHarvestConc(lowerTick: number, upperTick: number, limitLow: number, limitHigh: number, useSurplus: number): string;
    encodeMintAmbient(qty: bigint, qtyIsBase: boolean, limitLow: number, limitHigh: number, useSurplus: number): string;
    encodeBurnAmbient(liq: bigint, limitLow: number, limitHigh: number, useSurplus: number): string;
    encodeBurnAmbientAll(limitLow: number, limitHigh: number, useSurplus: number): string;
    private encodeWarmPath;
}
export declare function isTradeWarmCall(txData: string): boolean;
interface WarmPathArgs {
    isMint: boolean;
    isAmbient: boolean;
    base: string;
    quote: string;
    poolIdx: number;
    lowerTick: number;
    upperTick: number;
    qty: bigint;
}
export declare function decodeWarmPathCall(txData: string): WarmPathArgs;
export {};
