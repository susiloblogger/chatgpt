# 🤖 ChatGPT Desktop for Linux

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Platform](https://img.shields.io/badge/platform-linux-orange.svg)](#)

Aplikasi desktop ringan untuk **ChatGPT** yang dibangun menggunakan **Electron**, dirancang khusus untuk memberikan pengalaman terbaik bagi pengguna **Linux**. Tidak perlu lagi mencari tab browser yang hilang—ChatGPT kini hadir sebagai aplikasi mandiri di sistem Anda.

> [!IMPORTANT]
> **Aplikasi ini dikhususkan untuk distribusi Linux berbasis Debian/Ubuntu** (seperti Ubuntu, Linux Mint, Pop!_OS, dll).

---

## ✨ Fitur Utama

- 🚀 **Native Experience**: Menjalankan ChatGPT dalam jendela aplikasi mandiri yang bersih.
- 🐧 **Debian/Ubuntu Optimized**: Konfigurasi khusus untuk performa stabil di distribusi Linux berbasis Debian/Ubuntu.
- 🛠️ **Compatibility**: Menggunakan flag `--no-sandbox` secara default untuk memastikan kompatibilitas maksimal di sistem Linux.
- 🍱 **Minimalist**: Tanpa menu bar yang mengganggu, memberikan fokus penuh pada percakapan Anda.
- 📦 **Easy Installer**: Dilengkapi dengan skrip untuk membuat paket `.deb` secara instan.

---

## 🚀 Memulai (Development)

### Persiapan
Pastikan sistem Anda sudah terinstal:
- [Node.js](https://nodejs.org/) (Rekomendasi versi LTS)
- [npm](https://www.npmjs.com/)
- [Electron](https://www.electronjs.org/)
- [Electron Builder](https://www.electron.build/)

### Instalasi
1. Clone repositori ini:
   ```bash
   git clone https://github.com/username/chatgpt-linux.git
   cd chatgpt-linux
   ```
2. Instal dependensi:
   ```bash
   npm install
   ```
3. Jalankan aplikasi:
   ```bash
   npm start
   ```

---

## 📦 Membuat Paket (.deb)

Jika Anda ingin membuat installer `.deb` untuk diinstal secara permanen di sistem Anda:

1. Jalankan perintah build:
   ```bash
   npm run dist
   ```
2. Tunggu proses selesai. Hasil installer akan muncul di folder `dist/` dalam format `.deb`.
3. Instal menggunakan perintah:
   ```bash
   sudo dpkg -i dist/chatgpt_1.0.0_amd64.deb
   ```

---

## 📂 Struktur Proyek

- `main.js`: Logika utama aplikasi Electron dan konfigurasi jendela.
- `package.json`: Definisi dependensi dan skrip manajemen proyek.
- `build/`: Berisi aset pendukung seperti ikon aplikasi.
- `dist/`: Lokasi hasil build dan installer.

---

## 📝 Lisensi

Proyek ini dilisensikan di bawah [ISC License](LICENSE).

---
<p align="center">
  Dibuat dengan ❤️ untuk komunitas Linux.
</p>
