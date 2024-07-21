import { TransactionResponse } from "ethers";
import { CrocPoolView } from "../pool";
interface RepositionTarget {
    mint: TickRange | AmbientRange;
    burn: TickRange;
    liquidity: bigint;
}
type AmbientRange = "ambient";
export interface CrocRepositionOpts {
    impact?: number;
}
export declare class CrocReposition {
    constructor(pool: CrocPoolView, target: RepositionTarget, opts?: CrocRepositionOpts);
    rebal(): Promise<TransactionResponse>;
    simStatic(): Promise<any>;
    balancePercent(): Promise<number>;
    currentCollateral(): Promise<bigint>;
    convertCollateral(): Promise<bigint>;
    postBalance(): Promise<[number, number]>;
    mintInput(): Promise<string>;
    swapOutput(): Promise<string>;
    private isBaseOutOfRange;
    private pivotTokens;
    private formatDirective;
    private setupSwap;
    private swapFraction;
    pool: CrocPoolView;
    burnRange: TickRange;
    mintRange: TickRange | AmbientRange;
    liquidity: bigint;
    spotPrice: Promise<number>;
    spotTick: Promise<number>;
    impact: number;
}
type TickRange = [number, number];
export {};
