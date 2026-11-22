---
outline: [2]
---
# Pertanyaan Umum (FAQ)

Berikut adalah daftar pertanyaan yang paling sering diajukan.

## Umum

#### Di mana lokasi servernya?
> Server kami di-host di Jerman.

#### Seberapa andal API ini?
> API kami saat ini menjaga uptime **minimal** 99,99% setiap tahunnya.

#### Apakah atribusi wajib dicantumkan saat menggunakan API?
> Tidak wajib, tetapi kami sangat menghargainya jika kamu mencantumkannya.

## Gambar & GIF

#### Seberapa aman gambar dan GIF yang tersedia?
> Kami memprioritaskan konten yang sepenuhnya aman untuk tempat kerja (SFW). Berbeda dengan banyak API anime lainnya, kamu tidak akan menemukan karakter berpakaian sugestif secara seksual (seperti pakaian renang, bikini, pakaian dalam, pakaian transparan, atau pakaian yang terlalu terbuka).\
> Selain itu, kami juga menyaring konten seperti panty shot (pakaian dalam yang sengaja diperlihatkan), "bait" yang berfokus pada ketiak, dan konten berorientasi fetish sejenisnya.\
> Setiap gambar dan GIF dikurasi secara manual demi menjamin kualitas dan keamanan konten, bukan sekadar mengejar jumlah.

#### Bisakah saya menggunakan gambar atau GIF secara komersial?
> Tidak. Penggunaan komersial dilarang sebagaimana tercantum dalam [Syarat Layanan](/legal/tos).\
> Gambar-gambar tersebut bukan milik kami dan dibagikan semata-mata untuk tujuan hiburan, dengan kredit yang semestinya kepada kreator asli.

#### Apakah saya wajib mencantumkan kredit ilustrator?
> Meskipun tidak diwajibkan, kami sangat menganjurkanmu untuk mencantumkan kredit ilustrator karena API sudah menyediakan informasi tersebut.

#### Ada sumber yang salah atau hilang pada gambar atau GIF. Di mana saya bisa melaporkannya?
> Jika kamu menemukan sumber yang keliru atau kosong di API, silakan laporkan melalui server Discord kami. Buka channel `#api-support` dan buat postingan baru.

#### Bisakah kalian menambahkan kategori X ke API?
> Saran kategori bisa dikirim melalui server Discord kami di channel khusus `#suggestions`.
>
> **Catatan:** Hanya saran kategori SFW yang diterima. Usulan yang berkaitan dengan konten seperti lick atau kidnap tidak sesuai dengan pedoman SFW kami dan akan ditolak.

#### Kapan gambar, GIF, atau kategori baru akan dirilis?
> Tidak ada jadwal rilis tetap atau ETA. Semua konten ditambahkan secara manual, dan pembaruan dilakukan ketika sudah siap serta saat pengelola memiliki waktu luang.

#### Bisakah saya berkontribusi menyumbangkan gambar atau GIF ke API?
> Tentu saja! Kalau ingin berkontribusi, silakan bergabung ke server Discord kami dan buat postingan di `#api-support`.
> Kontributor akan mendapatkan role Contributor khusus di komunitas Discord kami.

#### Apakah ada gambar atau GIF buatan AI di API?
> Tidak. Semua gambar dan GIF di API dibuat oleh kreator manusia. Kami tidak mendukung konten hasil generasi AI.

#### Bisakah saya menggunakan gambar atau GIF untuk melatih AI, ML, atau LLM?
> **Tidak.** Sesuai dengan [Syarat Layanan](/legal/tos) kami, penggunaan konten dari API untuk melatih model AI, machine learning (ML), atau LLM (termasuk scraping atau pengumpulan dataset) dilarang keras dan akan berujung pada pemblokiran API. Izin juga tidak dapat diberikan karena kami bukan pemilik hak cipta konten tersebut.

#### Bisakah saya melakukan cache, mengunduh, atau melakukan scraping terhadap gambar atau GIF?
> Melakukan cache pada **respons JSON API** (seperti metadata dan URL) diperbolehkan khusus untuk **penggunaan pribadi**, selama tidak dipublikasikan atau didistribusikan ulang.\
> Melakukan cache, mengunduh, melakukan scraping, mengunggah ulang (rehost), atau mengekstrak secara massal **file gambar atau GIF aslinya** **dilarang keras** sesuai [Syarat Layanan](/legal/tos) kami dan akan berujung pada pemblokiran API.

#### Seberapa besar ukuran file GIF-nya?
> File GIF kami dijaga tetap ringan dan teroptimasi agar cepat dimuat, dengan ukuran rata-rata sekitar **~900 KB** per file.

## Debugging / Error

#### Mengapa saya mendapatkan kode ERR-C "NB-BXIUA"?
> Header `User-Agent` yang kosong atau palsu akan diblokir. Pastikan request-mu menyertakan header `User-Agent` yang valid serta hindari memalsukan string browser atau menyamar sebagai crawler terkenal. Silakan baca [dokumentasi User-Agent](/id/getting-started/api-reference.html#user-agent) kami untuk format yang direkomendasikan.

#### Mengapa saya mendapatkan kode ERR-C "NB-BCFSD"?
> `NB-BCFSD` berarti akses API-mu diblokir oleh sistem deteksi penyalahgunaan otomatis kami. Jika kamu merasa ini adalah kekeliruan, silakan hubungi kami melalui [server Discord](https://nekos.best/discord) atau kirim email ke **[contact@nekos.best](mailto:contact@nekos.best)**.

#### Mengapa saya mendapatkan kode ERR-C "NB-BXASN"?
> `NB-BXASN` berarti ASN (Autonomous System Number) milikmu diblokir di sistem kami. Agar bisa mengirim request, alamat IP-mu perlu dimasukkan ke whitelist terlebih dahulu. Silakan hubungi kami melalui [server Discord](https://nekos.best/discord) atau kirim email ke **[contact@nekos.best](mailto:contact@nekos.best)**.

#### Saya menggunakan VPN atau proxy, tetapi sekarang tidak bisa mengirim request lagi.
> Penggunaan VPN dan proxy diperbolehkan, namun ada beberapa batasan penting yang perlu diperhatikan. Alamat IP-nya digunakan bersama oleh banyak orang, sehingga satu pengguna bermasalah saja bisa membuat IP tersebut diblokir dan berdampak pada semua pengguna lain. IP VPN/proxy yang diblokir akan diblokir secara permanen tanpa pengecualian, dan memiliki kemungkinan jauh lebih tinggi untuk ditandai dibanding IP biasa. Jika kamu bergantung pada VPN/proxy dan kehilangan akses, mohon maaf kami tidak dapat membantu membukanya kembali.
