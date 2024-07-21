import { CrocContext } from "./context";
import { TransactionResponse } from "ethers";
import { BlockTag } from "./position";
export type TokenQty = bigint | string | number;
export declare class CrocTokenView {
    constructor(context: Promise<CrocContext>, tokenAddr: string);
    approve(approveQty?: TokenQty): Promise<TransactionResponse | undefined>;
    approveRouter(approveQty?: TokenQty): Promise<TransactionResponse | undefined>;
    private approveAddr;
    approveBypassRouter(): Promise<TransactionResponse | undefined>;
    wallet(address: string, block?: BlockTag): Promise<bigint>;
    walletDisplay(address: string, block?: BlockTag): Promise<string>;
    balance(address: string, block?: BlockTag): Promise<bigint>;
    balanceDisplay(address: string, block?: BlockTag): Promise<string>;
    allowance(address: string): Promise<bigint>;
    roundQty(qty: TokenQty): Promise<bigint>;
    private truncFraction;
    normQty(qty: TokenQty): Promise<bigint>;
    toDisplay(qty: TokenQty): Promise<string>;
    private resolve;
    private resolveWrite;
    deposit(qty: TokenQty, recv: string): Promise<TransactionResponse>;
    withdraw(qty: TokenQty, recv: string): Promise<TransactionResponse>;
    transfer(qty: TokenQty, recv: string): Promise<TransactionResponse>;
    private surplusOp;
    readonly tokenAddr: string;
    readonly context: Promise<CrocContext>;
    readonly decimals: Promise<number>;
    readonly isNativeEth: boolean;
}
export declare class CrocEthView extends CrocTokenView {
    constructor(context: Promise<CrocContext>);
    msgValOverSurplus(ethNeeded: bigint): Promise<bigint>;
}
export declare function sortBaseQuoteViews(tokenA: CrocTokenView, tokenB: CrocTokenView): [
    CrocTokenView,
    CrocTokenView
];
