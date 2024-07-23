# Skrip Plume Testnet

![logo](./utils/plume-testnet.png)

## Menu Penjelasan
### Menu Check-In
- Setelah semua dompet telah check in, tunggu 24 jam sebelum siklus berikutnya dimulai dari dompet pertama dalam daftar PRIVATE_KEYS.
### Menu Klaim Faucet ETH
- Setelah semua dompet mengklaim faucet, tunggu 10 menit sebelum siklus berikutnya dimulai dari dompet pertama dalam daftar PRIVATE_KEYS.
### Menu Klaim Faucet GOON
- Setelah semua dompet mengklaim faucet, tunggu 2 jam sebelum siklus berikutnya dimulai dari dompet pertama dalam daftar PRIVATE_KEYS.
### Menu Tukar GOON/goonUSD
- Setelah satu kali pertukaran dompet, tunggu 5 detik sebelum pindah ke dompet berikutnya.
- Setelah semua pertukaran dompet, mulai lagi dari dompet pertama dalam daftar PRIVATE_KEYS.
### Menu Stake goonUSD
- Setelah satu wallet stake, tunggu 30 detik sebelum pindah ke wallet berikutnya.
- Setelah semua wallet stake, mulai lagi dari wallet pertama di daftar PRIVATE_KEYS.
### Prediksi Harga ETH/USD BTC/USD ARB/USD
- Semua wallet bergiliran membuat prediksi harga setiap 1 jam
- Wallet secara otomatis memilih secara acak apakah akan memasangkan ETH atau BTC atau ARB dan memilih naik atau turun secara acak
### Buat Tokenized Aset RWA
- Semua wallet secara bergiliran membuat prediksi harga setiap 4 jam
- Wallet secara otomatis secara acak memilih untuk membuat RWA sesuai dengan yang ada di `datarwa.json` mulai dari jenis Card, Real Estate, Art, sneakers, dan lain-lain. Anda juga dapat mengubah data jika Anda menginginkannya berbeda

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

PRIVATE_KEY='["your_private_key", "your_private_key"].
```

### Jalankan skrip
```
npm start
```
