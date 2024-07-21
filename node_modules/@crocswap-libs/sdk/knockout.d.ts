import { TransactionResponse } from 'ethers';
import { CrocContext } from './context';
import { CrocTokenView, TokenQty } from './tokens';
import { CrocSurplusFlags } from "./encoding/flags";
export declare class CrocKnockoutHandle {
    constructor(sellToken: CrocTokenView, buyToken: CrocTokenView, qty: TokenQty, inSellQty: boolean, knockoutTick: number, context: Promise<CrocContext>);
    mint(opts?: CrocKnockoutOpts): Promise<TransactionResponse>;
    burn(opts?: CrocKnockoutOpts): Promise<TransactionResponse>;
    burnLiq(liq: bigint, opts?: CrocKnockoutOpts): Promise<TransactionResponse>;
    recoverPost(pivotTime: number, opts?: CrocKnockoutOpts): Promise<TransactionResponse>;
    willMintFail(): Promise<boolean>;
    private sendCmd;
    private maskSurplusFlags;
    private msgVal;
    private tickRange;
    readonly baseToken: CrocTokenView;
    readonly quoteToken: CrocTokenView;
    readonly qty: Promise<bigint>;
    readonly sellBase: boolean;
    readonly qtyInBase: boolean;
    readonly knockoutTick: number;
    readonly context: Promise<CrocContext>;
}
export interface CrocKnockoutOpts {
    surplus?: CrocSurplusFlags;
}
