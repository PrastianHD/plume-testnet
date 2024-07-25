# Plume Testnet Script

![logo](./utils/plume-testnet.png)
## Join
https://miles.plumenetwork.xyz/join?invite=PLUME-6KCXQ

## Menu Explain
### Check-In Menu
- After all wallets have checked in, wait 24 hours before the next cycle starts from the first wallet in the PRIVATE_KEYS list.
### Claim Faucet ETH Menu
- After all wallets have claimed the faucet, wait 10 minutes before the next cycle starts from the first wallet in the PRIVATE_KEYS list.
### Claim Faucet GOON Menu
- After all wallets have claimed the faucet, wait 2 hours before the next cycle starts from the first wallet in the PRIVATE_KEYS list.
### Swap GOON/goonUSD Menu
- After one wallet swap, wait 5 seconds before moving to the next wallet.
- After all wallet swaps, start again from the first wallet in the PRIVATE_KEYS list.
### Stake goonUSD Menu
- After one wallet stake, wait 30 seconds before moving to the next wallet.
- After all wallet stakes, start again from the first wallet in the PRIVATE_KEYS list.
### Predict ETH/USD BTC/USD ARB/USD Price
- All wallets take turns to make price predictions every 1 hour
- The wallet automatically chooses randomly whether to pair ETH or BTC or ARB and chooses up or down randomly
### Create Asset Tokenized RWA
- All wallets take turns to make price predictions every 4 hours
- The wallet automatically randomly chooses to create RWA according to what is in `datarwa.json` starting from the type Card, Real Estate, Art, sneakers, and others. You can also change the data if you want it to be different

Penjelasan dalam bahasa Indonesia : [DISINI!](https://github.com/PrastianHD/plume-testnet/blob/main/READINDO.md)

## Installation 
### Clone Repositori
```
git clone https://github.com/PrastianHD/plume-testnet.git
cd plume-testnet
```

### Instal Dependensi
```
npm install
```

### Konfigurasi File

>create file .env in root project
```bash
PRIVATE_KEYS=your_private_key,your_private_key

MIN_SWAP=0.001
MAX_SWAP=0.01

STAKE_AMOUNT=1
```

### Run script
```
npm start
```
### If @crocswap-libs/sdk@file:sdk is missing, install it separately.
npm i @crocswap-libs/sdk
### The original author's code is not open source Please use with caution ⚠⚠⚠
