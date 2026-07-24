---
outline: [2, 3]
---

# Endpoint API

## URL Dasar

```
https://nekos.best/api/:version
```

Ganti `:version` dengan salah satu versi yang didukung di bawah ini.

## Versi

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">Versi</div>
    <div class="version-col">Status</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">Saat Ini & Dipelihara</div>
  </div>
</div>

::: warning Penting
Sebelum membuat permintaan, silakan baca [dokumentasi User-Agent](/id/getting-started/api-reference.html#user-agent). Semua permintaan harus menyertakan header `User-Agent` dengan format yang benar.
:::

## Endpoint

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

Mengembalikan semua kategori API yang tersedia beserta format berkas yang terkait.

#### Contoh

https://nekos.best/api/v2/endpoints
```json
{
  "neko": { "format": "png" },
  "...": {},
  "wink": { "format": "gif" }
}
```

::: tip
Gunakan endpoint ini untuk menemukan kategori yang didukung secara dinamis daripada menuliskannya secara hardcode.
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

Mengembalikan gambar atau GIF acak dari kategori yang ditentukan, termasuk metadatanya.

#### Parameter Query

| Nama   | Tipe   | Wajib | Deskripsi                                 |
| ------ | ------ | ----- | ----------------------------------------- |
| amount | number | Tidak | Jumlah hasil yang dikembalikan (`1 ≤ X ≤ 20`) |

Default ke `1` jika tidak ditentukan.

#### Contoh (hasil tunggal)

https://nekos.best/api/v2/neko

```json
{
  "results": [
    {
      "artist_name": "John Doe",
      "artist_href": "https://www.example.com/en/users/1234567",
      "source_url": "https://www.example.com/en/artworks/1234567",
      "url": "https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png",
      "dimensions": {
        "width": 420,
        "height": 690
      }
    }
  ]
}
```

#### Contoh (beberapa hasil)

https://nekos.best/api/v2/hug?amount=2

```json
{
  "results": [
    {
      "anime_name": "Generic Anime Name",
      "url": "https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif",
      "dimensions": {
        "width": 420,
        "height": 690
      }
    },
    {
      "anime_name": "Generic Anime Name",
      "url": "https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif",
      "dimensions": {
        "width": 420,
        "height": 690
      }
    }
  ]
}
```

---

### <Badge type="tip" text="GET" class="http-get" /> /search

Cari gambar atau GIF menggunakan metadata seperti nama seniman atau judul sumber.

#### Parameter Query

| Nama     | Tipe   | Wajib | Deskripsi                           |
| -------- | ------ | ----- | ----------------------------------- |
| query    | string | Ya    | Kata kunci pencarian                |
| type     | enum   | Ya    | `1` = gambar, `2` = GIF             |
| category | string | Tidak | Batasi hasil pada satu kategori     |
| amount   | number | Tidak | Jumlah hasil (`1 ≤ X ≤ 20`)         |

#### Contoh (pencarian gambar)

https://nekos.best/api/v2/search?query=John&type=1

```json
{
  "results": [
    {
      "artist_name": "John Doe",
      "artist_href": "https://www.example.com/en/users/1234567",
      "source_url": "https://www.example.com/en/artworks/1234567",
      "url": "https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png",
      "dimensions": {
        "width": 420,
        "height": 690
      }
    }
  ]
}
```

#### Contoh (pencarian GIF dengan kategori)

https://nekos.best/api/v2/search?query=Generic&type=2&category=pat&amount=2

```json
{
  "results": [
    {
      "anime_name": "Generic Anime Name",
      "url": "https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif",
      "dimensions": {
        "width": 420,
        "height": 690
      }
    },
    {
      "anime_name": "Generic Anime Name",
      "url": "https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif",
      "dimensions": {
        "width": 420,
        "height": 690
      }
    }
  ]
}
```

---

### <Badge type="tip" text="GET" class="http-get" /> /:category/:filename.:format

Mengambil aset tertentu secara langsung.

#### Parameter Jalur (Path)

| Nama     | Deskripsi                   |
| -------- | --------------------------- |
| category | Nama kategori               |
| filename | Nama berkas aset (UUID)     |
| format   | Format berkas (`png`, `gif`)|

::: info
Metadata untuk endpoint ini dikembalikan melalui **header respons HTTP yang terenkode URL**.
:::

**Header yang tersedia:**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### Contoh

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**Respons:** Data biner gambar atau GIF
