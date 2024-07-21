"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcRangeTilt = exports.priceHalfAboveTick = exports.tickToPrice = exports.priceToTick = exports.neighborTicks = exports.pinTickOutside = exports.pinTickUpper = exports.priceHalfBelowTick = exports.pinTickLower = exports.fromDisplayPrice = exports.toDisplayPrice = exports.decodeCrocPrice = exports.encodeCrocPrice = void 0;
const constants_1 = require("../constants");
function encodeCrocPrice(price) {
    let floatPrice = Math.sqrt(price) * 2 ** 64;
    let scale = BigInt(0);
    const PRECISION_BITS = 16;
    while (floatPrice > Number.MAX_SAFE_INTEGER) {
        floatPrice = floatPrice / 2 ** PRECISION_BITS;
        scale = scale + BigInt(PRECISION_BITS);
    }
    const pinPrice = Math.round(floatPrice);
    const bnSeed = BigInt(pinPrice);
    return bnSeed * (BigInt(2) ** scale);
}
exports.encodeCrocPrice = encodeCrocPrice;
function decodeCrocPrice(val) {
    const x = val < (Number.MAX_SAFE_INTEGER - 1)
        ? Number(val)
        : parseFloat(val.toString());
    const sq = x / 2 ** 64;
    return sq * sq;
}
exports.decodeCrocPrice = decodeCrocPrice;
function toDisplayPrice(price, baseDecimals, quoteDecimals, isInverted = false) {
    const scaled = Number(price) * Math.pow(10, Number(quoteDecimals) - Number(baseDecimals));
    return isInverted ? 1 / scaled : scaled;
}
exports.toDisplayPrice = toDisplayPrice;
function fromDisplayPrice(price, baseDecimals, quoteDecimals, isInverted = false) {
    const scaled = isInverted ? 1 / price : price;
    return scaled * Math.pow(10, baseDecimals - quoteDecimals);
}
exports.fromDisplayPrice = fromDisplayPrice;
function pinTickLower(price, nTicksGrid) {
    const priceInTicks = Math.log(price) / Math.log(1.0001);
    const tickGrid = Math.floor(priceInTicks / nTicksGrid) * nTicksGrid;
    const horizon = Math.floor(constants_1.MIN_TICK / nTicksGrid) * nTicksGrid;
    return Math.max(tickGrid, horizon);
}
exports.pinTickLower = pinTickLower;
function priceHalfBelowTick(tick, nTicksGrid) {
    const halfTickBelow = (tick - (.5 * nTicksGrid));
    return Math.pow(1.0001, halfTickBelow);
}
exports.priceHalfBelowTick = priceHalfBelowTick;
function pinTickUpper(price, nTicksGrid) {
    const priceInTicks = priceToTick(price);
    const tickGrid = Math.ceil(priceInTicks / nTicksGrid) * nTicksGrid;
    const horizon = Math.ceil(constants_1.MAX_TICK / nTicksGrid) * nTicksGrid;
    return Math.min(tickGrid, horizon);
}
exports.pinTickUpper = pinTickUpper;
/* Returns the closest on-grid tick tick that's to the outside of a given price
 * relative to a pool price. */
function pinTickOutside(price, poolPrice, nTicksGrid) {
    const priceInTicks = priceToTick(price);
    const poolInTicks = priceToTick(poolPrice);
    const [poolLower, poolUpper] = [pinTickLower(poolPrice, nTicksGrid), pinTickUpper(poolPrice, nTicksGrid)];
    if (priceInTicks < poolInTicks) {
        if (priceInTicks >= poolLower) {
            return { tick: poolLower - nTicksGrid, isTickBelow: true };
        }
        else {
            return { tick: pinTickLower(price, nTicksGrid), isTickBelow: true };
        }
    }
    else {
        if (priceInTicks <= poolUpper) {
            return { tick: poolUpper + nTicksGrid, isTickBelow: false };
        }
        else {
            return { tick: pinTickUpper(price, nTicksGrid), isTickBelow: false };
        }
    }
}
exports.pinTickOutside = pinTickOutside;
/* Returns the neighboring N on-grid ticks to a given price. Ticks will be
 * sorted from closest to furthers */
function neighborTicks(price, nTicksGrid, nNeighbors = 1) {
    const priceInTicks = pinTickLower(price, nTicksGrid);
    return {
        below: Array.from({ length: nNeighbors }).
            map((_, idx) => priceInTicks - idx * nTicksGrid),
        above: Array.from({ length: nNeighbors }).
            map((_, idx) => priceInTicks + (idx + 1) * nTicksGrid)
    };
}
exports.neighborTicks = neighborTicks;
function priceToTick(price) {
    return Math.floor(Math.log(price) / Math.log(1.0001));
}
exports.priceToTick = priceToTick;
function tickToPrice(tick) {
    return Math.pow(1.0001, tick);
}
exports.tickToPrice = tickToPrice;
function priceHalfAboveTick(tick, nTicksGrid) {
    const halfTickAbove = (tick + (.5 * nTicksGrid));
    return Math.pow(1.0001, halfTickAbove);
}
exports.priceHalfAboveTick = priceHalfAboveTick;
/* Returns the ratio of quote to base tokens necessary to support the collateral for a given
 * range order over the specified ticks. If no quote token collateral is required returns 0
 * if no base token collateral is required returns Infinity */
function calcRangeTilt(mktPrice, lowerTick, upperTick) {
    const lowerPrice = tickToPrice(lowerTick);
    const upperPrice = tickToPrice(upperTick);
    if (mktPrice > upperPrice) {
        return Infinity;
    }
    else if (mktPrice < lowerPrice) {
        return 0;
    }
    else {
        const basePartial = Math.sqrt(lowerPrice / mktPrice);
        const quotePartial = Math.sqrt(mktPrice / upperPrice);
        return quotePartial / basePartial;
    }
}
exports.calcRangeTilt = calcRangeTilt;
//# sourceMappingURL=price.js.map