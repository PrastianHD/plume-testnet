const { ethers } = require('ethers');
const { createWallet, getAddress } = require('../config/wallet');
const { provider, PRIVATE_KEYS } = require('../config/config');
const { log } = require('../utils/logger');

const abi = [
  "function predictPriceMovement(uint256 pairIndex, bool isLong) public"
];

const contractAddress = "0x032139f44650481f4d6000c078820B8E734bF253";

// Pair indices and their names
const pairs = {
  0: 'ETH/USDT',
  1: 'BTC/USDT',
  2: 'ARB/USDT',
  3: 'EUR/USD',
  4: 'USD/JPY',
  5: 'GBP/USD' 
};

// Function to get a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to get a random boolean value
function getRandomBool() {
  return Math.random() < 0.5;
}

// Function to get a readable string for prediction
function getPredictionMessage(pairIndex, isLong) {
  const pairName = pairs[pairIndex];
  const direction = isLong ? 'up' : 'down';
  return `${pairName} is predicted to ${direction} in the next 1 hour.`;
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function callPredictPriceMovement(PRIVATE_KEY, pairIndex, isLong, retryCount = 0, maxRetries = 3) {
  try {
    const wallet = createWallet(PRIVATE_KEY, provider);
    const walletAddress = wallet.address;
    log('INFO', `Wallet address: ${walletAddress}`);
    const contract = new ethers.Contract(contractAddress, abi, wallet);

    try {
      const tx = await contract.predictPriceMovement(pairIndex, isLong);
      const message = getPredictionMessage(pairIndex, isLong);
      log('INFO', message);

      const receipt = await tx.wait();
      log('SUCCESS', `Transaction successful: ${receipt.hash}\n`);
    } catch (error) {
      if (error.message.includes("Wait for cooldown")) {
        log('ERROR', `Please try again in 1 hour\n`);
      } else {
        if (retryCount < maxRetries) {
          log('ERROR', `Error calling predictPriceMovement: ${error.message}. Retrying ${retryCount + 1}/${maxRetries} in 2 seconds...`);
          await delay(2000);
          await callPredictPriceMovement(PRIVATE_KEY, pairIndex, isLong, retryCount + 1, maxRetries);
        } else {
          log('ERROR', `Error calling predictPriceMovement after ${maxRetries} attempts: ${error.message}`);
        }
      }
    }
  } catch (error) {
    log('ERROR', `Critical error: ${error.message}`);
  }
}

async function predict() {
  while (true) {
    for (const PRIVATE_KEY of PRIVATE_KEYS) {
      const pairIndex = getRandomInt(0, 5);
      const isLong = getRandomBool(); 
      await callPredictPriceMovement(PRIVATE_KEY, pairIndex, isLong);
    }
    log('INFO', 'Waiting for the next cycle...\n');
    await delay(60000 * 60); // 1 Hour
  }
}

module.exports = predict;
