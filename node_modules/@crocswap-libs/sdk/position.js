"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrocPositionView = void 0;
const tslib_1 = require("tslib");
const tokens_1 = require("./tokens");
class CrocPositionView {
    constructor(base, quote, owner, context) {
        [this.baseToken, this.quoteToken] =
            (0, tokens_1.sortBaseQuoteViews)(base, quote);
        this.owner = owner;
        this.context = context;
    }
    queryRangePos(lowerTick, upperTick, block) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let blockArg = toCallArg(block);
            let context = yield this.context;
            return context.query.queryRangePosition(this.owner, this.baseToken.tokenAddr, this.quoteToken.tokenAddr, context.chain.poolIndex, lowerTick, upperTick, blockArg);
        });
    }
    queryAmbient(block) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let blockArg = toCallArg(block);
            let context = yield this.context;
            return context.query.queryAmbientPosition(this.owner, this.baseToken.tokenAddr, this.quoteToken.tokenAddr, context.chain.poolIndex, blockArg);
        });
    }
    queryAmbientPos(block) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let blockArg = toCallArg(block);
            let context = yield this.context;
            return context.query.queryAmbientTokens(this.owner, this.baseToken.tokenAddr, this.quoteToken.tokenAddr, context.chain.poolIndex, blockArg);
        });
    }
    queryKnockoutLivePos(isBid, lowerTick, upperTick, block) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let blockArg = toCallArg(block);
            let context = yield this.context;
            let pivotTick = isBid ? lowerTick : upperTick;
            const pivotTime = (yield context.query.queryKnockoutPivot(this.baseToken.tokenAddr, this.quoteToken.tokenAddr, context.chain.poolIndex, isBid, pivotTick, blockArg)).pivot;
            return context.query.queryKnockoutTokens(this.owner, this.baseToken.tokenAddr, this.quoteToken.tokenAddr, context.chain.poolIndex, pivotTime, isBid, lowerTick, upperTick, blockArg);
        });
    }
    queryRewards(lowerTick, upperTick, block) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let blockArg = toCallArg(block);
            let context = yield this.context;
            return (yield context.query.queryConcRewards(this.owner, this.baseToken.tokenAddr, this.quoteToken.tokenAddr, context.chain.poolIndex, lowerTick, upperTick, blockArg));
        });
    }
}
exports.CrocPositionView = CrocPositionView;
function toCallArg(block) {
    return block ? { blockTag: block } : {};
}
//# sourceMappingURL=position.js.map