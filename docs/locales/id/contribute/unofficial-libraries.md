---
lastUpdated: false
---

# Menambahkan Pustaka Tidak Resmi

## Panduan Kontribusi untuk Pustaka Tidak Resmi

* Pengajuan **harus** ditulis dalam bahasa Inggris.
* Pemilik pustaka harus bergabung dengan [server Discord](https://nekos.best/discord?ref=docs) kami.
* Pustaka harus mengikuti praktik kualitas kode yang baik.
* Pustaka **tidak boleh** mengandung malware atau perilaku tidak aman lainnya.
* Pustaka harus dapat diakses secara publik dan dipelihara secara aktif.
* Berikan instruksi instalasi dan penggunaan yang jelas di repositori Anda.

### Kami berhak untuk:

* Mengubah pengajuan Anda setelah ditinjau.
* Menghapus pengajuan Anda jika menjadi usang, tidak aman, atau tidak dipelihara.

## Menambahkan Pustaka Tidak Resmi Baru

### 1. Fork repositori ini

### 2. Kloning fork Anda dan masuk (`cd`) ke direktori proyek

### 3. Instal VitePress

Anda dapat menemukan prasyarat VitePress di [dokumentasi resmi](https://vitepress.dev/guide/getting-started#prerequisites).

::: code-group

```sh [npm]
npm add -D vitepress@next
```

```sh [pnpm]
pnpm add -D vitepress@next
```

```sh [yarn]
yarn add -D vitepress@next vue
```

```sh [bun]
bun add -D vitepress@next
```

:::

---

### 4. Tambahkan Pustaka Tidak Resmi Anda ke Bilah Sisi

1. Buka `/docs/.vitepress/config.mts`.
2. Temukan bagian **"Unofficial Libraries"** di bilah sisi.
3. Tambahkan tautan ke repositori pustaka Anda.
4. Jaga agar daftar tetap berurutan secara alfabetis berdasarkan bahasa pemrograman.

---

### 5. Jalankan Server Pengembang

Sebelum membuat pull request, verifikasi secara lokal bahwa perubahan Anda tidak merusak apa pun.

::: code-group

```sh [npm]
npm run dev
```

```sh [pnpm]
pnpm run dev
```

```sh [yarn]
yarn dev
```

```sh [bun]
bun run dev
```

:::

---

### 6. Buat Pull Request

Kirimkan pull request ke repositori asli.
