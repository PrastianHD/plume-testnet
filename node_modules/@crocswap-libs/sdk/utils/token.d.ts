export declare function getBaseTokenAddress(token1: string, token2: string): string;
export declare function getQuoteTokenAddress(token1: string, token2: string): string;
export declare function sortBaseQuoteTokens(token1: string, token2: string): [string, string];
export declare function fromDisplayQty(qty: string, tokenDecimals: number): bigint;
export declare function toDisplayQty(qty: string | number | bigint, tokenDecimals: number): string;
