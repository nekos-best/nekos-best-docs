---
outline: [2, 3]
---

# Ендпоінти API

## Базовий URL

```
https://nekos.best/api/:version
```

Замініть `:version` на одну з підтримуваних версій нижче.

## Версії

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">Версія</div>
    <div class="version-col">Статус</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">Актуальна та підтримується</div>
  </div>
</div>

::: tip
Рекомендуємо вказувати власний заголовок `User-Agent` під час надсилання запитів. Рекомендований формат див. у [документації User-Agent](/uk/getting-started/api-reference.html#user-agent).
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
Використовуйте цей ендпоінт для динамічного отримання підтримуваних категорій замість того, щоб жорстко прописувати їх у коді.
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

Повертає випадкове зображення або GIF із вказаної категорії разом із метаданими.

#### Параметри запиту

| Назва  | Тип    | Обов'язковий | Опис                                               |
| ------ | ------ | ------------ | -------------------------------------------------- |
| amount | number | Ні           | Кількість результатів у відповіді (`1 ≤ X ≤ 20`)   |

Якщо параметр не вказано, за замовчуванням використовується `1`.

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

Пошук зображень або GIF за метаданими, як-от ім'я автора чи назва джерела.

#### Параметри запиту

| Назва    | Тип    | Обов'язковий | Опис                                   |
| -------- | ------ | ------------ | -------------------------------------- |
| query    | string | Так          | Пошуковий запит                        |
| type     | enum   | Так          | `1` = зображення, `2` = GIF            |
| category | string | Ні           | Обмежити результати певною категорією  |
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

Повертає конкретний файл напряму.

#### Параметри шляху

| Назва    | Опис                        |
| -------- | --------------------------- |
| category | Назва категорії             |
| filename | Ім'я файлу (UUID)           |
| format   | Формат файлу (`png`, `gif`) |

::: info
Метадані для цього ендпоінта повертаються через **URL-кодовані заголовки HTTP-відповіді**.
:::

**Доступні заголовки:**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### Приклад

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**Відповідь:** Бінарні дані зображення або GIF
