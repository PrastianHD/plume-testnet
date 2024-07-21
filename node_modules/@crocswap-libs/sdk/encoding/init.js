"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolInitEncoder = void 0;
const ethers_1 = require("ethers");
const price_1 = require("../utils/price");
class PoolInitEncoder {
    constructor(baseToken, quoteToken, poolIdx) {
        this.baseToken = baseToken;
        this.quoteToken = quoteToken;
        this.poolIdx = poolIdx;
        this.abiCoder = new ethers_1.ethers.AbiCoder();
    }
    encodeInitialize(initPrice) {
        const crocPrice = (0, price_1.encodeCrocPrice)(initPrice);
        const POOL_INIT_TYPES = ["uint8", "address", "address", "uint256", "uint128"];
        return this.abiCoder.encode(POOL_INIT_TYPES, [71, this.baseToken, this.quoteToken, this.poolIdx, crocPrice]);
    }
}
exports.PoolInitEncoder = PoolInitEncoder;
//# sourceMappingURL=init.js.map