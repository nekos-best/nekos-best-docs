---
outline: [2, 3]
---

# Endpoints de la API

## URL base

```
https://nekos.best/api/:version
```

Reemplaza `:version` por una de las versiones compatibles indicadas abajo.

## Versiones

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">Versión</div>
    <div class="version-col">Estado</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">Actual y mantenida</div>
  </div>
</div>

::: tip
Te recomendamos configurar un encabezado `User-Agent` personalizado en tus solicitudes. Consulta la [documentación de User-Agent](/es/getting-started/api-reference.html#user-agent) para ver el formato sugerido.
:::

## Endpoints

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

Devuelve todas las categorías disponibles de la API y sus formatos de archivo asociados.

#### Ejemplo

https://nekos.best/api/v2/endpoints
```json
{
  "neko": { "format": "png" },
  "...": {},
  "wink": { "format": "gif" }
}
```

::: tip
Usa este endpoint para obtener dinámicamente las categorías disponibles en lugar de definirlas manualmente en tu código.
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

Devuelve una imagen o GIF aleatorio de la categoría especificada junto con sus metadatos.

#### Parámetros de consulta

| Nombre | Tipo   | Requerido | Descripción                                  |
| ------ | ------ | --------- | -------------------------------------------- |
| amount | number | No        | Número de resultados a devolver (`1 ≤ X ≤ 20`) |

El valor por defecto es `1` si no se especifica.

#### Ejemplo (resultado único)

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

#### Ejemplo (múltiples resultados)

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

Busca imágenes o GIFs usando metadatos como el nombre del artista o el título de origen.

#### Parámetros de consulta

| Nombre   | Tipo   | Requerido | Descripción                             |
| -------- | ------ | --------- | --------------------------------------- |
| query    | string | Sí        | Término de búsqueda                     |
| type     | enum   | Sí        | `1` = imágenes, `2` = GIFs              |
| category | string | No        | Restringe los resultados a una categoría |
| amount   | number | No        | Número de resultados (`1 ≤ X ≤ 20`)     |

#### Ejemplo (búsqueda de imágenes)

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

#### Ejemplo (búsqueda de GIFs con categoría)

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

Obtiene un recurso específico directamente.

#### Parámetros de ruta

| Nombre   | Descripción                           |
| -------- | ------------------------------------- |
| category | Nombre de la categoría                |
| filename | Nombre del archivo del recurso (UUID) |
| format   | Formato de archivo (`png`, `gif`)     |

::: info
Los metadatos de este endpoint se devuelven mediante **encabezados de respuesta HTTP codificados en URL**.
:::

**Encabezados disponibles:**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### Ejemplo

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**Respuesta:** Datos binarios de la imagen o GIF
