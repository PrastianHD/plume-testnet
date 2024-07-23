const { ethers } = require('ethers');
const { createWallet, getAddress } = require('../config/wallet');
const { provider, PRIVATE_KEYS } = require('../config/config');
const { log } = require('../utils/logger');
const fs = require('fs');
const path = require('path');

// Fungsi untuk mengambil data acak dari config/datarwa.json
function getRandomData() {
    const dataPath = path.join(__dirname, '../config/datarwa.json');
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8')).items;
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const abi = [
    "function createToken(string name, string symbol, string description, uint256 rwaType, string image) public"
];

const contractAddress = "0x485D972889Ee8fd0512403E32eE94dE5c7a5DC7b";

async function callCreateTokenForKey(PRIVATE_KEY) {
    try {
        const wallet = createWallet(PRIVATE_KEY, provider);
        const walletAddress = wallet.address;
        log('INFO', `Wallet address: ${walletAddress}`);
        const contract = new ethers.Contract(contractAddress, abi, wallet);

        const randomData = getRandomData();
        const name = randomData.name;
        const symbol = "ITEM";
        const description = randomData.description;
        const rwaType = randomData.rwaType;
        const image = randomData.image;

        try {
            const tx = await contract.createToken(name, symbol, description, rwaType, image);
            log('INFO', `Transaction sent: ${tx.hash}`);

            await tx.wait();
            log('SUCCESS', `Asset tokenized ${name} created.\n`);
        } catch (error) {
            log('ERROR', `Error calling createToken: ${error.message}`);
        }
    } catch (error) {
        log('ERROR', `Critical error: ${error.message}`);
    }
}

async function createToken() {
    while (true) {
        for (const PRIVATE_KEY of PRIVATE_KEYS) {
            await callCreateTokenForKey(PRIVATE_KEY);
        }
        log('INFO', 'Waiting for the next day...\n');
        await delay(60000 * 60 * 4); // 1 Day
    }
}

module.exports = createToken;