import { BytesLike } from 'ethers';
export declare class OrderDirective {
    constructor(openToken: string);
    encodeBytes(): BytesLike;
    appendHop(nextToken: string): HopDirective;
    appendPool(poolIdx: number): PoolDirective;
    appendRangeMint(lowTick: number, highTick: number, liq: bigint): ConcentratedDirective;
    appendAmbientMint(liq: bigint): AmbientDirective;
    appendRangeBurn(lowTick: number, highTick: number, liq: bigint): ConcentratedDirective;
    open: SettlementDirective;
    hops: HopDirective[];
}
export interface OrderDirective {
    open: SettlementDirective;
    hops: HopDirective[];
}
export interface SettlementDirective {
    token: string;
    limitQty: bigint;
    dustThresh: bigint;
    useSurplus: boolean;
}
export interface ImproveDirective {
    isEnabled: boolean;
    useBaseSide: boolean;
}
export interface ChainingDirective {
    rollExit: boolean;
    swapDefer: boolean;
    offsetSurplus: boolean;
}
export interface HopDirective {
    pools: PoolDirective[];
    settlement: SettlementDirective;
    improve: ImproveDirective;
}
export interface PoolDirective {
    poolIdx: bigint;
    passive: PassiveDirective;
    swap: SwapDirective;
    chain: ChainingDirective;
}
export interface SwapDirective {
    isBuy: boolean;
    inBaseQty: boolean;
    qty: bigint;
    rollType?: number;
    limitPrice: bigint;
}
export interface PassiveDirective {
    ambient: AmbientDirective;
    concentrated: ConcentratedDirective[];
}
export interface AmbientDirective {
    isAdd: boolean;
    rollType?: number;
    liquidity: bigint;
}
export interface ConcentratedDirective {
    lowTick: number;
    highTick: number;
    isRelTick: boolean;
    isAdd: boolean;
    rollType?: number;
    liquidity: bigint;
}
