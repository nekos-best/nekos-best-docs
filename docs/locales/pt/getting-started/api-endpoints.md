---
outline: [2, 3]
---

# Endpoints da API

## URL base

```
https://nekos.best/api/:version
```

Substitua `:version` por uma das versões suportadas abaixo.

## Versões

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">Versão</div>
    <div class="version-col">Status</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">Atual & Mantida</div>
  </div>
</div>

::: warning Importante
Antes de fazer qualquer requisição, leia a [documentação do User-Agent](/pt/getting-started/api-reference.html#user-agent). Todas as requisições devem incluir um cabeçalho `User-Agent` devidamente formatado.
:::

## Endpoints

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

Retorna todas as categorias disponíveis da API e seus formatos de arquivo associados.

#### Exemplo

https://nekos.best/api/v2/endpoints
```json
{
  "neko": { "format": "png" },
  "...": {},
  "wink": { "format": "gif" }
}
```

::: tip
Use este endpoint para descobrir dinamicamente as categorias suportadas em vez de defini-las estaticamente no código.
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

Retorna uma imagem ou GIF aleatório da categoria especificada, incluindo metadados.

#### Parâmetros de consulta

| Nome   | Tipo   | Obrigatório | Descrição                                          |
| ------ | ------ | ----------- | -------------------------------------------------- |
| amount | number | Não         | Número de resultados a retornar (`1 ≤ X ≤ 20`)     |

Padrão como `1` se não especificado.

#### Exemplo (resultado único)

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

#### Exemplo (múltiplos resultados)

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

Pesquise imagens ou GIFs usando metadados, como nomes de artistas ou títulos de origem.

#### Parâmetros de consulta

| Nome     | Tipo   | Obrigatório | Descrição                                       |
| -------- | ------ | ----------- | ----------------------------------------------- |
| query    | string | Sim         | Termo de pesquisa                               |
| type     | enum   | Sim         | `1` = imagens, `2` = GIFs                       |
| category | string | Não         | Restringir resultados a uma categoria           |
| amount   | number | Não         | Número de resultados (`1 ≤ X ≤ 20`)             |

#### Exemplo (pesquisa de imagem)

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

#### Exemplo (pesquisa de GIF com categoria)

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

Obtém um recurso específico diretamente.

#### Parâmetros de caminho

| Nome     | Descrição                          |
| -------- | ---------------------------------- |
| category | Nome da categoria                  |
| filename | Nome do arquivo do recurso (UUID)  |
| format   | Formato do arquivo (`png`, `gif`)  |

::: info
Os metadados para este endpoint são retornados por meio de **cabeçalhos de resposta HTTP codificados em URL**.
:::

**Cabeçalhos disponíveis:**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### Exemplo

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**Resposta:** Dados binários de imagem ou GIF
