const chalk = require('chalk');

function log(status, message) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const timestamp = new Intl.DateTimeFormat('en-GB', options).format(new Date());
    switch (status) {
        case 'SUCCESS':
            console.log(`${timestamp} | ${chalk.greenBright(status)}  | ${chalk.greenBright(message)}`);
            break;
        case 'ERROR':
            console.log(`${timestamp} | ${chalk.redBright(status)}  | ${chalk.redBright(message)}`);
            break;
        case 'INFO':
            console.log(`${timestamp} | ${chalk.blueBright(status)}   | ${chalk.blueBright(message)}`);
            break;
        case 'DEBUG':
            console.log(`${timestamp} | ${chalk.yellowBright(status)}  | ${chalk.yellowBright(message)}`);
            break;
        default:
            console.log(`${timestamp} | ${status}  | ${message}`);
            break;
    }
}

module.exports = { log };
