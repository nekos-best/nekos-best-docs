---
outline: [2, 3]
---

# API-Endpunkte

## Basis-URL

```
https://nekos.best/api/:version
```

Ersetzen Sie `:version` durch eine der unten unterstützten Versionen.

## Versionen

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">Version</div>
    <div class="version-col">Status</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">Aktuell & Gewartet</div>
  </div>
</div>

::: warning Wichtig
Bevor Sie Anfragen stellen, lesen Sie bitte die [User-Agent-Dokumentation](/de/getting-started/api-reference.html#user-agent). Alle Anfragen müssen einen ordnungsgemäß formatierten `User-Agent`-Header enthalten.
:::

## Endpunkte

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

Gibt alle verfügbaren API-Kategorien und deren zugehörige Dateiformate zurück.

#### Beispiel

https://nekos.best/api/v2/endpoints
```json
{
  "neko": { "format": "png" },
  "...": {},
  "wink": { "format": "gif" }
}
```

::: tip
Verwenden Sie diesen Endpunkt, um unterstützte Kategorien dynamisch zu ermitteln, anstatt sie fest im Code zu hinterlegen.
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

Gibt ein zufälliges Bild oder GIF aus der angegebenen Kategorie inklusive Metadaten zurück.

#### Abfrageparameter (Query Parameters)

| Name   | Typ    | Erforderlich | Beschreibung                                     |
| ------ | ------ | ------------ | ------------------------------------------------ |
| amount | number | Nein         | Anzahl der zurückzugebenden Ergebnisse (`1 ≤ X ≤ 20`) |

Standardmäßig `1`, falls nicht angegeben.

#### Beispiel (einzelnes Ergebnis)

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

#### Beispiel (mehrere Ergebnisse)

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

Suchen Sie nach Bildern oder GIFs anhand von Metadaten wie Künstlernamen oder Quellentiteln.

#### Abfrageparameter (Query Parameters)

| Name     | Typ    | Erforderlich | Beschreibung                                      |
| -------- | ------ | ------------ | ------------------------------------------------- |
| query    | string | Ja           | Suchbegriff                                       |
| type     | enum   | Ja           | `1` = Bilder, `2` = GIFs                          |
| category | string | Nein         | Ergebnisse auf eine Kategorie beschränken         |
| amount   | number | Nein         | Anzahl der Ergebnisse (`1 ≤ X ≤ 20`)              |

#### Beispiel (Bildsuche)

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

#### Beispiel (GIF-Suche mit Kategorie)

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

Ruft eine bestimmte Datei direkt ab.

#### Pfadparameter

| Name     | Beschreibung               |
| -------- | -------------------------- |
| category | Kategoriename              |
| filename | Dateiname des Assets (UUID)|
| format   | Dateiformat (`png`, `gif`) |

::: info
Metadaten für diesen Endpunkt werden über **URL-kodierte HTTP-Antwort-Header** zurückgegeben.
:::

**Verfügbare Header:**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### Beispiel

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**Antwort:** Binäre Bild- oder GIF-Daten
