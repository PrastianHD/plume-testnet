# Skrip Plume Testnet

![logo](./utils/plume-testnet.png)
## Join
https://miles.plumenetwork.xyz/join?invite=PLUME-6KCXQ
## Menu Penjelasan
### Menu[1] Check-In
- Setelah melakukan CheckIn, setiap wallet akan meng-claim rewards NEST STAKING
- Setiap wallet yang ada di PRIVATE_KEYS akan secara bergantian melakukan checkin, kemudian kembali ke Main Menu.
### Menu[2] Klaim Faucet ETH
- Setiap wallet yang ada di PRIVATE_KEYS akan secara bergantian melakukan Faucet ETH menggunakan proxy yang berbeda untuk setiap wallet, kemudian kembali ke Main Menu
### Menu[3] Klaim Faucet GOON
- Setiap wallet yang ada di PRIVATE_KEYS akan secara bergantian melakukan Faucet GOON menggunakan proxy yang berbeda untuk setiap wallet, kemudian kembali ke Main Menu
### Menu[4] Tukar GOON/goonUSD
- Setelah satu kali pertukaran dompet, tunggu 5 detik sebelum pindah ke dompet berikutnya.
- Setelah semua wallet swap GOON to goonUSD, kemudian kembali ke Main Menu.
- Jumah swap bisa di sesuaikan di .env
### Menu[5] Stake goonUSD
- Jumlah stake otomatis all in sesuai balance goonUSD di wallet.
- Setelah semua wallet stake, kemudian kembali ke Main Menu.
- Jumlah stake bisa di sesuaikan di .env
### Menu[6] Prediksi Harga ETH/USD BTC/USD ARB/USD
- Semua wallet bergiliran membuat prediksi harga akan naik atau turun
- Wallet secara otomatis memilih secara acak apakah akan memasangkan ETH atau BTC atau ARB, Kemudian kembali ke Main Menu.
### Menu[7] Buat Tokenized Aset RWA
- Semua wallet secara bergiliran membuat token RWA
- Wallet secara otomatis secara acak memilih untuk membuat RWA sesuai dengan yang ada di `datarwa.json` mulai dari jenis Card, Real Estate, Art, sneakers, dan lain-lain. Anda juga dapat mengubah data jika Anda menginginkannya berbeda
### Menu[8] Menjalankan All Task
- Setiap wallet akan melakukan CheckIn, Klaim Faucet GOON, Swap GOON/goonUSD, claim rewards stake dan stake goonUSD, serta prediksi harga secara acak.
- Kemudian setiap wallet akan delay selama 1 jam untuk menghindari kegagalan transaksi faucet ETH
- Setelah 1 jam delay, Setiap wallet akan membuat token RWA dan Klaim Faucet ETH.
- Kemudian delay lagi selama 1 jam yang nantinya kembali ke Tugas sebelumnya

## Instalasi
### Kloning Repositori
```
git clone https://github.com/PrastianHD/plume-testnet.git
cd plume-testnet
```

### Instal Dependensi
```
npm install
```

### Konfigurasi .env File

>buat file .env di proyek root
```bash
PRIVATE_KEYS=your_private_key,your_private_key

# Minimum and maximum swap values
MIN_SWAP=0.099
MAX_SWAP=0.1

```
### Konfigurasi Proxy in proxy.txt
```bash
# Format Proxy - username:password:host:port
 
skrstvca:qwo3xoup86cg:204.44.69.89:6342
```

### Jalankan skrip
```
npm start
```
### Donate

All EVM : 0x00000c59C137da15D77bEb536D2a6c5A8A77b62D