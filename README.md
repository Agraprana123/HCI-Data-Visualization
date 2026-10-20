# 📊 Human Computer Interaction — Data Visualization

Proyek visualisasi data interaktif yang menampilkan hasil penelitian tentang bagaimana manusia berinteraksi dengan komputer. Dibangun menggunakan HTML, CSS, dan JavaScript dengan library Chart.js.

---

## 🎯 Tujuan

Menyajikan data Human-Computer Interaction (HCI) dalam bentuk visual yang mudah dipahami, mencakup:

- Distribusi metode input pengguna
- Perbandingan efisiensi metode input
- Tingkat kepuasan pengguna terhadap antarmuka
- Skor usability (SUS) antar platform

## 🖥️ Screenshot

Halaman web menampilkan dashboard dengan dark theme yang berisi:

1. **Kartu Ringkasan** — Total responden, sesi interaksi, rata-rata waktu, dan kepuasan
2. **Doughnut Chart** — Distribusi metode input (Keyboard, Mouse, Touch, dll.)
3. **Bar Chart** — Efisiensi input dalam Words Per Minute (WPM)
4. **Radar Chart** — Skor kepuasan per aspek (Ease of Use, Visual Design, dll.)
5. **Horizontal Bar** — Skor System Usability Scale (SUS) per platform
6. **Tabel Data** — Detail usability lengkap dengan grade

## 🛠️ Teknologi

| Teknologi | Keterangan |
|-----------|------------|
| HTML5 | Struktur halaman |
| CSS3 | Styling dengan dark theme |
| JavaScript | Logika visualisasi |
| [Chart.js 4.4](https://www.chartjs.org/) | Library chart interaktif |
| [Google Fonts](https://fonts.google.com/) | Font Inter |

## 📁 Struktur File

```
Human_Computer_Interaction_Data_Visualization/
├── index.html    # Halaman utama
├── style.css     # Stylesheet
├── script.js     # Chart.js charts & logika
└── README.md     # Dokumentasi
```

## 🚀 Cara Menjalankan

1. **Clone / Download** repository ini
2. Buka `index.html` langsung di browser, atau jalankan local server:
   ```bash
   # Menggunakan Python
   python -m http.server 8080

   # Lalu buka http://localhost:8080
   ```

## 📊 Data yang Divisualisasikan

### Metode Input Pengguna
| Metode | Persentase |
|--------|-----------|
| Keyboard | 35% |
| Mouse/Trackpad | 28% |
| Touchscreen | 22% |
| Voice | 8% |
| Gesture | 4% |
| Stylus | 3% |

### Efisiensi Input (Words Per Minute)
| Metode | WPM |
|--------|-----|
| Voice | 120 |
| Keyboard | 65 |
| Handwriting | 22 |
| Gesture | 15 |
| Eye Tracking | 10 |

### Skor SUS per Platform
| Platform | SUS Score | Grade |
|----------|-----------|-------|
| Desktop App | 85.1 | A |
| Web App | 82.5 | A |
| Mobile App | 78.3 | B+ |
| Voice UI | 65.7 | C+ |
| AR/VR | 61.2 | C |

## 📝 Catatan

- Data bersifat **ilustratif** untuk keperluan visualisasi
- Tidak memerlukan backend atau database
- Responsive untuk desktop dan mobile

## 👤 Author

Dibuat untuk keperluan tugas mata kuliah **Human Computer Interaction**.

---

> © 2026 — HCI Data Visualization
