---
lastUpdated: false
---

# Menambahkan Contoh Kode Baru

## Panduan Kontribusi untuk Contoh Kode

* Pengajuan **harus** ditulis dalam bahasa Inggris.
* Dokumentasikan contoh Anda selengkap mungkin.
* Pastikan kode Anda berfungsi dan telah diuji dengan benar.

### Kami berhak untuk:

* Mengubah pengajuan Anda setelah dikirimkan.
* Menghapus pengajuan Anda jika diperlukan.

## Membuat Contoh Kode Baru

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

### 4. Tambahkan Contoh Kode Anda

#### 4.1 Buat berkas contoh

1. Buat berkas baru di `/docs/examples` yang dinamai sesuai bahasa pemrograman.
2. Nama berkas harus diakhiri dengan `.md`.
3. Sertakan setidaknya **dua cara berbeda** untuk melakukan panggilan API.

#### 4.2 Tambahkan contoh ke bilah sisi (sidebar)

1. Buka `/docs/.vitepress/config.mts`.
2. Temukan bagian **"Code Examples"** di bilah sisi.
3. Tambahkan berkas baru Anda ke daftar.
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
