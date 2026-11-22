---
outline: [2, 3]
---

# API Uç Noktaları

## Temel URL

```
https://nekos.best/api/:version
```

`:version` kısmını aşağıda listelenen desteklenen sürümlerden biriyle değiştirin.

## Sürümler

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">Sürüm</div>
    <div class="version-col">Durum</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">Güncel ve Destekleniyor</div>
  </div>
</div>

::: tip
İstek gönderirken özel bir `User-Agent` başlığı belirlemenizi öneririz. Önerilen biçim için [User-Agent dokümantasyonuna](/tr/getting-started/api-reference.html#user-agent) göz atın.
:::

## Uç Noktalar

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

Mevcut tüm API kategorilerini ve bunlara karşılık gelen dosya biçimlerini döndürür.

#### Örnek

https://nekos.best/api/v2/endpoints
```json
{
  "neko": { "format": "png" },
  "...": {},
  "wink": { "format": "gif" }
}
```

::: tip
Desteklenen kategorileri koda sabit olarak yazmak yerine dinamik olarak almak için bu uç noktayı kullanın.
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

Belirtilen kategoriden rastgele bir görsel veya GIF'i meta verileriyle birlikte döndürür.

#### Sorgu Parametreleri

| Ad     | Tür    | Zorunlu | Açıklama                                 |
| ------ | ------ | ------- | ---------------------------------------- |
| amount | number | Hayır   | Döndürülecek sonuç sayısı (`1 ≤ X ≤ 20`) |

Belirtilmediğinde varsayılan olarak `1` kullanılır.

#### Örnek (tek sonuç)

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

#### Örnek (birden fazla sonuç)

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

Sanatçı adı veya kaynak başlığı gibi meta verilere göre görsel ya da GIF aramanızı sağlar.

#### Sorgu Parametreleri

| Ad       | Tür    | Zorunlu | Açıklama                                |
| -------- | ------ | ------- | --------------------------------------- |
| query    | string | Evet    | Arama ifadesi                           |
| type     | enum   | Evet    | `1` = görseller, `2` = GIF'ler          |
| category | string | Hayır   | Sonuçları belirli bir kategoriyle sınırla |
| amount   | number | Hayır   | Sonuç sayısı (`1 ≤ X ≤ 20`)             |

#### Örnek (görsel araması)

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

#### Örnek (kategori ile GIF araması)

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

Belirli bir dosyayı doğrudan döndürür.

#### Yol Parametreleri

| Ad       | Açıklama                     |
| -------- | ---------------------------- |
| category | Kategori adı                 |
| filename | Dosya adı (UUID)             |
| format   | Dosya biçimi (`png`, `gif`)  |

::: info
Bu uç noktanın meta verileri **URL kodlu HTTP yanıt başlıkları** üzerinden döndürülür.
:::

**Mevcut başlıklar:**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### Örnek

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**Yanıt:** İkili (binary) görsel veya GIF verisi
