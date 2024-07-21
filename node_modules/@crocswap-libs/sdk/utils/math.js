"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromFixedGrowth = exports.truncateRightBits = exports.floatToBigInt = exports.bigIntToFloat = exports.toFixedNumber = void 0;
function toFixedNumber(num, digits, base) {
    const pow = Math.pow(base || 10, digits);
    return Math.round(num * pow) / pow;
}
exports.toFixedNumber = toFixedNumber;
function bigIntToFloat(val) {
    return val < BigInt(Number.MAX_SAFE_INTEGER - 1)
        ? Number(val)
        : parseFloat(val.toString());
}
exports.bigIntToFloat = bigIntToFloat;
function floatToBigInt(x) {
    let floatPrice = x;
    let scale = 0;
    const PRECISION_BITS = 16;
    while (floatPrice > Number.MAX_SAFE_INTEGER) {
        floatPrice = floatPrice / (2 ** PRECISION_BITS);
        scale = scale + PRECISION_BITS;
    }
    const pinPrice = Math.round(floatPrice);
    const mult = BigInt(2) ** BigInt(scale);
    return BigInt(pinPrice) * mult;
}
exports.floatToBigInt = floatToBigInt;
function truncateRightBits(x, bits) {
    const mult = BigInt(2) ** BigInt(bits);
    return x / mult * mult;
}
exports.truncateRightBits = truncateRightBits;
function fromFixedGrowth(x) {
    return 1 + bigIntToFloat(x) / (2 ** 48);
}
exports.fromFixedGrowth = fromFixedGrowth;
//# sourceMappingURL=math.js.map