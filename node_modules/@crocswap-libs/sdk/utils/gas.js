"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estimateScrollL1Gas = exports.getUnsignedRawTransaction = exports.getRawTransaction = exports.GAS_PADDING = void 0;
const tslib_1 = require("tslib");
const ethers_1 = require("ethers");
const L1GasPriceOracle_1 = require("../abis/external/L1GasPriceOracle");
// Applied to all gas estimates.
exports.GAS_PADDING = BigInt(30000);
/**
 * Compute the raw transaction data for a given transaction.
 *
 * ref: https://docs.ethers.org/v5/cookbook/transactions/#cookbook--compute-raw-transaction
 */
function getRawTransaction(tx) {
    // Serialize the signed transaction
    const raw = ethers_1.Transaction.from(tx).serialized;
    // Double check things went well
    if ((0, ethers_1.keccak256)(raw) !== tx.hash) {
        throw new Error("serializing failed!");
    }
    return raw;
}
exports.getRawTransaction = getRawTransaction;
/**
 * Compute the raw transaction data for a given transaction without the signature.
 *
 * ref: https://docs.ethers.org/v5/cookbook/transactions/#cookbook--compute-raw-transaction
 */
function getUnsignedRawTransaction(tx) {
    // Serialize the signed transaction
    const raw = ethers_1.Transaction.from(tx).unsignedSerialized;
    return raw;
}
exports.getUnsignedRawTransaction = getUnsignedRawTransaction;
/**
 * Estimates the additional L1 gas on Scroll for any data which is a RLP-encoded transaction with signature.
 */
function estimateScrollL1Gas(crocEnv, rawTransaction) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const crocContext = yield crocEnv.context;
        const chainId = crocContext.chain.chainId;
        const isScroll = chainId === "0x82750" || chainId === "0x8274f";
        if (!isScroll) {
            return BigInt(0);
        }
        const L1_GAS_PRICE_ORACLE_ADDRESS = "0x5300000000000000000000000000000000000002";
        const l1GasPriceOracle = new ethers_1.Contract(L1_GAS_PRICE_ORACLE_ADDRESS, L1GasPriceOracle_1.L1_GAS_PRICE_ORACLE_ABI, crocContext.provider);
        // function getL1Fee(bytes memory _data) external view override returns (uint256);
        const l1Gas = yield l1GasPriceOracle.getL1Fee(rawTransaction);
        return l1Gas;
    });
}
exports.estimateScrollL1Gas = estimateScrollL1Gas;
//# sourceMappingURL=gas.js.map