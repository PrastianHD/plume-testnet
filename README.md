# Plume Testnet Script

![logo](./utils/plume-testnet.png)

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

### Konfigurasi .env File

>create file .env in root project
```bash

PRIVATE_KEY='["your_private_key", "your_private_key"].
```

### Run script
```
npm start
```
