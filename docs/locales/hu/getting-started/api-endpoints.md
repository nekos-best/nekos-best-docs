---
outline: [2, 3]
---

# API végpontok

## Alap URL

```
https://nekos.best/api/:version
```

Cseréld le a `:version` részt az alábbi támogatott verziók egyikére.

## Verziók

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">Verzió</div>
    <div class="version-col">Állapot</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">Aktuális és karbantartott</div>
  </div>
</div>

::: tip
Javasoljuk, hogy minden kérésnél adj meg egy saját `User-Agent` fejlécet. Az ajánlott formátumért nézd meg a [User-Agent dokumentációt](/hu/getting-started/api-reference.html#user-agent).
:::

## Végpontok

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

Visszaadja az összes elérhető API kategóriát és a hozzájuk tartozó fájlformátumokat.

#### Példa

https://nekos.best/api/v2/endpoints
```json
{
  "neko": { "format": "png" },
  "...": {},
  "wink": { "format": "gif" }
}
```

::: tip
Használd ezt a végpontot a támogatott kategóriák dinamikus lekéréséhez, ahelyett hogy beégetnéd őket a kódba.
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

Visszaad egy véletlenszerű képet vagy GIF-et a megadott kategóriából, a metaadatokkal együtt.

#### Lekérdezési paraméterek

| Név    | Típus  | Kötelező | Leírás                                       |
| ------ | ------ | -------- | -------------------------------------------- |
| amount | number | Nem      | A visszaadandó találatok száma (`1 ≤ X ≤ 20`) |

Alapértelmezés szerint `1`, ha nincs megadva.

#### Példa (egyetlen találat)

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

#### Példa (több találat)

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

Képek vagy GIF-ek keresése metaadatok – például alkotónevek vagy forráscímek – alapján.

#### Lekérdezési paraméterek

| Név      | Típus  | Kötelező | Leírás                                    |
| -------- | ------ | -------- | ----------------------------------------- |
| query    | string | Igen     | Keresési kifejezés                        |
| type     | enum   | Igen     | `1` = képek, `2` = GIF-ek                 |
| category | string | Nem      | Találatok szűrése egy adott kategóriára   |
| amount   | number | Nem      | Találatok száma (`1 ≤ X ≤ 20`)            |

#### Példa (képkeresés)

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

#### Példa (GIF-keresés kategóriával)

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

Egy konkrét fájl közvetlen lekérése.

#### Útvonalparaméterek

| Név      | Leírás                     |
| -------- | -------------------------- |
| category | Kategória neve             |
| filename | Fájlnév (UUID)             |
| format   | Fájlformátum (`png`, `gif`) |

::: info
Ennél a végpontnál a metaadatokat **URL-kódolt HTTP válaszfejlécekben** adjuk vissza.
:::

**Elérhető fejlécek:**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### Példa

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**Válasz:** Bináris kép- vagy GIF-adat
