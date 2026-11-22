---
outline: [2, 3]
---

# Referensi API

## Rate Limit

Setiap respons menyertakan header berikut agar kamu dapat memantau dan mematuhi rate limit dengan mudah:

| Header                   | Deskripsi                                                  |
| ------------------------ | ---------------------------------------------------------- |
| `x-rate-limit-limit`     | Durasi jendela rate limit saat ini (mis. `1m`)             |
| `x-rate-limit-remaining` | Sisa request yang tersedia dalam jendela saat ini          |
| `x-rate-limit-reset`     | Timestamp ISO 8601 saat jendela rate limit saat ini direset |

### Batas Rate Limit

| Endpoint                       | Batas                                                         |
| ------------------------------ | ------------------------------------------------------------- |
| `/search`                      | 7 request per 5 detik                                         |
| `/:category`                   | 200 request per menit (per kategori)                          |
| `/:category/:filename.:format` | 200 request per menit (berbagi kuota untuk aset `.png` & `.gif`) |

## User-Agent

Meskipun header `User-Agent` kustom tidak diwajibkan, kami sangat menyarankan untuk mengaturnya pada setiap request dengan format: `APP_NAME (CONTACT_INFO)`.\
Contoh: `NekoApp (https://example.com)` atau `NekoApp (dev@example.com)`

**Saran Penamaan:**

* **Gunakan nama spesifik:** Pakai nama asli aplikasimu, bukan label umum seperti "Discord Bot", "WhatsApp Bot", atau "Telegram Bot".
* **Hindari placeholder:** Hindari string placeholder seperti `test`, `bot`, atau contoh nilai di atas.
* **Hindari default library:** Sebaiknya gunakan nilai kustom alih-alih string bawaan library seperti `python-requests`, `okhttp`, `axios`, `node`, atau `Go-http-client`.

**Pilihan Informasi Kontak:**\
Informasi kontak tidak harus berupa situs web biasa. Salah satu opsi berikut sudah cukup:

* Alamat email kontak langsung.
* Situs web proyek atau URL repositori **publik** (misalnya GitHub, GitLab).
* Tautan undangan bot atau halaman discovery.
* URL direktori bot (misalnya top.gg atau platform sejenis).

**Spoofing dan Penyamaran:**

* **Jangan memalsukan string browser.** Format `Mozilla/5.0 ...` hanya diperuntukkan bagi browser web asli dan bot yang terverifikasi Cloudflare.
* **Jangan menyamar sebagai crawler terkenal** seperti `Googlebot` atau `Bingbot`.

::: info
Tidak mengatur header `User-Agent` kustom meningkatkan risiko ditandai atau diblokir oleh sistem deteksi penyalahgunaan otomatis kami (`NB-BCFSD`).
:::

## Kategori

Kategori menentukan jenis konten yang dikembalikan oleh API. Setiap kategori memiliki format file yang tetap.

### Gambar (4)

<div class="category-grid">
  <span class="category-chip">husbando</span>
  <span class="category-chip">kitsune</span>
  <span class="category-chip">neko</span>
  <span class="category-chip">waifu</span>
</div>

### GIF (59)

<div class="category-grid">
  <span class="category-chip">angry</span>
  <span class="category-chip">baka</span>
  <span class="category-chip">bite</span>
  <span class="category-chip">bleh</span>
  <span class="category-chip">blowkiss</span>
  <span class="category-chip">blush</span>
  <span class="category-chip">bonk</span>
  <span class="category-chip">bored</span>
  <span class="category-chip">carry</span>
  <span class="category-chip">clap</span>
  <span class="category-chip">confused</span>
  <span class="category-chip">cry</span>
  <span class="category-chip">cuddle</span>
  <span class="category-chip">dance</span>
  <span class="category-chip">facepalm</span>
  <span class="category-chip">feed</span>
  <span class="category-chip">handhold</span>
  <span class="category-chip">handshake</span>
  <span class="category-chip">happy</span>
  <span class="category-chip">highfive</span>
  <span class="category-chip">hug</span>
  <span class="category-chip">kabedon</span>
  <span class="category-chip">kick</span>
  <span class="category-chip">kiss</span>
  <span class="category-chip">lappillow</span>
  <span class="category-chip">laugh</span>
  <span class="category-chip">lurk</span>
  <span class="category-chip">nod</span>
  <span class="category-chip">nom</span>
  <span class="category-chip">nope</span>
  <span class="category-chip">nya</span>
  <span class="category-chip">pat</span>
  <span class="category-chip">peck</span>
  <span class="category-chip">poke</span>
  <span class="category-chip">pout</span>
  <span class="category-chip">punch</span>
  <span class="category-chip">run</span>
  <span class="category-chip">salute</span>
  <span class="category-chip">shake</span>
  <span class="category-chip">shoot</span>
  <span class="category-chip">shocked</span>
  <span class="category-chip">shrug</span>
  <span class="category-chip">sip</span>
  <span class="category-chip">slap</span>
  <span class="category-chip">sleep</span>
  <span class="category-chip">smile</span>
  <span class="category-chip">smug</span>
  <span class="category-chip">spin</span>
  <span class="category-chip">stare</span>
  <span class="category-chip">tableflip</span>
  <span class="category-chip">teehee</span>
  <span class="category-chip">think</span>
  <span class="category-chip">thumbsup</span>
  <span class="category-chip">tickle</span>
  <span class="category-chip">wag</span>
  <span class="category-chip">wave</span>
  <span class="category-chip">wink</span>
  <span class="category-chip">yawn</span>
  <span class="category-chip">yeet</span>
</div>

### Field Respons

| Tipe   | Field                                      |
| ------ | ------------------------------------------ |
| Gambar | `artist_name`, `artist_href`, `source_url` |
| GIF    | `anime_name`                               |

`url` dan `dimensions` selalu disertakan pada keduanya.
