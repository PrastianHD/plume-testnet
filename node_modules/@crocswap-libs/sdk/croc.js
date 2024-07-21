"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrocEnv = void 0;
const tslib_1 = require("tslib");
const context_1 = require("./context");
const pool_1 = require("./pool");
const ethers_1 = require("ethers");
const tokens_1 = require("./tokens");
const swap_1 = require("./swap");
const knockout_1 = require("./knockout");
const position_1 = require("./position");
const slots_1 = require("./slots");
/* This is the main entry point for the Croc SDK. It provides a high-level interface
 * for interacting with CrocSwap smart contracts in an ergonomic way. */
class CrocEnv {
    constructor(conn, signer) {
        this.context = (0, context_1.connectCroc)(conn, signer);
        this.tokens = new TokenRepo(this.context);
    }
    /* Generates a prefix object for a swap with a fixed buy quantity.
     * Example of generating a swap plan for buying 100 USDC by swapping DAI:
     *    crocEnv.buy(USDC, 100).with(DAI)
     *
     * @param token The address of the token to buy.
     * @param qty The fixed quantity of the token to buy. */
    buy(token, qty) {
        return new BuyPrefix(token, qty, this.tokens, this.context);
    }
    /* Generates a prefix object for a swap with a fixed buy quantity of native ETH.
     * Example of generating a swap plan for buying 100 USDC by swapping DAI:
     *    crocEnv.buyEth(100).with(DAI)
     *
     * @param qty The fixed quantity of native ETH to buy. */
    buyEth(qty) {
        return new BuyPrefix(ethers_1.ZeroAddress, qty, this.tokens, this.context);
    }
    /* Generates a prefix object for a swap with a fixed sell quantity.
     * Example of generating a swap plan for selling 100 USDC to swap into DAI:
     *    crocEnv.sell(USDC, 100).for(DAI)
     *
     * @param token The address of the token to sell.
     * @param qty The fixed quantity of the token to sell. */
    sell(token, qty) {
        return new SellPrefix(token, qty, this.tokens, this.context);
    }
    /* Generates a prefix object for a swap with a fixed sell quantity of native ETH.
     * Example of generating a swap plan for selling 100 native ETH to swap into DAI:
     *    crocEnv.sellEth(100).for(DAI)
     *
     * @param qty The fixed quantity of native ETH to sell. */
    sellEth(qty) {
        return new SellPrefix(ethers_1.ZeroAddress, qty, this.tokens, this.context);
    }
    /* Returns a view of the canonical pool for the underlying token pair. For example the
     * below would return pool view for WBTC/USDC with WBTC as the quote side token:
     *        crocEnv.pool(WBTC, USDC)
     *
     * @param tokenQuote The address of the token to use as the quote token in the
     *                   view. Note the quote or base side only matters for display price
     *                   purposes.
     * @param tokenBase The address of the token to use as the base token in the view. */
    pool(tokenQuote, tokenBase) {
        const viewA = this.tokens.materialize(tokenQuote);
        const viewB = this.tokens.materialize(tokenBase);
        return new pool_1.CrocPoolView(viewA, viewB, this.context);
    }
    /* Returns a view of the canonical pool for the token pair against native ETH. For example
     * the below woudl return a pool view for MKR/ETH with MKR priced in ETH for display purposes
     *       crocEnv.poolEth(MKR) */
    poolEth(token) {
        return this.pool(token, ethers_1.ZeroAddress);
    }
    /* Returns a view of the canonical pool for the token pair against native ETH, but ETH is
     * priced in terms of the token. Usually the convention when ETH is paired against stablecoins
     * or paired against Bitcoin. For example the below would return a pool view for ETH/USDC
     *       crocEnv.poolEthQuote(USDC) */
    poolEthQuote(token) {
        return this.pool(ethers_1.ZeroAddress, token);
    }
    /* Returns a position view for a single user on the canonical pool for a single pair. */
    positions(tokenQuote, tokenBase, owner) {
        return new position_1.CrocPositionView(this.tokens.materialize(tokenQuote), this.tokens.materialize(tokenBase), owner, this.context);
    }
    /* Returns a tokenView for a single token
     * @param token The address of the specifc token. */
    token(token) {
        return this.tokens.materialize(token);
    }
    /* Returns a tokenView for native ETH. */
    tokenEth() {
        return this.tokens.materialize(ethers_1.ZeroAddress);
    }
    approveBypassRouter() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.tokenEth().approveBypassRouter();
        });
    }
    slotReader() {
        return new slots_1.CrocSlotReader(this.context);
    }
}
exports.CrocEnv = CrocEnv;
class BuyPrefix {
    constructor(token, qty, repo, context) {
        this.token = token;
        this.qty = qty;
        this.context = context;
        this.repo = repo;
    }
    with(token, args) {
        return new swap_1.CrocSwapPlan(this.repo.materialize(token), this.repo.materialize(this.token), this.qty, true, this.context, args);
    }
    withEth(args) {
        return this.with(ethers_1.ZeroAddress, args);
    }
    atLimit(token, tick) {
        return new knockout_1.CrocKnockoutHandle(this.repo.materialize(token), this.repo.materialize(this.token), this.qty, false, tick, this.context);
    }
}
class SellPrefix {
    constructor(token, qty, repo, context) {
        this.token = token;
        this.qty = qty;
        this.context = context;
        this.repo = repo;
    }
    for(token, args) {
        return new swap_1.CrocSwapPlan(this.repo.materialize(this.token), this.repo.materialize(token), this.qty, false, this.context, args);
    }
    forEth(args) {
        return this.for(ethers_1.ZeroAddress, args);
    }
    atLimit(token, tick) {
        return new knockout_1.CrocKnockoutHandle(this.repo.materialize(this.token), this.repo.materialize(token), this.qty, true, tick, this.context);
    }
}
/* Use this to cache the construction of CrocTokenView objects across CrocEnv lifetime.
 * Because token view construction makes on-chain calls to get token metadata, doing this
 * drastically reduces the number of RPC calls. */
class TokenRepo {
    constructor(context) {
        this.tokenViews = new Map();
        this.context = context;
    }
    /* Either generates or loads a previously cached token view object.
     * @param tokenAddr The Ethereum address of the token contract. */
    materialize(tokenAddr) {
        let tokenView = this.tokenViews.get(tokenAddr);
        if (!tokenView) {
            tokenView = new tokens_1.CrocTokenView(this.context, tokenAddr);
            this.tokenViews.set(tokenAddr, tokenView);
        }
        return tokenView;
    }
}
//# sourceMappingURL=croc.js.map