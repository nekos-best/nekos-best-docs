---
outline: [2, 3]
---

# Referencja API

## Limity zapytań (Rate Limits)

Każda odpowiedź zawiera następujące nagłówki pomagające śledzić i przestrzegać limitów zapytań:

| Nagłówek                | Opis                                                    |
| ----------------------- | ------------------------------------------------------- |
| `x-rate-limit-limit`    | Czas trwania okna limitu zapytań (np. `1m`)             |
| `x-rate-limit-remaining`| Pozostała liczba zapytań w bieżącym oknie               |
| `x-rate-limit-reset`    | Znacznik czasu ISO 8601 określający reset okna          |

### Limity

| Punkt końcowy | Limit                                       |
| ------------- | ------------------------------------------- |
| `/search`     | 7 zapytań na 5 sekund                       |
| `/:category`  | 200 zapytań na minutę (na kategorię)        |

## User-Agent

Wszystkie zapytania muszą zawierać nagłówek `User-Agent`. Prosimy o stosowanie następującego formatu: `NAZWA_APLIKACJI (DANE_KONTAKTOWE)`.\
Na przykład: `NekoApp (https://example.com)` lub `NekoApp (dev@example.com)`

**Wskazówki dotyczące nazewnictwa:**

* **Bądź precyzyjny:** Nie używaj ogólnych nazw, takich jak „Discord Bot”, „WhatsApp Bot” czy „Telegram Bot”. Twoja aplikacja musi posiadać unikalną nazwę.
* **Unikaj nazw zastępczych:** Nie używaj ciągów znaków takich jak `test`, `bot` ani powyższych wartości przykładowych.
* **Brak domyślnych wartości bibliotek:** Unikaj używania domyślnych nagłówków bibliotek, takich jak `python-requests`, `okhttp`, `axios`, `node` czy `Go-http-client`.

**Opcje danych kontaktowych:**\
Dane kontaktowe nie muszą być tradycyjną stroną internetową. Każda z poniższych opcji jest akceptowalnym sposobem identyfikacji:

* Bezpośredni adres e-mail do kontaktu.
* Strona internetowa projektu lub **publiczne** repozytorium (np. GitHub, GitLab).
* Link zaproszenia bota lub strona informacyjna.
* Link z listingu (np. top.gg lub podobne katalogi).

**Podszywanie się i fałszowanie:**

* **Nie fałszuj ciągów znaków przeglądarek.** Format `Mozilla/5.0 ...` jest zarezerwowany wyłącznie dla prawdziwych przeglądarek internetowych oraz botów zweryfikowanych przez Cloudflare.
* **Nie podszywaj się pod znane roboty indeksujące**, takie jak `Googlebot` czy `Bingbot`.

*Niezastosowanie się do tych wytycznych oraz używanie wartości ogólnych, domyślnych lub sfałszowanych prawdopodobnie skutkować będzie zablokowaniem Twoich zapytań.*

## Kategorie

Kategorie określają typ treści zwracanych przez API. Każda kategoria jest przypisana do stałego formatu pliku.

### Obrazy

<div class="category-grid">
  <span class="category-chip">husbando</span>
  <span class="category-chip">kitsune</span>
  <span class="category-chip">neko</span>
  <span class="category-chip">waifu</span>
</div>

### GIF-y

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

### Pola odpowiedzi

| Typ    | Pola                                        |
| ------ | ------------------------------------------- |
| Obrazy | `artist_name`, `artist_href`, `source_url`  |
| GIF-y  | `anime_name`                                |

Pola `url` oraz `dimensions` są zawarte w obu typach.
