---
outline: [2, 3]
---

# Эндпоинты API

## Базовый URL

```
https://nekos.best/api/:version
```

Замените `:version` на одну из поддерживаемых версий ниже.

## Версии

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">Версия</div>
    <div class="version-col">Статус</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">Актуальная и поддерживается</div>
  </div>
</div>

::: tip Совет
Рекомендуем указывать собственный заголовок `User-Agent` при отправке запросов. Подробнее о рекомендуемом формате см. в [документации по User-Agent](/ru/getting-started/api-reference.html#user-agent).
:::

## Эндпоинты

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

Возвращает все доступные категории API и соответствующие им форматы файлов.

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
Используйте этот эндпоинт для динамического получения списка поддерживаемых категорий вместо того, чтобы жёстко прописывать их в коде.
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

Возвращает случайное изображение или GIF из указанной категории вместе с метаданными.

#### Параметры запроса

| Имя    | Тип    | Обязательный | Описание                                           |
| ------ | ------ | ------------ | -------------------------------------------------- |
| amount | number | Нет          | Количество возвращаемых результатов (`1 ≤ X ≤ 20`) |

Если параметр не указан, по умолчанию используется `1`.

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

Поиск изображений или GIF по метаданным, таким как имя автора или название источника.

#### Параметры запроса

| Имя      | Тип    | Обязательный | Описание                                 |
| -------- | ------ | ------------ | ---------------------------------------- |
| query    | string | Да           | Поисковый запрос                         |
| type     | enum   | Да           | `1` = изображения, `2` = GIF             |
| category | string | Нет          | Ограничить результаты одной категорией   |
| amount   | number | Нет          | Количество результатов (`1 ≤ X ≤ 20`)    |

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

Возвращает конкретный файл напрямую.

#### Параметры пути

| Имя      | Описание                    |
| -------- | --------------------------- |
| category | Название категории          |
| filename | Имя файла (UUID)            |
| format   | Формат файла (`png`, `gif`) |

::: info Информация
Метаданные для этого эндпоинта возвращаются через **URL-кодированные заголовки HTTP-ответа**.
:::

**Доступные заголовки:**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### Пример

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**Ответ:** Бинарные данные изображения или GIF
