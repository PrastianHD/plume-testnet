const { ethers } = require('ethers');

function createWallet(privateKey, provider) {
  return new ethers.Wallet(privateKey, provider);
}

function getAddress(privateKey, provider) {
  const wallet = createWallet(privateKey, provider);
  return wallet.address;
}

module.exports = { createWallet, getAddress };
