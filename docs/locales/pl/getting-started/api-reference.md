---
outline: [2, 3]
---

# Referencja API

## Limity zapytań (Rate Limits)

Każda odpowiedź zawiera poniższe nagłówki, które ułatwiają śledzenie i przestrzeganie limitów zapytań:

| Nagłówek                 | Opis                                                               |
| ------------------------ | ------------------------------------------------------------------ |
| `x-rate-limit-limit`     | Czas trwania bieżącego okna limitu zapytań (np. `1m`)              |
| `x-rate-limit-remaining` | Liczba pozostałych zapytań w bieżącym oknie                        |
| `x-rate-limit-reset`     | Znacznik czasu ISO 8601 określający moment resetu bieżącego okna   |

### Limity

| Endpoint                       | Limit                                                         |
| ------------------------------ | ------------------------------------------------------------- |
| `/search`                      | 7 zapytań na 5 sekund                                         |
| `/:category`                   | 200 zapytań na minutę (na kategorię)                          |
| `/:category/:filename.:format` | 200 zapytań na minutę (wspólny dla zasobów `.png` i `.gif`)   |

## User-Agent

Choć własny nagłówek `User-Agent` nie jest wymagany, zalecamy ustawianie go w zapytaniach w następującym formacie: `NAZWA_APLIKACJI (DANE_KONTAKTOWE)`.\
Na przykład: `NekoApp (https://example.com)` lub `NekoApp (dev@example.com)`

**Sugerowane zasady nazewnictwa:**

* **Bądź konkretny:** Użyj faktycznej nazwy swojej aplikacji zamiast ogólnych etykiet takich jak „Discord Bot”, „WhatsApp Bot” czy „Telegram Bot”.
* **Unikaj nazw zastępczych:** Unikaj ciągów znaków takich jak `test`, `bot` czy powyższych przykładów.
* **Unikaj domyślnych wartości bibliotek:** Lepiej ustawić własną wartość zamiast domyślnych nagłówków bibliotek, takich jak `python-requests`, `okhttp`, `axios`, `node` czy `Go-http-client`.

**Przykładowe dane kontaktowe:**\
Dane kontaktowe nie muszą być tradycyjną stroną internetową. Świetnie sprawdzi się każda z poniższych opcji:

* Bezpośredni adres e-mail do kontaktu.
* Strona projektu lub link do **publicznego** repozytorium (np. GitHub, GitLab).
* Link zaproszenia bota lub jego strona w katalogu.
* Link z serwisu z listą botów (np. top.gg lub podobnych katalogów).

**Podszywanie się i fałszowanie:**

* **Nie podszywaj się pod przeglądarki.** Format `Mozilla/5.0 ...` jest zarezerwowany wyłącznie dla prawdziwych przeglądarek internetowych oraz botów zweryfikowanych przez Cloudflare.
* **Nie podszywaj się pod znane crawlery**, takie jak `Googlebot` czy `Bingbot`.

::: info
Brak własnego nagłówka `User-Agent` zwiększa ryzyko oznaczenia lub zablokowania przez nasz automatyczny system wykrywania nadużyć (`NB-BCFSD`).
:::

## Kategorie

Kategorie określają typ treści zwracanych przez API. Każda kategoria ma przypisany stały format pliku.

### Obrazy (4)

<div class="category-grid">
  <span class="category-chip">husbando</span>
  <span class="category-chip">kitsune</span>
  <span class="category-chip">neko</span>
  <span class="category-chip">waifu</span>
</div>

### GIF-y (59)

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

| Typ    | Pola                                       |
| ------ | ------------------------------------------ |
| Obrazy | `artist_name`, `artist_href`, `source_url` |
| GIF-y  | `anime_name`                               |

Pola `url` i `dimensions` są zwracane w obu typach.
