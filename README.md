# GoNilai Landing Page Redesign

Redesign landing page GoNilai dengan identitas warna biru–kuning, logo dan mockup aplikasi asli, serta konten layanan GoNilai yang disusun ulang agar lebih modern, responsif, dan mudah dipindai.

## Preview

- [Sites preview](https://mykedai-redesign-2026.catie09.chatgpt.site/)
- Custom domain: `https://gonilai.mybite.id` setelah DNS diarahkan ke Sites

## Fitur

- Hero dan navigasi responsif
- Penjelasan cara membeli di GoNilai
- Daftar produk digital
- Pembayaran tunai melalui 7-Eleven
- Testimoni pelanggan
- Berita, kebijakan, FAQ, dan kontak
- Metadata Open Graph untuk pratinjau tautan

## Teknologi

- React 19
- Next.js 16
- Vinext dan Vite
- Cloudflare Workers / Sites
- TypeScript dan CSS responsif

## Menjalankan Secara Lokal

Gunakan Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

Untuk memeriksa build dan pengujian:

```bash
npm test
```

## Struktur Utama

- `app/page.tsx` — konten dan interaksi landing page
- `app/globals.css` — sistem visual dan layout responsif
- `public/gonilai/` — aset merek dan mockup GoNilai
- `tests/` — pemeriksaan render dan aset penting

## Catatan

Logo, nama, dan materi merek GoNilai tetap menjadi milik pemegang hak masing-masing.
