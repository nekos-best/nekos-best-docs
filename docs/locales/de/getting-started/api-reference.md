---
outline: [2, 3]
---

# API-Referenz

## Rate-Limits

Jede Antwort enthält die folgenden Header, mit denen du Rate-Limits nachverfolgen und einhalten kannst:

| Header                   | Beschreibung                                                         |
| ------------------------ | -------------------------------------------------------------------- |
| `x-rate-limit-limit`     | Dauer des aktuellen Rate-Limit-Fensters (z. B. `1m`)                 |
| `x-rate-limit-remaining` | Verbleibende Anfragen im aktuellen Fenster                           |
| `x-rate-limit-reset`     | ISO-8601-Zeitstempel, wann das aktuelle Fenster zurückgesetzt wird   |

### Limits

| Endpunkt                       | Limit                                                             |
| ------------------------------ | ----------------------------------------------------------------- |
| `/search`                      | 7 Anfragen pro 5 Sekunden                                         |
| `/:category`                   | 200 Anfragen pro Minute (pro Kategorie)                           |
| `/:category/:filename.:format` | 200 Anfragen pro Minute (geteilt über `.png`- und `.gif`-Assets)  |

## User-Agent

Ein eigener `User-Agent`-Header ist zwar nicht zwingend erforderlich, wir empfehlen jedoch, ihn bei deinen Anfragen im folgenden Format mitzusenden: `APP_NAME (CONTACT_INFO)`.\
Zum Beispiel: `NekoApp (https://example.com)` oder `NekoApp (dev@example.com)`

**Empfehlungen zur Benennung:**

* **Sei spezifisch:** Verwende den tatsächlichen Namen deiner Anwendung statt generischer Bezeichnungen wie „Discord Bot“, „WhatsApp Bot“ oder „Telegram Bot“.
* **Vermeide Platzhalter:** Verzichte auf Platzhalter wie `test`, `bot` oder die obigen Beispielwerte.
* **Vermeide Bibliotheks-Standardwerte:** Nutze lieber einen eigenen Wert als Standard-Strings von HTTP-Clients wie `python-requests`, `okhttp`, `axios`, `node` oder `Go-http-client`.

**Mögliche Kontaktinformationen:**\
Die Kontaktangabe muss keine klassische Website sein. Jede der folgenden Optionen eignet sich gut:

* Eine direkte Kontakt-E-Mail-Adresse.
* Eine Projekt-Website oder eine **öffentliche** Repository-URL (z. B. GitHub, GitLab).
* Ein Bot-Einladungslink oder eine Discovery-Seite.
* Eine Listing-URL (z. B. top.gg oder ähnliche Verzeichnisse).

**Spoofing und Nachahmung:**

* **Kein Browser-Spoofing:** Das Format `Mozilla/5.0 ...` ist echten Webbrowsern und von Cloudflare verifizierten Bots vorbehalten.
* **Gib dich nicht als bekannte Crawler aus**, wie z. B. `Googlebot` oder `Bingbot`.

::: info
Wenn du keinen eigenen `User-Agent`-Header setzt, steigt die Wahrscheinlichkeit, von unserer automatischen Missbrauchserkennung (`NB-BCFSD`) markiert oder gesperrt zu werden.
:::

## Kategorien

Kategorien definieren die Art der von der API zurückgegebenen Inhalte. Jede Kategorie ist einem festen Dateiformat zugeordnet.

### Bilder (4)

<div class="category-grid">
  <span class="category-chip">husbando</span>
  <span class="category-chip">kitsune</span>
  <span class="category-chip">neko</span>
  <span class="category-chip">waifu</span>
</div>

### GIFs (59)

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

### Antwortfelder

| Typ    | Felder                                      |
| ------ | ------------------------------------------- |
| Bilder | `artist_name`, `artist_href`, `source_url`  |
| GIFs   | `anime_name`                                |

`url` und `dimensions` sind in beiden enthalten.
