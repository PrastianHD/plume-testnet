type Tick = number;
export declare function encodeCrocPrice(price: number): bigint;
export declare function decodeCrocPrice(val: bigint): number;
export declare function toDisplayPrice(price: number | bigint, baseDecimals: number, quoteDecimals: number, isInverted?: boolean): number;
export declare function fromDisplayPrice(price: number, baseDecimals: number, quoteDecimals: number, isInverted?: boolean): number;
export declare function pinTickLower(price: number, nTicksGrid: number): Tick;
export declare function priceHalfBelowTick(tick: number, nTicksGrid: number): Tick;
export declare function pinTickUpper(price: number, nTicksGrid: number): Tick;
export declare function pinTickOutside(price: number, poolPrice: number, nTicksGrid: number): {
    tick: Tick;
    isTickBelow: boolean;
};
export declare function neighborTicks(price: number, nTicksGrid: number, nNeighbors?: number): {
    below: number[];
    above: number[];
};
export declare function priceToTick(price: number): Tick;
export declare function tickToPrice(tick: Tick): number;
export declare function priceHalfAboveTick(tick: number, nTicksGrid: number): Tick;
export declare function calcRangeTilt(mktPrice: number, lowerTick: Tick, upperTick: Tick): number;
export {};
