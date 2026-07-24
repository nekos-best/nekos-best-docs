---
outline: [2, 3]
---

# API Uç Noktaları

## Temel URL (Base URL)

```
https://nekos.best/api/:version
```

`:version` kısmını aşağıdaki desteklenen sürümlerden biriyle değiştirin.

## Sürümler

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">Sürüm</div>
    <div class="version-col">Durum</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">Güncel & Destekleniyor</div>
  </div>
</div>

::: warning Önemli
Herhangi bir istekte bulunmadan önce lütfen [User-Agent dokümantasyonunu](/tr/getting-started/api-reference.html#user-agent) okuyun. Tüm istekler doğru biçimlendirilmiş bir `User-Agent` başlığı içermelidir.
:::

## Uç Noktalar

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

Mevcut tüm API kategorilerini ve bunlarla ilişkili dosya formatlarını döndürür.

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
Kategorileri koda sabit yazmak yerine desteklenen kategorileri dinamik olarak keşfetmek için bu uç noktayı kullanın.
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

Belirtilen kategoriden rastgele bir görsel veya GIF'i meta verileriyle birlikte döndürür.

#### Sorgu Parametreleri (Query Parameters)

| İsim   | Tür    | Gerekli | Açıklama                                   |
| ------ | ------ | ------- | ------------------------------------------ |
| amount | number | Hayır   | Döndürülecek sonuç sayısı (`1 ≤ X ≤ 20`)   |

Belirtilmezse varsayılan olarak `1` değerini alır.

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

Sanatçı isimleri veya kaynak başlıkları gibi meta verileri kullanarak görseller veya GIF'ler arasında arama yapın.

#### Sorgu Parametreleri (Query Parameters)

| İsim     | Tür    | Gerekli | Açıklama                          |
| -------- | ------ | ------- | --------------------------------- |
| query    | string | Evet    | Arama ifadesi                     |
| type     | enum   | Evet    | `1` = görseller, `2` = GIF'ler    |
| category | string | Hayır   | Sonuçları bir kategoriyle sınırla |
| amount   | number | Hayır   | Sonuç sayısı (`1 ≤ X ≤ 20`)       |

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

Belirli bir dosyayı doğrudan alır.

#### Yol Parametreleri (Path Parameters)

| İsim     | Açıklama                   |
| -------- | -------------------------- |
| category | Kategori adı               |
| filename | Öğe dosya adı (UUID)       |
| format   | Dosya formatı (`png`, `gif`)|

::: info
Bu uç nokta için meta veriler **URL ile kodlanmış HTTP yanıt başlıkları** aracılığıyla döndürülür.
:::

**Mevcut başlıklar:**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### Örnek

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**Yanıt:** İkili görsel veya GIF verisi
