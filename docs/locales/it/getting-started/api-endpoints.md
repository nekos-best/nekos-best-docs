---
outline: [2, 3]
---

# Endpoint API

## URL Base

```
https://nekos.best/api/:version
```

Sostituisci `:version` con una delle versioni supportate di seguito.

## Versioni

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">Versione</div>
    <div class="version-col">Stato</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">Attuale & Mantenuta</div>
  </div>
</div>

::: warning Importante
Prima di effettuare qualsiasi richiesta, leggi la [documentazione sul User-Agent](/it/getting-started/api-reference.html#user-agent). Tutte le richieste devono includere un'intestazione `User-Agent` formattata correttamente.
:::

## Endpoint

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

Restituisce tutte le categorie API disponibili e i relativi formati di file.

#### Esempio

https://nekos.best/api/v2/endpoints
```json
{
  "neko": { "format": "png" },
  "...": {},
  "wink": { "format": "gif" }
}
```

::: tip
Utilizza questo endpoint per scoprire dinamicamente le categorie supportate invece di codificarle direttamente.
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

Restituisce un'immagine o GIF casuale dalla categoria specificata, inclusi i metadati.

#### Parametri di Query

| Nome   | Tipo   | Obbligatorio | Descrizione                                |
| ------ | ------ | ------------ | ------------------------------------------ |
| amount | number | No           | Numero di risultati da restituire (`1 ≤ X ≤ 20`) |

Il valore predefinito è `1` se non specificato.

#### Esempio (risultato singolo)

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

#### Esempio (risultati multipli)

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

Cerca immagini o GIF utilizzando metadati come i nomi degli artisti o i titoli delle fonti.

#### Parametri di Query

| Nome     | Tipo   | Obbligatorio | Descrizione                      |
| -------- | ------ | ------------ | -------------------------------- |
| query    | string | Sì           | Frase di ricerca                 |
| type     | enum   | Sì           | `1` = immagini, `2` = GIF        |
| category | string | No           | Limita i risultati a una categoria |
| amount   | number | No           | Numero di risultati (`1 ≤ X ≤ 20`) |

#### Esempio (ricerca immagini)

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

#### Esempio (ricerca GIF con categoria)

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

Recupera direttamente una risorsa specifica.

#### Parametri del Percorso

| Nome     | Descrizione                |
| -------- | -------------------------- |
| category | Nome della categoria       |
| filename | Nome del file della risorsa (UUID) |
| format   | Formato del file (`png`, `gif`) |

::: info
I metadati per questo endpoint vengono restituiti tramite **intestazioni di risposta HTTP codificate in URL**.
:::

**Intestazioni disponibili:**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### Esempio

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**Risposta:** Dati binari dell'immagine o GIF
