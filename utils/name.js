// name.js
const chalk = require('chalk')

function printName() {
    console.log(chalk.blueBright(`
    +=================================================+                                 
    =           ${chalk.yellowBright('------- PLUME TESTNET -------')}         =
    =   ${chalk.greenBright('Feature: ')}                                     =    
    =   ${chalk.greenBright('Menu[1] CheckIn Daily')}                         =
    =   ${chalk.greenBright('Menu[2] Claim Faucet ETH Every 10 Minutes')}     =
    =   ${chalk.greenBright('Menu[3] Claim Faucet GOON Every 2 Hours')}       =
    =   ${chalk.greenBright('Menu[4] Swap GOON/goonUSD ')}                    =
    =   ${chalk.greenBright('Menu[5] Stake goonUSD in Nest Staking ')}        =
    =   ${chalk.magentaBright('Author: Prastian Hidayat')}                      =
    =   ${chalk.magentaBright('Github: https://github.com/PrastianHD')}         =
    +=================================================+
    `));
}
module.exports = { printName };
