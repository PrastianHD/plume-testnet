"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roundForConcLiq = exports.concQuoteSlippagePrice = exports.concBaseSlippagePrice = exports.capitalConcFactor = exports.concDepositBalance = exports.concDepositSkew = exports.quoteConcFactor = exports.baseConcFactor = exports.quoteTokenForBaseConc = exports.baseTokenForQuoteConc = exports.quoteTokenForConcLiq = exports.baseTokenForConcLiq = exports.liquidityForQuoteConc = exports.liquidityForBaseConc = exports.quoteVirtualReserves = exports.baseVirtualReserves = exports.liquidityForQuoteQty = exports.liquidityForBaseQty = void 0;
const _1 = require("./");
/* Converts a fixed base token collateral amount to pool liquidity units. This conversion only applies
 * to the current pool price. If price moves the ratio between token collateral and liquidity will also
 * change. Note that this function will only work when token qty or liquidity is less than 2^64

 * @param price The current (non-display) price ratio in the pool.
 * @param qty The quantity (in non-display wei) of base token to convert
 * @return The amount of virtual liquidity (in sqrt(X*Y)) supported by this base token quantity. */
function liquidityForBaseQty(price, qty, mult = 1.0) {
    return (0, _1.floatToBigInt)(Math.floor(((0, _1.bigIntToFloat)(qty) / Math.sqrt(price)) * mult));
}
exports.liquidityForBaseQty = liquidityForBaseQty;
/* Converts a fixed quote token collateral amount to pool liquidity units. This conversion only applies
 * to the current pool price. If price moves the ratio between token collateral and liquidity will also
 * change. Note that this function will only work when token qty or liquidity is less than 2^64
 *
 * @param price The current (non-display) price ratio in the pool.
 * @param qty The quantity (in non-display wei) of quote token to convert
 * @return The amount of virtual liquidity (in sqrt(X*Y)) supported by this quote token quantity. */
function liquidityForQuoteQty(price, qty, mult = 1.0) {
    return (0, _1.floatToBigInt)(Math.floor((0, _1.bigIntToFloat)(qty) * Math.sqrt(price) * mult));
}
exports.liquidityForQuoteQty = liquidityForQuoteQty;
function baseVirtualReserves(price, liq, mult = 1.0) {
    return (0, _1.floatToBigInt)((0, _1.bigIntToFloat)(liq) * Math.sqrt(price) * mult);
}
exports.baseVirtualReserves = baseVirtualReserves;
function quoteVirtualReserves(price, liq, mult = 1.0) {
    return (0, _1.floatToBigInt)(((0, _1.bigIntToFloat)(liq) / Math.sqrt(price)) * mult);
}
exports.quoteVirtualReserves = quoteVirtualReserves;
/* Converts a fixed amount of base token deposits to liquidity for a concentrated range order
 *
 * @param price The current (non-display) price ratio in the pool.
 * @param qty The quantity (in non-display wei) of base token to convert
 * @param lower The lower boundary price of the range order
 * @param upper The upper boundary price of the range order
 * @return The amount of virtual liquidity (in sqrt(X*Y)) supported by this base token quantity. */
function liquidityForBaseConc(price, qty, lower, upper) {
    const concFactor = baseConcFactor(price, lower, upper);
    return liquidityForBaseQty(price, qty, concFactor);
}
exports.liquidityForBaseConc = liquidityForBaseConc;
/* Converts a fixed amount of quote token deposits to liquidity for a concentrated range order
 *
 * @param price The current (non-display) price ratio in the pool.
 * @param qty The quantity (in non-display wei) of base token to convert
 * @param lower The lower boundary price of the range order
 * @param upper The upper boudnary price of the range order
 * @return The amount of virtual liquidity (in sqrt(X*Y)) supported by this quote token quantity. */
function liquidityForQuoteConc(price, qty, lower, upper) {
    const concFactor = quoteConcFactor(price, lower, upper);
    return liquidityForQuoteQty(price, qty, concFactor);
}
exports.liquidityForQuoteConc = liquidityForQuoteConc;
function baseTokenForConcLiq(price, liq, lower, upper) {
    const concFactor = baseConcFactor(price, lower, upper);
    return baseVirtualReserves(price, liq, 1 / concFactor);
}
exports.baseTokenForConcLiq = baseTokenForConcLiq;
function quoteTokenForConcLiq(price, liq, lower, upper) {
    const concFactor = quoteConcFactor(price, lower, upper);
    return quoteVirtualReserves(price, liq, 1 / concFactor);
}
exports.quoteTokenForConcLiq = quoteTokenForConcLiq;
function baseTokenForQuoteConc(baseQty, lower, upper) {
    const growth = Math.sqrt(upper / lower) - 1;
    const virtBase = baseQty / growth;
    const virtQuote = virtBase / lower;
    return virtQuote * (1 / (1 - growth) - 1);
}
exports.baseTokenForQuoteConc = baseTokenForQuoteConc;
function quoteTokenForBaseConc(quoteQty, lower, upper) {
    return baseTokenForQuoteConc(quoteQty, 1 / upper, 1 / lower);
}
exports.quoteTokenForBaseConc = quoteTokenForBaseConc;
/* Calculates the concentration leverage factor for the base token given the range relative to
 * the current price in the pool.
 *
 * @param price The current price of the pool
 * @param lower The lower price boundary of the range order
 * @param upper The upper price boundary of the range order
 * @return The fraction of base tokens needed relative to an ambient position with the same
 *         liquidity */
function baseConcFactor(price, lower, upper) {
    if (price < lower) {
        return Infinity;
    }
    else if (price > upper) {
        return Math.sqrt(price) / (Math.sqrt(upper) - Math.sqrt(lower));
    }
    else {
        return 1 / (1 - Math.sqrt(lower) / Math.sqrt(price));
    }
}
exports.baseConcFactor = baseConcFactor;
/* Calculates the concentration leverage factor for the quote token given the range relative to
 * the current price in the pool.
 *
 * @param price The current price of the pool
 * @param lower The lower price boundary of the range order
 * @param upper The upper price boundary of the range order
 * @return The fraction of quote tokens needed relative to an ambient position with the same
 *         liquidity */
function quoteConcFactor(price, lower, upper) {
    return baseConcFactor(1 / price, 1 / upper, 1 / lower);
}
exports.quoteConcFactor = quoteConcFactor;
/* Calculates the deposit ratio multiplier for a concentrated liquidity range order.
 *
 * @param price The current price of the pool
 * @param lower The lower price boundary of the range order
 * @param upper The upper price boundary of the range order
 * @return The ratio of base to quote token deposit amounts for this concentrated range
 *         order *relative* to full-range ambient deposit ratio. */
function concDepositSkew(price, lower, upper) {
    const base = baseConcFactor(price, lower, upper);
    const quote = quoteConcFactor(price, lower, upper);
    return quote / base;
}
exports.concDepositSkew = concDepositSkew;
function concDepositBalance(price, lower, upper) {
    const base = baseConcFactor(price, lower, upper);
    const quote = quoteConcFactor(price, lower, upper);
    return quote / (base + quote);
}
exports.concDepositBalance = concDepositBalance;
function capitalConcFactor(price, lower, upper) {
    const base = 1 / baseConcFactor(price, lower, upper);
    const quote = 1 / quoteConcFactor(price, lower, upper);
    return 1 / ((base + quote) / 2.0);
}
exports.capitalConcFactor = capitalConcFactor;
function concBaseSlippagePrice(spotPrice, upperPrice, slippage) {
    const delta = Math.sqrt(upperPrice) - Math.sqrt(spotPrice);
    const lowerSqrt = Math.sqrt(upperPrice) - delta * (1 + slippage);
    return Math.pow(lowerSqrt, 2);
}
exports.concBaseSlippagePrice = concBaseSlippagePrice;
function concQuoteSlippagePrice(spotPrice, lowerPrice, slippage) {
    const delta = Math.sqrt(spotPrice) - Math.sqrt(lowerPrice);
    const upperSqrt = ((1 + slippage) * delta) + Math.sqrt(lowerPrice);
    return Math.pow(upperSqrt, 2);
}
exports.concQuoteSlippagePrice = concQuoteSlippagePrice;
/* Rounds a liquidity magnitude to a multiple that can be used inside the protocol. */
function roundForConcLiq(liq) {
    const CONC_LOTS_BITS = 11;
    return (0, _1.truncateRightBits)(liq, CONC_LOTS_BITS);
}
exports.roundForConcLiq = roundForConcLiq;
//# sourceMappingURL=liquidity.js.map