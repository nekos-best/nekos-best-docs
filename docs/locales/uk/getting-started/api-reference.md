---
outline: [2, 3]
---

# Довідник API

## Ліміти запитів (Rate Limits)

Кожна відповідь містить такі заголовки, які допомагають відстежувати та дотримуватися лімітів запитів:

| Заголовок                | Опис                                                      |
| ------------------------ | --------------------------------------------------------- |
| `x-rate-limit-limit`     | Тривалість поточного вікна ліміту (наприклад, `1m`)       |
| `x-rate-limit-remaining` | Кількість запитів, що залишилися в поточному вікні        |
| `x-rate-limit-reset`     | Мітка часу ISO 8601 моменту скидання поточного вікна      |

### Ліміти

| Ендпоінт                       | Ліміт                                                        |
| ------------------------------ | ------------------------------------------------------------ |
| `/search`                      | 7 запитів за 5 секунд                                        |
| `/:category`                   | 200 запитів за хвилину (для кожної категорії)                |
| `/:category/:filename.:format` | 200 запитів за хвилину (спільний ліміт для `.png` та `.gif`) |

## User-Agent

Хоча власний заголовок `User-Agent` не є обов'язковим, ми рекомендуємо передавати його в запитах у форматі `НАЗВА_ЗАСТОСУНКУ (КОНТАКТНА_ІНФОРМАЦІЯ)`.\
Наприклад: `NekoApp (https://example.com)` або `NekoApp (dev@example.com)`

**Рекомендації щодо оформлення:**

* **Вказуйте конкретну назву:** використовуйте справжню назву вашого застосунку замість загальних варіантів на кшталт «Discord Bot», «WhatsApp Bot» чи «Telegram Bot».
* **Уникайте заглушок:** не використовуйте шаблонні значення на зразок `test`, `bot` або наведених вище прикладів.
* **Уникайте стандартних значень бібліотек:** краще вказати власне значення замість типових рядків бібліотек на кшталт `python-requests`, `okhttp`, `axios`, `node` чи `Go-http-client`.

**Варіанти контактної інформації:**\
Контактна інформація не обов'язково має бути звичайним вебсайтом. Підійде будь-який із таких варіантів:

* Пряма електронна адреса для зв'язку.
* Вебсайт проєкту або URL **публічного** репозиторію (наприклад, GitHub, GitLab).
* Посилання для запрошення бота або сторінка проєкту.
* Посилання на сторінку в каталозі (наприклад, top.gg чи аналогічних сервісах).

**Підробка та видавання себе за інших:**

* **Не підробляйте рядки браузера.** Формат `Mozilla/5.0 ...` зарезервований для справжніх веббраузерів і ботів, верифікованих Cloudflare.
* **Не видавайте себе за відомих пошукових роботів**, таких як `Googlebot` або `Bingbot`.

::: info
Запити без власного заголовка `User-Agent` мають вищий ризик бути позначеними або заблокованими нашою автоматичною системою захисту від зловживань (`NB-BCFSD`).
:::

## Категорії

Категорії визначають тип контенту, який повертає API. За кожною категорією закріплено фіксований формат файлу.

### Зображення (4)

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

### Поля відповіді

| Тип        | Поля                                       |
| ---------- | ------------------------------------------ |
| Зображення | `artist_name`, `artist_href`, `source_url` |
| GIF        | `anime_name`                               |

Поля `url` та `dimensions` присутні в обох типах.
