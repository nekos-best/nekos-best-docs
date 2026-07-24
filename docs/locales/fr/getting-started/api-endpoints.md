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

::: warning Important
Avant d'effectuer des requêtes, veuillez lire la [documentation sur le User-Agent](/fr/getting-started/api-reference.html#user-agent). Toutes les requêtes doivent inclure un en-tête `User-Agent` correctement formaté.
:::

## Points de terminaison

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

Retourne toutes les catégories d'API disponibles et leurs formats de fichiers associés.

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

Retourne une image ou un GIF aléatoire à partir de la catégorie spécifiée, incluant les métadonnées.

#### Paramètres de requête

| Nom    | Type   | Requis | Description                                           |
| ------ | ------ | ------ | ----------------------------------------------------- |
| amount | number | Non    | Nombre de résultats à retourner (`1 ≤ X ≤ 20`)        |

Défini par défaut sur `1` si non spécifié.

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

Recherchez des images ou des GIFs à l'aide de métadonnées telles que les noms d'artistes ou les titres des sources.

#### Paramètres de requête

| Nom      | Type   | Requis | Description                                     |
| -------- | ------ | ------ | ----------------------------------------------- |
| query    | string | Oui    | Terme de recherche                              |
| type     | enum   | Oui    | `1` = images, `2` = GIFs                        |
| category | string | Non    | Restreindre les résultats à une catégorie       |
| amount   | number | Non    | Nombre de résultats (`1 ≤ X ≤ 20`)              |

#### Exemple (recherche d'image)

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

#### Exemple (recherche GIF avec catégorie)

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

| Nom      | Description                        |
| -------- | ---------------------------------- |
| category | Nom de la catégorie                |
| filename | Nom de fichier de la ressource (UUID) |
| format   | Format de fichier (`png`, `gif`)    |

::: info
Les métadonnées pour ce point de terminaison sont retournées via des **en-têtes de réponse HTTP encodés en URL**.
:::

**En-têtes disponibles :**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### Exemple

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**Réponse :** Données binaires d'image ou de GIF
