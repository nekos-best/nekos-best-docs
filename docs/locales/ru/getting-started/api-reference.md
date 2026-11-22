---
outline: [2, 3]
---

# Справочник API

## Лимиты запросов (Rate Limits)

Каждый ответ содержит следующие заголовки, которые помогают отслеживать и соблюдать лимиты запросов:

| Заголовок                | Описание                                                |
| ------------------------ | ------------------------------------------------------- |
| `x-rate-limit-limit`     | Длительность текущего окна лимита (например, `1m`)      |
| `x-rate-limit-remaining` | Оставшееся количество запросов в текущем окне           |
| `x-rate-limit-reset`     | Временная метка ISO 8601 момента сброса текущего окна   |

### Лимиты

| Эндпоинт                       | Лимит                                                       |
| ------------------------------ | ----------------------------------------------------------- |
| `/search`                      | 7 запросов за 5 секунд                                      |
| `/:category`                   | 200 запросов в минуту (для каждой категории)                |
| `/:category/:filename.:format` | 200 запросов в минуту (общий лимит для `.png` и `.gif`)     |

## User-Agent

Хотя собственный заголовок `User-Agent` не является обязательным, мы рекомендуем передавать его в запросах в формате `ИМЯ_ПРИЛОЖЕНИЯ (КОНТАКТНАЯ_ИНФОРМАЦИЯ)`.\
Например: `NekoApp (https://example.com)` или `NekoApp (dev@example.com)`

**Рекомендации по оформлению:**

* **Указывайте конкретное название:** используйте реальное название вашего приложения вместо общих вариантов вроде «Discord Bot», «WhatsApp Bot» или «Telegram Bot».
* **Избегайте заглушек:** не используйте шаблонные значения вроде `test`, `bot` или примеры, приведённые выше.
* **Избегайте значений библиотек по умолчанию:** предпочтительнее указать собственное значение вместо стандартных строк вроде `python-requests`, `okhttp`, `axios`, `node` или `Go-http-client`.

**Варианты контактной информации:**\
Контактная информация не обязательно должна быть обычным сайтом. Подойдёт любой из следующих вариантов:

* Прямой адрес электронной почты для связи.
* Сайт проекта или URL **публичного** репозитория (например, GitHub, GitLab).
* Ссылка на приглашение бота или страницу проекта.
* Ссылка на страницу в каталоге (например, top.gg или аналогичных сервисах).

**Подделка и выдача себя за других:**

* **Не подделывайте строки браузера.** Формат `Mozilla/5.0 ...` зарезервирован для настоящих браузеров и ботов, верифицированных Cloudflare.
* **Не выдавайте себя за известных поисковых роботов**, таких как `Googlebot` или `Bingbot`.

::: info Информация
Запросы без собственного заголовка `User-Agent` с большей вероятностью могут быть помечены или заблокированы нашей автоматической системой защиты от злоупотреблений (`NB-BCFSD`).
:::

## Категории

Категории определяют тип контента, возвращаемого API. За каждой категорией закреплён свой формат файлов.

### Изображения (4)

<div class="category-grid">
  <span class="category-chip">husbando</span>
  <span class="category-chip">kitsune</span>
  <span class="category-chip">neko</span>
  <span class="category-chip">waifu</span>
</div>

### GIF (59)

<div class="category-grid">
  <span class="category-chip">angry</span>
  <span class="category-chip">baka</span>
  <span class="category-chip">bite</span>
  <span class="category-chip">bleh</span>
  <span class="category-chip">blowkiss</span>
  <span class="category-chip">blush</span>
  <span class="category-chip">bonk</span>
  <span class="category-chip">bored</span>
  <span class="category-chip">carry</span>
  <span class="category-chip">clap</span>
  <span class="category-chip">confused</span>
  <span class="category-chip">cry</span>
  <span class="category-chip">cuddle</span>
  <span class="category-chip">dance</span>
  <span class="category-chip">facepalm</span>
  <span class="category-chip">feed</span>
  <span class="category-chip">handhold</span>
  <span class="category-chip">handshake</span>
  <span class="category-chip">happy</span>
  <span class="category-chip">highfive</span>
  <span class="category-chip">hug</span>
  <span class="category-chip">kabedon</span>
  <span class="category-chip">kick</span>
  <span class="category-chip">kiss</span>
  <span class="category-chip">lappillow</span>
  <span class="category-chip">laugh</span>
  <span class="category-chip">lurk</span>
  <span class="category-chip">nod</span>
  <span class="category-chip">nom</span>
  <span class="category-chip">nope</span>
  <span class="category-chip">nya</span>
  <span class="category-chip">pat</span>
  <span class="category-chip">peck</span>
  <span class="category-chip">poke</span>
  <span class="category-chip">pout</span>
  <span class="category-chip">punch</span>
  <span class="category-chip">run</span>
  <span class="category-chip">salute</span>
  <span class="category-chip">shake</span>
  <span class="category-chip">shoot</span>
  <span class="category-chip">shocked</span>
  <span class="category-chip">shrug</span>
  <span class="category-chip">sip</span>
  <span class="category-chip">slap</span>
  <span class="category-chip">sleep</span>
  <span class="category-chip">smile</span>
  <span class="category-chip">smug</span>
  <span class="category-chip">spin</span>
  <span class="category-chip">stare</span>
  <span class="category-chip">tableflip</span>
  <span class="category-chip">teehee</span>
  <span class="category-chip">think</span>
  <span class="category-chip">thumbsup</span>
  <span class="category-chip">tickle</span>
  <span class="category-chip">wag</span>
  <span class="category-chip">wave</span>
  <span class="category-chip">wink</span>
  <span class="category-chip">yawn</span>
  <span class="category-chip">yeet</span>
</div>

### Поля ответа

| Тип         | Поля                                       |
| ----------- | ------------------------------------------ |
| Изображения | `artist_name`, `artist_href`, `source_url` |
| GIF         | `anime_name`                               |

Поля `url` и `dimensions` присутствуют в обоих типах.
