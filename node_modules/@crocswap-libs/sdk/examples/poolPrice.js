"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mainnetTokens_1 = require("../constants/mainnetTokens");
const croc_1 = require("../croc");
function demo() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const croc = new croc_1.CrocEnv("mainnet");
        const spotPrice = yield croc.pool(mainnetTokens_1.ETH, mainnetTokens_1.USDC).spotPrice();
        console.log(`ETH/USDC Spot Price: ${spotPrice.toString()}`);
        const displayPrice = yield croc.poolEthQuote(mainnetTokens_1.USDC).displayPrice();
        console.log(`ETH/USDC Price: ${displayPrice}`);
        const invDispPrice = yield croc.poolEth(mainnetTokens_1.USDC).displayPrice();
        console.log(`USDC/ETH Price: ${invDispPrice}`);
    });
}
demo();
//# sourceMappingURL=poolPrice.js.map