# AI Chatbot Workshop Landing Page — SPINS International School x UMSURA

Repositori ini berisi kode sumber untuk landing page interaktif yang digunakan dalam kegiatan workshop **"Build Your First AI Chatbot with Groq API"**. Kegiatan ini diselenggarakan oleh **Program Studi Teknik Informatika, Universitas Muhammadiyah Surabaya** bersama **HIMATIKA** di **SPINS International School**.

Landing page ini dirancang untuk memandu peserta workshop agar dapat mengakses Google Colab Notebook materi dengan mudah melalui QR Code atau tombol tautan langsung.

🔗 **Live Website**: [spins-chatbot-workshop.vercel.app](https://spins-chatbot-workshop.vercel.app/)

---

## 🚀 Fitur Utama

- **Desain Modern & Estetik**: Menggunakan konsep *Glassmorphism* dengan perpaduan warna gelap (dark mode), aksen warna limau (*lime green*), serta efek *noise* grain yang premium.
- **Background Animasi Dinamis**: Dilengkapi dengan animasi partikel *sparks*, elemen bintang (*asterisk*), serta *gradient blobs* yang bergerak lembut di latar belakang.
- **Scroll Reveal Animation**: Transisi halus saat pengguna menggulir halaman menggunakan `IntersectionObserver` API pada JavaScript.
- **QR Code Terintegrasi**: Memudahkan peserta workshop yang menggunakan perangkat *mobile* untuk memindai tautan Google Colab secara instan.
- **Desain Responsif**: Dioptimalkan untuk kenyamanan tampilan di ponsel pintar, tablet, maupun layar komputer.

---

## 📁 Struktur Proyek

Berikut adalah berkas-berkas utama dalam repositori ini:

*   [`index.html`](index.html) - Kerangka dasar halaman web yang memuat informasi utama, logo institusi, petunjuk langkah awal, dan tautan ke Google Colab.
*   [`styles.css`](styles.css) - Lembar gaya CSS kustom untuk tata letak, skema warna, tipografi, efek *glassmorphism*, dan animasi partikel latar belakang.
*   [`script.js`](script.js) - Logika JavaScript sederhana yang mengamati elemen saat masuk ke *viewport* untuk memicu animasi masuk (*fade-in*).
*   [`assets/`](assets/) - Folder penyimpanan aset visual berupa logo resmi penyelenggara:
    *   `logo-himatika.png` (Himpunan Mahasiswa Teknik Informatika)
    *   `logo-muhammadiyah.png` (Perserikatan Muhammadiyah)
    *   `logo-umsura.png` (Universitas Muhammadiyah Surabaya)

---

## 🛠️ Cara Menjalankan secara Lokal

Anda dapat membuka dan menjalankan situs web ini secara lokal di komputer Anda:

1.  **Unduh atau Clone Repositori**
    ```bash
    git clone https://github.com/username/spins-chatbot-workshop.git
    ```
2.  **Masuk ke Direktori Proyek**
    ```bash
    cd spins-chatbot-workshop
    ```
3.  **Jalankan Situs**
    - Buka berkas `index.html` langsung dengan klik dua kali di penjelajah berkas (*File Explorer*).
    - Atau gunakan ekstensi **Live Server** di VS Code untuk pengalaman pengembangan yang lebih baik dengan fitur *auto-reload*.

---

## 📝 Langkah Cepat Memulai Workshop

Petunjuk ringkas untuk peserta workshop sebelum mulai menulis kode bersama mentor:

1.  **Buka Notebook**: Pindai QR Code di layar atau tekan tombol **"Open the Notebook"**. Pastikan masuk menggunakan akun Google sekolah/institusi.
2.  **Simpan Salinan**: Pilih menu **File** → **Save a copy in Drive** (Simpan salinan di Drive) agar Anda memiliki berkas latihan pribadi.
3.  **Tambahkan Groq API Key**: Ikuti panduan mentor untuk mendapatkan kunci API dari Groq dan tempelkan ke kolom yang disediakan di Colab.
4.  **Jalankan Kode**: Klik tombol *Run* pada setiap blok kode (*cell*) secara berurutan dari atas ke bawah sambil mengikuti instruksi mentor.

---

## 🏫 Penyelenggara & Kemitraan

Workshop ini sukses terlaksana berkat kolaborasi antara:
- **Teknik Informatika, Universitas Muhammadiyah Surabaya**
- **HIMATIKA UMSurabaya**
- **SPINS International School**
