---
outline: [2, 3]
---

# Referensi API

## Batasan Laju (Rate Limits)

Setiap respons menyertakan header berikut untuk membantu Anda memantau dan mematuhi batasan laju:

| Header                  | Deskripsi                                                |
| ----------------------- | -------------------------------------------------------- |
| `x-rate-limit-limit`    | Durasi jendela batas laju saat ini (mis. `1m`)           |
| `x-rate-limit-remaining`| Sisa permintaan dalam jendela saat ini                   |
| `x-rate-limit-reset`    | Stempel waktu ISO 8601 saat jendela saat ini diatur ulang |

### Batasan

| Endpoint      | Batas                                       |
| ------------- | ------------------------------------------- |
| `/search`     | 7 permintaan per 5 detik                    |
| `/:category`  | 200 permintaan per menit (per kategori)     |

## User-Agent

Semua permintaan harus menyertakan header `User-Agent`. Silakan gunakan format berikut: `NAMA_APLIKASI (INFO_KONTAK)`.\
Contoh: `NekoApp (https://example.com)` atau `NekoApp (dev@example.com)`

**Panduan Penamaan:**

* **Spesifik:** Jangan gunakan nama umum seperti "Discord Bot", "WhatsApp Bot", atau "Telegram Bot". Aplikasi Anda harus memiliki nama yang unik.
* **Hindari tempat penampung (placeholders):** Jangan gunakan string seperti `test`, `bot`, atau nilai contoh di atas.
* **Bukan default pustaka:** Hindari menggunakan string default pustaka seperti `python-requests`, `okhttp`, `axios`, `node`, atau `Go-http-client`.

**Pilihan Informasi Kontak:**\
Informasi kontak tidak harus berupa situs web tradisional. Salah satu dari cara berikut dapat diterima sebagai identifikasi:

* Alamat email kontak langsung.
* Situs web proyek atau URL repositori **publik** (misalnya GitHub, GitLab).
* Tautan undangan bot atau halaman penemuan (discovery page).
* URL pendaftaran (misalnya top.gg atau direktori serupa).

**Spoofing dan Penyamaran:**

* **Jangan memalsukan string peramban.** Format `Mozilla/5.0 ...` khusus diperuntukkan bagi peramban web asli dan bot yang diverifikasi Cloudflare.
* **Jangan menyamar sebagai crawler terkenal** seperti `Googlebot` atau `Bingbot`.

*Kegagalan mengikuti panduan ini dan penggunaan nilai umum, default, atau palsu kemungkinan besar akan mengakibatkan permintaan Anda diblokir.*

## Kategori

Kategori menentukan jenis konten yang dikembalikan oleh API. Setiap kategori dipetakan ke format berkas tetap.

### Gambar

<div class="category-grid">
  <span class="category-chip">husbando</span>
  <span class="category-chip">kitsune</span>
  <span class="category-chip">neko</span>
  <span class="category-chip">waifu</span>
</div>

### GIF

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

### Bidang Respons (Response Fields)

| Tipe   | Bidang                                      |
| ------ | ------------------------------------------- |
| Gambar | `artist_name`, `artist_href`, `source_url`  |
| GIF    | `anime_name`                                |

`url` dan `dimensions` disertakan dalam keduanya.
