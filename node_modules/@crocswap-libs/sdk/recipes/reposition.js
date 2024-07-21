"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrocReposition = void 0;
const tslib_1 = require("tslib");
const longform_1 = require("../encoding/longform");
const swap_1 = require("../swap");
const utils_1 = require("../utils");
const liquidity_1 = require("../utils/liquidity");
const utils_2 = require("../utils");
const context_1 = require("../context");
class CrocReposition {
    constructor(pool, target, opts = {}) {
        this.pool = pool;
        this.burnRange = target.burn;
        this.mintRange = target.mint;
        this.liquidity = target.liquidity;
        this.spotPrice = this.pool.spotPrice();
        this.spotTick = this.pool.spotTick();
        this.impact = (opts === null || opts === void 0 ? void 0 : opts.impact) || DEFAULT_REBAL_SLIPPAGE;
    }
    rebal() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const directive = yield this.formatDirective();
            const cntx = yield this.pool.context;
            const path = cntx.chain.proxyPaths.long;
            yield (0, context_1.ensureChain)(cntx);
            const gasEst = yield cntx.dex.userCmd.estimateGas(path, directive.encodeBytes());
            return cntx.dex.userCmd(path, directive.encodeBytes(), { gasLimit: gasEst + utils_2.GAS_PADDING, chainId: cntx.chain.chainId });
        });
    }
    simStatic() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const directive = yield this.formatDirective();
            const path = (yield this.pool.context).chain.proxyPaths.long;
            return (yield this.pool.context).dex.userCmd.staticCall(path, directive.encodeBytes());
        });
    }
    balancePercent() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.mintRange === "ambient") {
                return 0.5; // Ambient positions are 50/50 balance
            }
            else {
                const baseQuoteBal = (0, liquidity_1.concDepositBalance)(yield this.spotPrice, (0, utils_1.tickToPrice)(this.mintRange[0]), (0, utils_1.tickToPrice)(this.mintRange[1]));
                return (yield this.isBaseOutOfRange()) ?
                    (1.0 - baseQuoteBal) : baseQuoteBal;
            }
        });
    }
    currentCollateral() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const tokenFn = (yield this.isBaseOutOfRange()) ? liquidity_1.baseTokenForConcLiq : liquidity_1.quoteTokenForConcLiq;
            return tokenFn(yield this.spotPrice, this.liquidity, (0, utils_1.tickToPrice)(this.burnRange[0]), (0, utils_1.tickToPrice)(this.burnRange[1]));
        });
    }
    convertCollateral() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const balance = yield this.swapFraction();
            const collat = yield this.currentCollateral();
            return collat * balance / BigInt(10000);
        });
    }
    postBalance() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const outside = this.mintInput().then(parseFloat);
            const inside = this.swapOutput().then(parseFloat);
            return (yield this.isBaseOutOfRange()) ?
                [yield outside, yield inside] :
                [yield inside, yield outside];
        });
    }
    mintInput() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const collat = (yield this.currentCollateral()) - (yield this.convertCollateral());
            const pool = this.pool;
            return (yield this.isBaseOutOfRange()) ?
                pool.baseToken.toDisplay(collat) :
                pool.quoteToken.toDisplay(collat);
        });
    }
    swapOutput() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const [sellToken, buyToken] = yield this.pivotTokens();
            const swap = new swap_1.CrocSwapPlan(sellToken, buyToken, yield this.convertCollateral(), false, this.pool.context, { slippage: this.impact });
            const impact = yield swap.calcImpact();
            return impact.buyQty;
        });
    }
    isBaseOutOfRange() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const spot = yield this.spotTick;
            if (spot >= this.burnRange[1]) {
                return true;
            }
            else if (spot < this.burnRange[0]) {
                return false;
            }
            else {
                throw new Error("Rebalance position not out of range");
            }
        });
    }
    pivotTokens() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (yield this.isBaseOutOfRange()) ?
                [this.pool.baseToken, this.pool.quoteToken] :
                [this.pool.quoteToken, this.pool.baseToken];
        });
    }
    formatDirective() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const [openToken, closeToken] = yield this.pivotTokens();
            const directive = new longform_1.OrderDirective(openToken.tokenAddr);
            directive.appendHop(closeToken.tokenAddr);
            const pool = directive.appendPool((yield this.pool.context).chain.poolIndex);
            directive.appendRangeBurn(this.burnRange[0], this.burnRange[1], this.liquidity);
            yield this.setupSwap(pool);
            directive.appendPool((yield this.pool.context).chain.poolIndex);
            if (this.mintRange === "ambient") {
                const mint = directive.appendAmbientMint(BigInt(0));
                mint.rollType = 5;
            }
            else {
                const mint = directive.appendRangeMint(this.mintRange[0], this.mintRange[1], BigInt(0));
                mint.rollType = 5;
            }
            directive.open.limitQty = BigInt(0);
            directive.hops[0].settlement.limitQty = BigInt(0);
            return directive;
        });
    }
    setupSwap(pool) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            pool.chain.swapDefer = true;
            pool.swap.rollType = 4;
            pool.swap.qty = yield this.swapFraction();
            const sellBase = yield this.isBaseOutOfRange();
            pool.swap.isBuy = sellBase;
            pool.swap.inBaseQty = sellBase;
            const priceMult = sellBase ? (1 + this.impact) : (1 - this.impact);
            pool.swap.limitPrice = (0, utils_1.encodeCrocPrice)((yield this.spotPrice) * priceMult);
        });
    }
    swapFraction() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const swapProp = (yield this.balancePercent()) + this.impact;
            return BigInt(Math.floor(Math.min(swapProp, 1.0) * 10000));
        });
    }
}
exports.CrocReposition = CrocReposition;
const DEFAULT_REBAL_SLIPPAGE = .02;
//# sourceMappingURL=reposition.js.map