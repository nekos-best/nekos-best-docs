---
outline: [2, 3]
---

# Эндпоинты API

## Базовый URL

```
https://nekos.best/api/:version
```

Замените `:version` на одну из поддерживаемых версий, указанных ниже.

## Версии

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">Версия</div>
    <div class="version-col">Статус</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">Текущая и поддерживаемая</div>
  </div>
</div>

::: warning Важно
Перед отправкой запросов, пожалуйста, ознакомьтесь с [документацией по User-Agent](/ru/getting-started/api-reference.html#user-agent). Все запросы должны содержать корректно сформированный заголовок `User-Agent`.
:::

## Эндпоинты

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

Возвращает список всех доступных категорий API и соответствующие форматы файлов.

#### Пример

https://nekos.best/api/v2/endpoints
```json
{
  "neko": { "format": "png" },
  "...": {},
  "wink": { "format": "gif" }
}
```

::: tip Совет
Используйте этот эндпоинт для динамического определения поддерживаемых категорий вместо их жесткого кодирования.
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

Возвращает случайное изображение или GIF из указанной категории вместе с метаданными.

#### Параметры запроса (Query Parameters)

| Имя    | Тип    | Обязательный | Описание                                            |
| ------ | ------ | ------------ | --------------------------------------------------- |
| amount | number | Нет          | Количество возвращаемых результатов (`1 ≤ X ≤ 20`)  |

По умолчанию `1`, если не указано иное.

#### Пример (один результат)

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

#### Пример (несколько результатов)

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

Поиск изображений или GIF-анимаций по метаданным, таким как имя автора или название аниме.

#### Параметры запроса (Query Parameters)

| Имя      | Тип    | Обязательный | Описание                                           |
| -------- | ------ | ------------ | -------------------------------------------------- |
| query    | string | Да           | Поисковый запрос                                   |
| type     | enum   | Да           | `1` = Изображения, `2` = GIF-анимации              |
| category | string | Нет          | Ограничить поиск определенной категорией          |
| amount   | number | Нет          | Количество результатов (`1 ≤ X ≤ 20`)              |

#### Пример (поиск изображений)

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

#### Пример (поиск GIF с указанием категории)

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

Прямое получение конкретного файла.

#### Параметры пути (Path Parameters)

| Имя      | Описание                      |
| -------- | ----------------------------- |
| category | Название категории            |
| filename | Имя файла ресурса (UUID)      |
| format   | Формат файла (`png`, `gif`)   |

::: info Информация
Метаданные для этого эндпоинта передаются через **URL-закодированные заголовки HTTP-ответа**.
:::

**Доступные заголовки:**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### Пример

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**Ответ:** Двоичные данные изображения или GIF
