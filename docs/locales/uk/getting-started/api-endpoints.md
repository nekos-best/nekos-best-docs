---
outline: [2, 3]
---

# Ендпоінти API

## Базовий URL

```
https://nekos.best/api/:version
```

Замініть `:version` однією з підтримуваних версій нижче.

## Версії

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">Версія</div>
    <div class="version-col">Статус</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">Поточна та підтримувана</div>
  </div>
</div>

::: warning Важливо
Перед відправкою запитів, будь ласка, ознайомтеся з [документацією User-Agent](/uk/getting-started/api-reference.html#user-agent). Усі запити повинні містити правильно сформований заголовок `User-Agent`.
:::

## Ендпоінти

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

Повертає всі доступні категорії API та відповідні формати файлів.

#### Приклад

https://nekos.best/api/v2/endpoints
```json
{
  "neko": { "format": "png" },
  "...": {},
  "wink": { "format": "gif" }
}
```

::: tip
Використовуйте цей ендпоінт для динамічного виявлення підтримуваних категорій замість їх жорсткого кодування.
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

Повертає випадкове зображення або GIF із вказаної категорії, включаючи метадані.

#### Параметри запиту

| Назва  | Тип    | Обов'язковий | Опис                                           |
| ------ | ------ | ------------ | ---------------------------------------------- |
| amount | number | Ні           | Кількість результатів для повернення (`1 ≤ X ≤ 20`) |

За замовчуванням `1`, якщо не вказано.

#### Приклад (один результат)

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

#### Приклад (кілька результатів)

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

Пошук зображень або GIF за метаданими, такими як ім'я автора чи назва джерела.

#### Параметри запиту

| Назва    | Тип    | Обов'язковий | Опис                                   |
| -------- | ------ | ------------ | -------------------------------------- |
| query    | string | Так          | Пошукова фраза                         |
| type     | enum   | Так          | `1` = зображення, `2` = GIF            |
| category | string | Ні           | Обмежити результати певною категорією |
| amount   | number | Ні           | Кількість результатів (`1 ≤ X ≤ 20`)   |

#### Приклад (пошук зображень)

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

#### Приклад (пошук GIF за категорією)

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

Отримує конкретний ресурс напряму.

#### Параметри шляху

| Назва    | Опис                     |
| -------- | ------------------------ |
| category | Назва категорії          |
| filename | Ім'я файлу ресурсу (UUID)|
| format   | Формат файлу (`png`, `gif`) |

::: info
Метадані для цього ендпоінту повертаються через **URL-кодовані заголовки HTTP-відповіді**.
:::

**Доступні заголовки:**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### Приклад

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**Відповідь:** Двійкові дані зображення або GIF
