"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const croc_1 = require("../croc");
const ethers_1 = require("ethers");
//const ETH = ethers.constants.ZeroAddress
//const DAI = "0xdc31Ee1784292379Fbb2964b3B9C4124D8F89C60"
// Scroll
//const USDC = "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4"
// Mainnet
//const USDC = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
// Sepolia
//const USDC = "0x60bBA138A74C5e7326885De5090700626950d509"
// Blast
const USDB = "0x4300000000000000000000000000000000000003";
// deepcode ignore HardcodedSecret: testnet dummy key
const KEY = process.env.WALLET_KEY || "0x7c5e2cfbba7b00ba95e5ed7cd80566021da709442e147ad3e08f23f5044a3d5a";
function demo() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const wallet = new ethers_1.ethers.Wallet(KEY);
        const croc = new croc_1.CrocEnv("blast", wallet);
        //let tx = croc.token(USDB).approve()
        //let tx = croc.tokenEth().deposit(0.01, wallet.address)
        //let tx = croc.token(USDB).deposit(100, wallet.address)
        //console.log(await tx)
        //console.log(await croc.approveBypassRouter())
        //console.log(await croc.token(USDC).approveRouter(100))
        //console.log((await croc.buy(USDC, 5).withEth().useRouter().swap()))
        /*console.log((await croc.sell(USDC, 0.01).forEth().useBypass().swap()))
        console.log((await croc.sellEth(0.00001).for(USDC).useBypass().swap()))
        console.log((await croc.buyEth(0.00001).with(USDC).useBypass().swap()))*/
        /*const types = ["uint128","uint128","uint128","uint64","uint64","int24","bool","bool","uint8","uint128","uint128",
            "uint8","uint16","uint8","uint16","uint8","uint8","uint8","bytes32","address"]
        console.log(abi.decode(types, log))*/
        //await croc.token(USDC).approve(0.001)
        //await croc.token(USDC).approveRouter()
        //await croc.token(USDC).approveBypassRouter()
        //console.log((await croc.sell(USDC, 7.5).forEth().useBypass().swap()))
        //console.log((await croc.sellEth(0).for(USDC).swap()))
        //console.log((await croc.buy(USDC, 1).withEth().useBypass().swap()))
        //console.log((await croc.buyEth(0).with(USDC).forceProxy().swap()))
        /*croc.token(DAI).deposit(1, wallet.address)
        croc.token(DAI).withdraw(0.25, wallet.address)
        croc.token(DAI).transfer(0.001, "0xd825D73CDD050ecbEBC0B3a8D9C5952d1F64722e")*/
        //croc.tokenEth().deposit(0.001, wallet.address)
        //croc.tokenEth().withdraw(0.0001, wallet.address)
        /*let tx = croc.tokenEth().transfer(0.0001, "0xd825D73CDD050ecbEBC0B3a8D9C5952d1F64722e")
    
        await (await tx).wait()
        console.log(await croc.token(DAI).balanceDisplay(wallet.address))
        console.log(await croc.token(DAI).balanceDisplay("0xd825D73CDD050ecbEBC0B3a8D9C5952d1F64722e"))
        console.log(await croc.tokenEth().balanceDisplay("0xd825D73CDD050ecbEBC0B3a8D9C5952d1F64722e"))
        console.log(await croc.token(DAI).walletDisplay(wallet.address))*/
        //let ko = new CrocKnockoutHandle(DAI, ZeroAddress, 0.001, -78464+512, croc.context)
        /*ko = new CrocKnockoutHandle(DAI, ZeroAddress, 0.001, -78464+1024, croc.context)
        //ko = new CrocKnockoutHandle(DAI, ZeroAddress, 0.001, -78464+2048, croc.context)
        //ko = new CrocKnockoutHandle(ZeroAddress, DAI, 0.01, -78464-2048, croc.context)
        //ko = new CrocKnockoutHandle(ZeroAddress, DAI, 0.01, -78464-1024, croc.context)
        await (await ko.mint()).wait()*/
        //let tx = croc.poolEth(DAI).burnAmbientLiq(BigInt(10).pow(7), [0.0001, 0.001])
        //let tx = croc.poolEth(DAI).mintRangeBase(0.0001, [-640000, 640000], [0.0001, 0.001])
        //let tx = croc.poolEth(DAI).mintRangeBase(1.0, [-100000, 0], [0.0001, 0.001])
        //let tx = croc.poolEth(DAI).burnRangeLiq(BigInt(10).pow(7), [-640000, 640000], [0.0001, 0.001])
        /*let tx = croc.poolEth(DAI).harvestRange([-640000, 640000], [0.0001, 0.001])
        await (await tx).wait()*/
        /*let ko = new CrocKnockoutHandle(DAI, ZeroAddress, 0.001, -73152, croc.context)
        await (await ko.mint()).wait()
        ko = new CrocKnockoutHandle(DAI, ZeroAddress, 0.001, -74432, croc.context)
        await (await ko.mint()).wait()
    
        croc.poolEth(DAI).spotTick().then(console.log)
        croc.poolEth(DAI).spotPrice().then(console.log)*/
        /*croc.poolEth(DAI).spotPrice().then(console.log);
        croc.pool(DAI, ZeroAddress).displayPrice().then(console.log);
        croc.pool(ZeroAddress, DAI).displayPrice().then(console.log);*/
        //await (await croc.pool(ZeroAddress, USDC).initPool(3000)).wait()
        /*croc.poolEth(USDC).spotPrice().then(console.log);
        croc.pool(USDC, ZeroAddress).displayPrice().then(console.log);
        croc.pool(ZeroAddress, USDC).displayPrice().then(console.log);
    
        croc.pool(ZeroAddress, USDC).mintAmbientQuote(100, [2000, 4000])*/
        //croc.poolEth(DAI).initPool()
        /*await croc.poolEth(DAI).mintAmbientQuote(50, [0.0005, 0.000625])
        await croc.poolEthQuote(DAI).mintAmbientBase(50, [1600, 1700])*/
        //await croc.poolEthQuote(DAI).mintRangeBase(50, [-80000, -64000], [1600, 1700])
        /*await croc.poolEthQuote(DAI).mintRangeBase(5, [-80000, -64000], [1600, 1700], { surplus: [true, false]})
        await croc.poolEthQuote(DAI).mintRangeBase(5, [-80000, -64000], [1600, 1700], { surplus: [false, true]})*/
        //await croc.poolEth(DAI).mintAmbientBase(0.0001, [0.0001, 0.001])
        //await croc.poolEth(DAI).mintAmbientQuote(50, [0.0001, 0.001])
        //await croc.poolEth(DAI).mintRangeBase(0.03, [-640000, 640000], [0.0001, 0.001])
        //await croc.poolEth(DAI).mintRangeQuote(50, [-640000, 640000], [0.0001, 0.001])
        //await croc.poolEth(DAI).burnAmbientAll([0.0001, 0.001])
        //await croc.sellEth(0.0001).for(DAI).swap()
        //await croc.sell(DAI, 0.0001).forEth().swap()
        /*await croc.buy(DAI, 0.0001).withEth().swap()*/
        //await croc.buyEth(0.01).with(DAI).swap()
        //await croc.sellEth(0.01).for(DAI, { slippage: 0.1}).swap()
        //console.log(await croc.sellEth(20).for(DAI, { slippage: .05}).calcImpact())
        // Pay ETH from wallet, receive DAI to exchange balance
        /*await croc.sellEth(0.01).for(DAI).swap({surplus: [false, true]})
    
        // Pay ETH from exchange balance, receive DAI to wallet
        await croc.sellEth(0.01).for(DAI).swap({surplus: [false, true]})
    
        // Pay DAI from exchange balance, receive ETH to wallet
        await croc.buyEth(0.01).with(DAI).swap({surplus: [true, false]})
    
        // Pay DAI from wallet, receive ETH to exchange balance
        await croc.buyEth(0.01).with(DAI).swap({surplus: [false, true]})
    
        // Pay ETH to receive DAI, both to/from exchange balance
        await croc.buy(DAI, 100).withEth().swap({surplus: true})
    
        // Pay ETH to receive DAI, both to/from wallet
        await croc.buy(DAI, 10).withEth().swap({surplus: false})
    
        // Pay ETH to receive DAI, both to/from wallet
        await croc.buy(DAI, 10).withEth().swap()*/
        // Pays DAI to wallet and ETH to exchange balance
        //await croc.pool(DAI, ETH).burnAmbientLiq(BigInt(10).pow(7), [0.0001, 0.001], {surplus: [false, true]})
        // Pays DAI to exchange balance and ETH to wallet
        /*await croc.pool(DAI, ETH).burnAmbientLiq(BigInt(10).pow(7), [0.0001, 0.001], {surplus: [true, false]})
    
        // Pays ETH to exchange balance and DAI to wallet
        await croc.pool(ETH, DAI).burnAmbientLiq(BigInt(10).pow(7), [1000, 10000], {surplus: [true, false]})
    
        // Pays ETH to wallet and DAI to exchange balance
        await croc.pool(ETH, DAI).burnAmbientLiq(BigInt(10).pow(7), [1000, 10000], {surplus: [false, true]})*/
        // Mint new limit order for $25. Pay from exchange balance
        /*croc.sell(DAI, 200).atLimit(ETH, -64000).burn({surplus: true})*/
        // Burn $10 worth of existing limit order. Receive to wallet
        //croc.sell(DAI, 10).atLimit(ETH, -64000).mint({surplus: false})
        // Burn 1 billion units of concentrated liquidity for the limit order
        //croc.sell(DAI, 2).atLimit(ETH, -64000).burnLiq(BigInt(1000000000))
        /*console.log(await (await croc.token(DAI).balance(wallet.address)).toString())
        console.log(await (await croc.tokenEth().balance(wallet.address)).toString())
    
        ///console.log(baseTokenForQuoteConc(100, 1600, 1700))
    
        //croc.buy(DAI, 10).atLimit(ETH, -80000).mint({surplus: false})
    
        let plan = croc.buy(USDC, 1).with(ETH)
        console.log((await plan.impact))
        console.log((await plan.calcSlipQty()).toString())*/
        /*console.log(await croc.poolEthQuote(DAI).spotTick())
        console.log(await croc.poolEthQuote(DAI).displayPrice())*/
        //console.log(await croc.poolEth(DAI).mintAmbientQuote(50, [0.0001, 0.001]))
        //console.log(await croc.poolEthQuote(DAI).mintRangeBase(50, [-64000 - 3200, -64000,], [0.00000001, 100000.0]))
        //console.log(await croc.poolEthQuote(DAI).mintRangeBase(0.001, [-80000 - 3200, -80000,], [0.00000001, 100000.0]))
        //console.log(await croc.poolEthQuote(USDC).mintRangeBase(50, [208000 - 3200, 208000,], [0.00000001, 100000.0]))
        //console.log(await croc.poolEthQuote(DAI).mintRangeBase(0.001, [3180*64, 3182*64], [1600, 1700]))
        /*const pool = croc.poolEthQuote(DAI)
        console.log(await pool.displayToPinTick(1500))
        console.log(await pool.displayToPinTick(1600))
    
    
        let rebal = new CrocReposition(pool, { burn: [-64000 - 3200, -64000], mint: [-73792, -73088],
            liquidity: BigInt(10).pow(14) })
    
        /*console.log((await rebal.currentCollateral()).toString())
        console.log((await rebal.balancePercent()))*/
        //console.log((await (await rebal.mintInput())))
        //console.log((await (await rebal.swapOutput())))
        //console.log(await rebal.rebal())
        /*const burnRange: [number, number] = [-64000 - 3200, -64000]
        const mintRange: [number, number] = [-76032, -72000]
        console.log(await rebal.rebal(burnRange, mintRange))*/
        //console.log(await croc.poolEthQuote(DAI).mintRangeBase(5, [-72000 - 3200, -64000,], [0.00000001, 100000.0]))
        //console.log(await croc.poolEthQuote(DAI).mintRangeBase(5, [-76032, -72000,], [1600, 1700]))
        //console.log(await croc.poolEth(DAI).mintRangeQuote(50, [-64000 - 3200, -64000,], [0.00000001, 100000.0]))
        //console.log(await croc.poolEthQuote(DAI).mintRangeBase(50, [-64000 - 3200, -64000,], [0.00000001, 100000.0]))
        //console.log(capitalConcFactor(1000, 250, 4000))*/
        /*const pool = croc.poolEthQuote(DAI)
        /*console.log(await pool.displayToPinTick(1378.62))
        console.log(await pool.displayToPinTick(1691.94))*/
        /*const pool = croc.poolEthQuote(USDC)
        console.log(await pool.spotPrice())
    
        console.log(await pool.cumAmbientGrowth())
    
        const posView = new CrocPositionView(pool, "0x9ee66F4ac79395479d6A8Bb552AF6eC3F27049CC")
    
        console.log(await posView.queryRangePos(199308, 201312))*/
        //console.log(await croc.poolEthQuote(USDC).displayPrice())
        //croc.sell(DAI, 200).atLimit(ETH, -64000).burn({surplus: true})
        /*console.log((await croc.tokenEth().balance("benwolski.eth")).toString())
        console.log(await croc.tokenEth().balanceDisplay("benwolski.eth"))*/
        croc.slotReader().isHotPathOpen().then(console.log);
        console.log(yield croc.slotReader().proxyContract(1));
        console.log(yield croc.slotReader().proxyContract(131));
        console.log(yield croc.poolEthQuote(USDB).curveState());
    });
}
demo();
//# sourceMappingURL=demo.js.map