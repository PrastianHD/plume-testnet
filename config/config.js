require('dotenv').config();
const { ethers } = require('ethers');
const { CHECKIN_ABI } = require('../abi/CheckInABI');

const RPC_URL = 'https://testnet-rpc.plumenetwork.xyz/http';
const CONTRACT_ADDRESS = CHECKIN_ABI.at(-1).CA;
const provider = new ethers.JsonRpcProvider(RPC_URL);

let PRIVATE_KEYS;
try {
    PRIVATE_KEYS = process.env.PRIVATE_KEYS
    PRIVATE_KEYS = PRIVATE_KEYS.split(',')
    if (!Array.isArray(PRIVATE_KEYS)) {
        throw new Error('PRIVATE_KEYS must be a valid JSON array');
    }
} catch (error) {
    console.error('Error parsing PRIVATE_KEYS:', error.message);
    process.exit(1);
}

module.exports = { RPC_URL, provider, PRIVATE_KEYS, CONTRACT_ADDRESS, NETWORK: 'plumeSepolia' };
