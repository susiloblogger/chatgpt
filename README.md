<<<<<<< HEAD
# ChatGPT Desktop for Linux

Aplikasi desktop ringan untuk ChatGPT yang dibangun menggunakan Electron, khusus untuk pengguna Linux. Nikmati pengalaman ChatGPT yang lebih terintegrasi tanpa harus membuka browser setiap saat.

## ✨ Fitur

- **Native-like Experience**: Menjalankan ChatGPT dalam jendela aplikasi mandiri.
- **Optimasi Linux**: Konfigurasi khusus untuk performa stabil di berbagai distro Linux.
- **Tanpa Sandbox**: Dilengkapi dengan flag `--no-sandbox` untuk kompatibilitas maksimal di sistem Linux tertentu.
- **Ringan & Cepat**: Fokus hanya pada fungsionalitas utama ChatGPT.

## 🚀 Persiapan

Sebelum memulai, pastikan Anda telah menginstal:

- [Node.js](https://nodejs.org/) (versi LTS direkomendasikan)
- [npm](https://www.npmjs.com/)

## 🛠️ Instalasi (Pengembangan)

1. Clone repositori ini atau download source code-nya.
2. Buka terminal di folder project.
3. Instal dependensi:
   ```bash
   npm install
   ```
4. Jalankan aplikasi:
   ```bash
   npm start
   ```

## 📦 Pembuatan Paket (.deb)

Jika Anda ingin membuat installer `.deb` untuk Debian/Ubuntu:

1. Jalankan perintah build:
   ```bash
   npm run dist
   ```
2. Hasil installer akan tersedia di folder `dist/`.

## 📂 Struktur Proyek

- `main.js`: Logika utama aplikasi Electron.
- `package.json`: Konfigurasi dependensi dan skrip build.
- `build/`: Berisi aset pendukung untuk proses build (seperti icon).
- `dist/`: Berisi file installer hasil build.

## 📝 Lisensi

Proyek ini dilisensikan di bawah [ISC License](LICENSE).

---
Dibuat dengan ❤️ untuk komunitas Linux.
=======
# chatgpt
ChatGPT for Debian
>>>>>>> 51701988c99d4dd50482ec74feb29394b412b9c5
