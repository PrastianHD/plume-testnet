require('dotenv').config();
const readline = require('readline');
const readlineSync = require('readline-sync');
const chalk = require('chalk');
const { printName } = require('./utils/name');
const { checkIn, faucetETH, faucetGOON, swapTokens, stake } = require('./src/main');

// Function to prompt user for input
function promptUser(question) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(chalk.blueBright(question), (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Function to input password
function inputPassword() {
    const expectedPassword = 'PlumesGOON';
    const password = readlineSync.question('Enter password: ', {
        hideEchoBack: true,
        mask: ''
    });

    if (password !== expectedPassword) {
        console.error('Incorrect password. Access denied.');
        process.exit(1);
    }
}

// Main function
async function main() {
    inputPassword();
    printName();

    // Display menu and ask user to choose a script
    console.log(chalk.yellow('Available Scripts:'));
    console.log('1. CheckIn');
    console.log('2. Claim Faucet ETH');
    console.log('3. Claim Faucet GOON');
    console.log('4. Swap GOON/goonUSD');
    console.log('5. Stake goonUSD');
    console.log('0. Exit Program');

    const scriptChoice = await promptUser('\nChoose the script to run: ');

    if (scriptChoice === '1') {
        await checkIn();
    } else if (scriptChoice === '2') {
        await faucetETH();
    } else if (scriptChoice === '3') {
        await faucetGOON();
    } else if (scriptChoice === '4') {
        await swapTokens();
    } else if (scriptChoice === '5') {
        await stake();
    } else if (scriptChoice === '0') {
        console.log(chalk.green('Exiting program. Goodbye!'));
        process.exit(0);
    } else {
        console.log(chalk.red('Invalid choice. Please restart and choose 1 - 5.'));
    }
}

main().catch(console.error);