---
outline: [2, 3]
---

# Довідник API

## Ліміти запитів (Rate Limits)

Кожна відповідь містить наступні заголовки, які допомагають відстежувати та дотримуватися лімітів запитів:

| Заголовок               | Опис                                                    |
| ----------------------- | ------------------------------------------------------- |
| `x-rate-limit-limit`    | Тривалість поточного вікна ліміту запитів (наприклад `1m`) |
| `x-rate-limit-remaining`| Залишок запитів у поточному вікні                       |
| `x-rate-limit-reset`    | Штамп часу ISO 8601, коли поточне вікно скидається      |

### Ліміти

| Ендпоінт      | Ліміт                                       |
| ------------- | ------------------------------------------- |
| `/search`     | 7 запитів за 5 секунд                       |
| `/:category`  | 200 запитів на хвилину (на категорію)       |

## User-Agent

Усі запити повинні містити заголовок `User-Agent`. Будь ласка, використовуйте наступний формат: `НАЗВА_ДОДАТКУ (КОНТАКТНА_ІНФОРМАЦІЯ)`.\
Наприклад: `NekoApp (https://example.com)` або `NekoApp (dev@example.com)`

**Рекомендації щодо назви:**

* **Будьте конкретними:** Не використовуйте загальні назви, такі як "Discord Bot", "WhatsApp Bot" або "Telegram Bot". Ваш додаток повинен мати унікальну назву.
* **Уникайте шаблонів:** Не використовуйте значення на зразок `test`, `bot` або приклад вище.
* **Ніяких стандартних значень бібліотек:** Уникайте використання стандартних рядків бібліотек, таких як `python-requests`, `okhttp`, `axios`, `node` або `Go-http-client`.

**Варіанти контактної інформації:**\
Контактна інформація не обов'язково має бути традиційним вебсайтом. Будь-який з наступних варіантів є прийнятним способом ідентифікації:

* Пряма контактна адреса електронної пошти.
* Вебсайт проєкту або **публічний** URL репозиторію (наприклад, GitHub, GitLab).
* Посилання для запрошення бота або сторінка опису.
* URL-адреса у каталогах (наприклад, top.gg або аналогічних).

**Підробка та видавання себе за інших:**

* **Не підробляйте рядки браузера.** Формат `Mozilla/5.0 ...` суворо зарезервований для реальних веббраузерів та перевірених ботів Cloudflare.
* **Не видавайте себе за відомих пошукових роботів**, таких як `Googlebot` або `Bingbot`.

*Недотримання цих правил та використання загальних, стандартних або підроблених значень, найімовірніше, призведе до блокування ваших запитів.*

## Категорії

Категорії визначають тип контенту, що повертається API. Кожна категорія відповідає фіксованому формату файлу.

### Зображення

<div class="category-grid">
  <span class="category-chip">husbando</span>
  <span class="category-chip">kitsune</span>
  <span class="category-chip">neko</span>
  <span class="category-chip">waifu</span>
</div>

### GIF

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

### Поля відповідей

| Тип        | Поля                                        |
| ---------- | ------------------------------------------- |
| Зображення | `artist_name`, `artist_href`, `source_url`  |
| GIF        | `anime_name`                                |

`url` та `dimensions` включені в обидва типи.
