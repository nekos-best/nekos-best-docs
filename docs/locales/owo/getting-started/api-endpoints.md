---
outline: [2, 3]
---

# API Endpoints nya~

## Base UWL OwO

```
https://nekos.best/api/:version
```

Wepwace `:version` with one of the suppowted vewsions bewow >w<.

## Vewsions UwU

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">Vewsion</div>
    <div class="version-col">Status</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">Cuwwent & Maintained nya~</div>
  </div>
</div>

::: warning Impowtant >w<
Befowe making any weqwesties, pwease wead the [User-Agent documentawion](/owo/getting-started/api-reference.html#user-agent) OwO. Aww weqwesties must incwude a pwopewwy fowmatted `User-Agent` headew nya~!
:::

## Endpoints UwU

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

Wetuwns aww avaiwabwe API categowies and meow-associated fiwe fowmats >w< !

#### Exampwe nya~

https://nekos.best/api/v2/endpoints
```json
{
  "neko": { "format": "png" },
  "...": {},
  "wink": { "format": "gif" }
}
```

::: tip nya~
Use this endpoint to dynamicawwy discovew suppowted categowies instead of hawdcoding them >w< !
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

Wetuwns a wandom image ow GIF fwom the meow-specified categowy, incwuding metadata OwO!

#### Qwewy Pawametews >w<

| Name   | Type   | Wequiwed | Descwiption                                |
| ------ | ------ | -------- | ------------------------------------------ |
| amount | number | No       | Numbew of wesults to wetuwn (`1 ≤ X ≤ 20`) |

Defauwts to `1` if not specified nya~.

#### Exampwe (singwe wesult >w<)

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

#### Exampwe (muwtipwe wesults UwU)

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

Seawch fow images ow GIFs using metadata such as awtist names ow souwce titwes OwO!

#### Qwewy Pawametews nya~

| Name     | Type   | Wequiwed | Descwiption                      |
| -------- | ------ | -------- | -------------------------------- |
| query    | string | Yes      | Seawch phwase                     |
| type     | enum   | Yes      | `1` = images, `2` = GIFs         |
| category | string | No       | Westwict wesults to a categowy   |
| amount   | number | No       | Numbew of wesults (`1 ≤ X ≤ 20`) |

#### Exampwe (image seawch >w<)

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

#### Exampwe (GIF seawch with categowy UwU)

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

Wetwieves a specific asset diwectwy OwO!

#### Path Pawametews nya~

| Name     | Descwiption                |
| -------- | -------------------------- |
| category | Categowy name              |
| filename | Asset fiwename (UUID)      |
| format   | Fiwe fowmat (`png`, `gif`) |

::: info
Metadata fow this endpoint is wetuwned via **UWL-encoded HTTP wesponse headews** >w<.
:::

**Avaiwabwe headews OwO:**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### Exampwe nya~

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**Wesponse:** Binawy image ow GIF data >w<
