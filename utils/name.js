// name.js
const chalk = require('chalk');

function printName() {
    console.log(chalk.blueBright(`
    +==============================================================+                                 
    |                  ${chalk.yellowBright('Bot All In One Plume Testnet')}                |
    |                   ${chalk.magentaBright('Author: Prastian Hidayat')}                   |
    +==============================================================+
    `));
}

module.exports = { printName };