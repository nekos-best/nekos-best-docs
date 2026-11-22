---
outline: [2, 3]
---

# Points de terminaison API

## URL de base

```
https://nekos.best/api/:version
```

Remplacez `:version` par l'une des versions prises en charge ci-dessous.

## Versions

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">Version</div>
    <div class="version-col">Statut</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">Actuelle & maintenue</div>
  </div>
</div>

::: tip
Nous vous recommandons de définir un en-tête `User-Agent` personnalisé lors de vos requêtes. Consultez la [documentation User-Agent](/fr/getting-started/api-reference.html#user-agent) pour connaître le format conseillé.
:::

## Points de terminaison

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

Renvoie toutes les catégories disponibles dans l'API ainsi que leur format de fichier associé.

#### Exemple

https://nekos.best/api/v2/endpoints
```json
{
  "neko": { "format": "png" },
  "...": {},
  "wink": { "format": "gif" }
}
```

::: tip
Utilisez ce point de terminaison pour découvrir dynamiquement les catégories prises en charge au lieu de les coder en dur.
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

Renvoie une image ou un GIF aléatoire issu de la catégorie spécifiée, accompagné de ses métadonnées.

#### Paramètres de requête

| Nom    | Type   | Requis | Description                                       |
| ------ | ------ | ------ | ------------------------------------------------- |
| amount | number | Non    | Nombre de résultats à renvoyer (`1 ≤ X ≤ 20`)     |

Valeur par défaut : `1` si non spécifié.

#### Exemple (résultat unique)

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

#### Exemple (résultats multiples)

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

Recherche des images ou des GIFs à partir de métadonnées telles que le nom d'un artiste ou le titre d'une œuvre.

#### Paramètres de requête

| Nom      | Type   | Requis | Description                                 |
| -------- | ------ | ------ | ------------------------------------------- |
| query    | string | Oui    | Terme de recherche                          |
| type     | enum   | Oui    | `1` = images, `2` = GIFs                    |
| category | string | Non    | Restreindre les résultats à une catégorie   |
| amount   | number | Non    | Nombre de résultats (`1 ≤ X ≤ 20`)          |

#### Exemple (recherche d'images)

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

#### Exemple (recherche de GIFs avec catégorie)

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

Récupère directement une ressource spécifique.

#### Paramètres de chemin

| Nom      | Description                          |
| -------- | ------------------------------------ |
| category | Nom de la catégorie                  |
| filename | Nom du fichier de la ressource (UUID)|
| format   | Format du fichier (`png`, `gif`)     |

::: info
Les métadonnées de ce point de terminaison sont renvoyées dans des **en-têtes de réponse HTTP encodés en URL**.
:::

**En-têtes disponibles :**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### Exemple

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**Réponse :** Données binaires de l'image ou du GIF
