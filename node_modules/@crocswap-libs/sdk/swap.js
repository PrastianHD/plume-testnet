"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrocSwapPlan = void 0;
const tslib_1 = require("tslib");
const ethers_1 = require("ethers");
const context_1 = require("./context");
const pool_1 = require("./pool");
const utils_1 = require("./utils");
const tokens_1 = require("./tokens");
const flags_1 = require("./encoding/flags");
const constants_1 = require("./constants");
const slots_1 = require("./slots");
const utils_2 = require("./utils");
class CrocSwapPlan {
    constructor(sellToken, buyToken, qty, qtyIsBuy, context, opts = DFLT_SWAP_ARGS) {
        [this.baseToken, this.quoteToken] = (0, tokens_1.sortBaseQuoteViews)(sellToken, buyToken);
        this.sellBase = (this.baseToken === sellToken);
        this.qtyInBase = (this.sellBase !== qtyIsBuy);
        this.poolView = new pool_1.CrocPoolView(this.baseToken, this.quoteToken, context);
        const tokenView = this.qtyInBase ? this.baseToken : this.quoteToken;
        this.qty = tokenView.normQty(qty);
        this.slippage = opts.slippage || DFLT_SWAP_ARGS.slippage;
        this.priceSlippage = this.slippage * PRICE_SLIP_MULT;
        this.context = context;
        this.impact = this.calcImpact();
        this.callType = "";
    }
    swap() {
        return tslib_1.__awaiter(this, arguments, void 0, function* (args = {}) {
            yield (0, context_1.ensureChain)(yield this.context);
            const gasEst = yield this.estimateGas(args);
            const callArgs = Object.assign({ gasEst: gasEst, chainId: (yield this.context).chain.chainId }, args);
            return this.sendTx(Object.assign({}, args, callArgs));
        });
    }
    simulate() {
        return tslib_1.__awaiter(this, arguments, void 0, function* (args = {}) {
            const gasEst = yield this.estimateGas(args);
            const callArgs = Object.assign({ gasEst: gasEst }, args);
            return this.callStatic(Object.assign({}, args, callArgs));
        });
    }
    sendTx(args) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.hotPathCall(yield this.txBase(), 'send', args);
        });
    }
    callStatic(args) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.hotPathCall(yield this.txBase(), 'staticCall', args);
        });
    }
    estimateGas() {
        return tslib_1.__awaiter(this, arguments, void 0, function* (args = {}) {
            return this.hotPathCall(yield this.txBase(), 'estimateGas', args);
        });
    }
    txBase() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.callType === "router") {
                let router = (yield this.context).router;
                if (!router) {
                    throw new Error("Router not available on network");
                }
                return router;
            }
            else if (this.callType === "bypass" && (yield this.context).routerBypass) {
                let router = (yield this.context).routerBypass;
                if (!router) {
                    throw new Error("Router not available on network");
                }
                return router || (yield this.context).dex;
            }
            else {
                return (yield this.context).dex;
            }
        });
    }
    hotPathCall(contract, callType, args) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const reader = new slots_1.CrocSlotReader(this.context);
            if (this.callType === "router") {
                return this.swapCall(contract, callType, args);
            }
            else if (this.callType === "bypass") {
                return this.swapCall(contract, callType, args);
            }
            else if (this.callType === "proxy" || (yield this.context).chain.proxyPaths.dfltColdSwap) {
                return this.userCmdCall(contract, callType, args);
            }
            else {
                return (yield reader.isHotPathOpen()) ?
                    this.swapCall(contract, callType, args) : this.userCmdCall(contract, callType, args);
            }
        });
    }
    swapCall(contract, callType, args) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const TIP = 0;
            const surplusFlags = this.maskSurplusArgs(args);
            return contract.swap[callType](this.baseToken.tokenAddr, this.quoteToken.tokenAddr, (yield this.context).chain.poolIndex, this.sellBase, this.qtyInBase, yield this.qty, TIP, yield this.calcLimitPrice(), yield this.calcSlipQty(), surplusFlags, yield this.buildTxArgs(surplusFlags, args.gasEst));
        });
    }
    userCmdCall(contract, callType, args) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const TIP = 0;
            const surplusFlags = this.maskSurplusArgs(args);
            const HOT_PROXY_IDX = 1;
            let abi = new ethers_1.ethers.AbiCoder();
            let cmd = abi.encode(["address", "address", "uint256", "bool", "bool", "uint128", "uint16", "uint128", "uint128", "uint8"], [this.baseToken.tokenAddr, this.quoteToken.tokenAddr, (yield this.context).chain.poolIndex,
                this.sellBase, this.qtyInBase, yield this.qty, TIP,
                yield this.calcLimitPrice(), yield this.calcSlipQty(), surplusFlags]);
            return contract.userCmd[callType](HOT_PROXY_IDX, cmd, yield this.buildTxArgs(surplusFlags, args.gasEst));
        });
    }
    /**
     * Utility function to generate a "signed" raw transaction for a swap, used for L1 gas estimation on L2's like Scroll.
     * Extra 0xFF...F is appended to the unsigned raw transaction to simulate the signature and other missing fields.
     *
     * Note: This function is only intended for L1 gas estimation, and does not generate valid signed transactions.
     */
    getFauxRawTx() {
        return tslib_1.__awaiter(this, arguments, void 0, function* (args = {}) {
            const TIP = 0;
            const surplusFlags = this.maskSurplusArgs(args);
            const unsignedTx = yield (yield this.context).dex.swap.populateTransaction(this.baseToken.tokenAddr, this.quoteToken.tokenAddr, (yield this.context).chain.poolIndex, this.sellBase, this.qtyInBase, yield this.qty, TIP, yield this.calcLimitPrice(), yield this.calcSlipQty(), surplusFlags, yield this.buildTxArgs(surplusFlags));
            // append 160 'f's to the end of the raw transaction to simulate the signature and other missing fields
            return (0, utils_1.getUnsignedRawTransaction)(unsignedTx) + "f".repeat(160);
        });
    }
    calcImpact() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const TIP = 0;
            const limitPrice = this.sellBase ? constants_1.MAX_SQRT_PRICE : constants_1.MIN_SQRT_PRICE;
            const impact = yield (yield this.context).slipQuery.calcImpact.staticCall(this.baseToken.tokenAddr, this.quoteToken.tokenAddr, (yield this.context).chain.poolIndex, this.sellBase, this.qtyInBase, yield this.qty, TIP, limitPrice);
            const baseQty = this.baseToken.toDisplay(impact[0] < 0 ? -impact[0] : impact[0]);
            const quoteQty = this.quoteToken.toDisplay(impact[1] < 0 ? -impact[1] : impact[1]);
            const spotPrice = (0, utils_1.decodeCrocPrice)(impact[2]);
            const startPrice = this.poolView.displayPrice();
            const finalPrice = this.poolView.toDisplayPrice(spotPrice);
            const ret = {
                sellQty: this.sellBase ? yield baseQty : yield quoteQty,
                buyQty: this.sellBase ? yield quoteQty : yield baseQty,
                finalPrice: yield finalPrice,
                percentChange: ((yield finalPrice) - (yield startPrice)) / (yield startPrice)
            };
            return ret;
        });
    }
    maskSurplusArgs(args) {
        return (0, flags_1.encodeSurplusArg)(this.maskSurplusFlags(args));
    }
    maskSurplusFlags(args) {
        if (!args || !args.settlement) {
            return [false, false];
        }
        else if (typeof args.settlement === "boolean") {
            return [args.settlement, args.settlement];
        }
        else {
            return this.sellBase ?
                [args.settlement.sellDexSurplus, args.settlement.buyDexSurplus] :
                [args.settlement.buyDexSurplus, args.settlement.sellDexSurplus];
        }
    }
    buildTxArgs(surplusArg, gasEst) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const txArgs = yield this.attachEthMsg(surplusArg);
            if (gasEst) {
                Object.assign(txArgs, { gasLimit: gasEst + utils_2.GAS_PADDING });
            }
            return txArgs;
        });
    }
    attachEthMsg(surplusEncoded) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // Only need msg.val if one token is native ETH (will always be base side)
            if (!this.sellBase || this.baseToken.tokenAddr !== ethers_1.ZeroAddress) {
                return {};
            }
            // Calculate the maximum amount of ETH we'll need. If on the floating side
            // account for potential slippage. (Contract will refund unused ETH)
            const val = this.qtyInBase ? this.qty : this.calcSlipQty();
            if ((0, flags_1.decodeSurplusFlag)(surplusEncoded)[0]) {
                // If using surplus calculate the amount of ETH not covered by the surplus
                // collateral.
                const needed = new tokens_1.CrocEthView(this.context).msgValOverSurplus(yield val);
                return { value: yield needed };
            }
            else {
                // Othwerise we need to send the entire balance in msg.val
                return { value: yield val };
            }
        });
    }
    calcSlipQty() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const qtyIsBuy = (this.sellBase === this.qtyInBase);
            const slipQty = !qtyIsBuy ?
                parseFloat((yield this.impact).sellQty) * (1 + this.slippage) :
                parseFloat((yield this.impact).buyQty) * (1 - this.slippage);
            return !this.qtyInBase ?
                this.baseToken.roundQty(slipQty) :
                this.quoteToken.roundQty(slipQty);
        });
    }
    calcLimitPrice() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.sellBase ? constants_1.MAX_SQRT_PRICE : constants_1.MIN_SQRT_PRICE;
        });
    }
    forceProxy() {
        this.callType = "proxy";
        return this;
    }
    useRouter() {
        this.callType = "router";
        return this;
    }
    useBypass() {
        this.callType = "bypass";
        return this;
    }
}
exports.CrocSwapPlan = CrocSwapPlan;
// Price slippage limit multiplies normal slippage tolerance by amount that should
// be reasonable (300%)
const PRICE_SLIP_MULT = 3.0;
// Default slippage is set to 1%. User should evaluate this carefully for low liquidity
// pools of when swapping large amounts.
const DFLT_SWAP_ARGS = {
    slippage: 0.01
};
//# sourceMappingURL=swap.js.map