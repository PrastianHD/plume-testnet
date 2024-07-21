import { TransactionResponse } from "ethers";
import { CrocContext } from './context';
import { CrocPoolView } from './pool';
import { CrocTokenView, TokenQty } from './tokens';
export interface CrocImpact {
    sellQty: string;
    buyQty: string;
    finalPrice: number;
    percentChange: number;
}
export interface CrocSwapExecOpts {
    settlement?: boolean | {
        buyDexSurplus: boolean;
        sellDexSurplus: boolean;
    };
    gasEst?: bigint;
}
export interface CrocSwapPlanOpts {
    slippage?: number;
}
export declare class CrocSwapPlan {
    constructor(sellToken: CrocTokenView, buyToken: CrocTokenView, qty: TokenQty, qtyIsBuy: boolean, context: Promise<CrocContext>, opts?: CrocSwapPlanOpts);
    swap(args?: CrocSwapExecOpts): Promise<TransactionResponse>;
    simulate(args?: CrocSwapExecOpts): Promise<TransactionResponse>;
    private sendTx;
    private callStatic;
    estimateGas(args?: CrocSwapExecOpts): Promise<bigint>;
    private txBase;
    private hotPathCall;
    private swapCall;
    private userCmdCall;
    /**
     * Utility function to generate a "signed" raw transaction for a swap, used for L1 gas estimation on L2's like Scroll.
     * Extra 0xFF...F is appended to the unsigned raw transaction to simulate the signature and other missing fields.
     *
     * Note: This function is only intended for L1 gas estimation, and does not generate valid signed transactions.
     */
    getFauxRawTx(args?: CrocSwapExecOpts): Promise<`0x${string}`>;
    calcImpact(): Promise<CrocImpact>;
    private maskSurplusArgs;
    private maskSurplusFlags;
    private buildTxArgs;
    private attachEthMsg;
    calcSlipQty(): Promise<bigint>;
    calcLimitPrice(): Promise<bigint>;
    forceProxy(): CrocSwapPlan;
    useRouter(): CrocSwapPlan;
    useBypass(): CrocSwapPlan;
    readonly baseToken: CrocTokenView;
    readonly quoteToken: CrocTokenView;
    readonly qty: Promise<bigint>;
    readonly sellBase: boolean;
    readonly qtyInBase: boolean;
    readonly slippage: number;
    readonly priceSlippage: number;
    readonly poolView: CrocPoolView;
    readonly context: Promise<CrocContext>;
    readonly impact: Promise<CrocImpact>;
    private callType;
}
