---
outline: [2, 3]
---

# Справочник API

## Ограничения запросов (Rate Limits)

Каждый ответ содержит следующие заголовки, помогающие отслеживать и соблюдать ограничения запросов:

| Заголовок               | Описание                                                 |
| ----------------------- | -------------------------------------------------------- |
| `x-rate-limit-limit`    | Длительность текущего окна ограничений (например, `1m`)  |
| `x-rate-limit-remaining`| Оставшееся количество запросов в текущем окне            |
| `x-rate-limit-reset`    | Временная метка ISO 8601 сброса текущего окна            |

### Лимиты

| Эндпоинт      | Лимит                                       |
| ------------- | ------------------------------------------- |
| `/search`     | 7 запросов за 5 секунд                      |
| `/:category`  | 200 запросов в минуту (для каждой категории)|

## User-Agent

Все запросы должны содержать заголовок `User-Agent`. Используйте следующий формат: `ИМЯ_ПРИЛОЖЕНИЯ (КОНТАКТНАЯ_ИНФОРМАЦИЯ)`.\
Например: `NekoApp (https://example.com)` или `NekoApp (dev@example.com)`

**Правила наименования:**

* **Будьте специфичны:** Не используйте общие названия, такие как "Discord Bot", "WhatsApp Bot" или "Telegram Bot". Ваше приложение должно иметь уникальное имя.
* **Избегайте плейсхолдеров:** Не используйте такие строки, как `test`, `bot` или вышеуказанный пример.
* **Без стандартных значений библиотек:** Избегайте использования стандартных строк библиотек, таких как `python-requests`, `okhttp`, `axios`, `node` или `Go-http-client`.

**Варианты контактной информации:**\
Контактная информация не обязательно должна быть традиционным веб-сайтом. Любой из следующих вариантов является приемлемым способом идентификации:

* Прямой адрес электронной почты для связи.
* Веб-сайт проекта или URL **публичного** репозитория (например, GitHub, GitLab).
* Ссылка на приглашение бота или страницу обнаружения.
* URL-адрес в каталоге (например, top.gg или аналогичных сервисах).

**Спуфинг и выдача себя за других:**

* **Не подделывайте строки браузера.** Формат `Mozilla/5.0 ...` строго зарезервирован для реальных веб-браузеров и ботов, проверенных Cloudflare.
* **Не выдавайте себя за известных поисковых роботов**, таких как `Googlebot` или `Bingbot`.

*Несоблюдение этих правил и использование общих, стандартных или поддельных значений приведет к блокировке ваших запросов.*

## Категории

Категории определяют тип содержимого, возвращаемого API. Каждая категория соответствует фиксированному формату файлов.

### Изображения

<div class="category-grid">
  <span class="category-chip">husbando</span>
  <span class="category-chip">kitsune</span>
  <span class="category-chip">neko</span>
  <span class="category-chip">waifu</span>
</div>

### GIF-анимации

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

| Тип          | Поля                                        |
| ------------ | ------------------------------------------- |
| Изображения  | `artist_name`, `artist_href`, `source_url`  |
| GIF-анимации | `anime_name`                                |

`url` и `dimensions` присутствуют в обоих типах.
