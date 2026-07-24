---
outline: [2, 3]
---

# API Referansı

## İstek Sınırlamaları (Rate Limits)

Her yanıt, istek sınırlarını takip etmenize ve bunlara uymanıza yardımcı olmak için aşağıdaki başlıkları içerir:

| Başlık                  | Açıklama                                                 |
| ----------------------- | -------------------------------------------------------- |
| `x-rate-limit-limit`    | Mevcut istek sınırı penceresinin süresi (ör. `1m`)       |
| `x-rate-limit-remaining`| Mevcut pencerede kalan istek sayısı                      |
| `x-rate-limit-reset`    | Mevcut pencerenin sıfırlanacağı ISO 8601 zaman damgası   |

### Sınırlar

| Uç Nokta      | Sınır                                       |
| ------------- | ------------------------------------------- |
| `/search`     | 5 saniyede 7 istek                          |
| `/:category`  | Dakikada 200 istek (kategori başına)        |

## User-Agent

Tüm istekler bir `User-Agent` başlığı içermelidir. Lütfen şu formatı kullanın: `UYGULAMA_ADI (İLETİŞİM_BİLGİSİ)`.\
Örneğin: `NekoApp (https://example.com)` veya `NekoApp (dev@example.com)`

**İsimlendirme Kuralları:**

* **Belirli olun:** "Discord Bot", "WhatsApp Bot" veya "Telegram Bot" gibi genel isimler kullanmayın. Uygulamanızın kendine özgü bir adı olmalıdır.
* **Yer tutuculardan kaçının:** `test`, `bot` veya yukarıdaki örnek değerler gibi dizeleri kullanmayın.
* **Varsayılan kütüphane değerlerini kullanmayın:** `python-requests`, `okhttp`, `axios`, `node` veya `Go-http-client` gibi varsayılan kütüphane ifadelerini kullanmaktan kaçının.

**İletişim Bilgisi Seçenekleri:**\
İletişim bilgisinin geleneksel bir web sitesi olması zorunlu değildir. Aşağıdakilerden herhangi biri geçerli kimlik sağlama yöntemleridir:

* Doğrudan bir iletişim e-posta adresi.
* Proje web sitesi veya **herkese açık** depo URL'si (ör. GitHub, GitLab).
* Bot davet bağlantısı veya tanıtım sayfası.
* Bir liste URL'si (ör. top.gg veya benzeri dizinler).

**Taklit ve Kimliğe Bürünme:**

* **Tarayıcı dizelerini taklit etmeyin.** `Mozilla/5.0 ...` formatı yalnızca gerçek web tarayıcıları ve Cloudflare tarafından doğrulanmış botlar için ayrılmıştır.
* **`Googlebot` veya `Bingbot` gibi bilinen arama motoru botlarının kimliğine bürünmeyin.**

*Bu kurallara uymamak ve genel, varsayılan veya taklit değerler kullanmak büyük olasılıkla isteklerinizin engellenmesiyle sonuçlanacaktır.*

## Kategoriler

Kategoriler, API tarafından döndürülen içerik türünü tanımlar. Her kategori sabit bir dosya formatıyla eşleşir.

### Görseller

<div class="category-grid">
  <span class="category-chip">husbando</span>
  <span class="category-chip">kitsune</span>
  <span class="category-chip">neko</span>
  <span class="category-chip">waifu</span>
</div>

### GIF'ler

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

### Yanıt Alanları

| Tür      | Alanlar                                     |
| -------- | ------------------------------------------- |
| Görseller| `artist_name`, `artist_href`, `source_url`  |
| GIF'ler  | `anime_name`                                |

`url` ve `dimensions` alanları her iki türde de mevcuttur.
