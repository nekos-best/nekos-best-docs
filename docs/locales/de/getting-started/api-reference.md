---
outline: [2, 3]
---

# API-Referenz

## Ratenlimits (Rate Limits)

Jede Antwort enthält die folgenden Header, die Ihnen helfen, Ratenlimits zu verfolgen und einzuhalten:

| Header                  | Beschreibung                                                  |
| ----------------------- | ------------------------------------------------------------- |
| `x-rate-limit-limit`    | Dauer des aktuellen Ratenlimit-Fensters (z. B. `1m`)          |
| `x-rate-limit-remaining`| Verbleibende Anfragen im aktuellen Fenster                    |
| `x-rate-limit-reset`    | ISO 8601-Zeitstempel, wann das aktuelle Fenster zurückgesetzt wird |

### Limits

| Endpunkt      | Limit                                       |
| ------------- | ------------------------------------------- |
| `/search`     | 7 Anfragen pro 5 Sekunden                   |
| `/:category`  | 200 Anfragen pro Minute (pro Kategorie)     |

## User-Agent

Alle Anfragen müssen einen `User-Agent`-Header enthalten. Bitte verwenden Sie das folgende Format: `APP_NAME (CONTACT_INFO)`.\
Zum Beispiel: `NekoApp (https://example.com)` oder `NekoApp (dev@example.com)`

**Richtlinien für die Benennung:**

* **Seien Sie spezifisch:** Verwenden Sie keine generischen Namen wie „Discord Bot“, „WhatsApp Bot“ oder „Telegram Bot“. Ihre Anwendung muss einen eindeutigen Namen haben.
* **Vermeiden Sie Platzhalter:** Verwenden Sie keine Zeichenfolgen wie `test`, `bot` oder den obigen Beispielwert.
* **Keine Standardwerte von Bibliotheken:** Vermeiden Sie die Verwendung von Standard-Bibliotheks-Strings wie `python-requests`, `okhttp`, `axios`, `node` oder `Go-http-client`.

**Optionen für Kontaktinformationen:**\
Die Kontaktinformation muss keine traditionelle Website sein. Jede der folgenden Möglichkeiten ist eine akzeptable Form der Identifizierung:

* Eine direkte Kontakt-E-Mail-Adresse.
* Eine Projekt-Website oder eine **öffentliche** Repository-URL (z. B. GitHub, GitLab).
* Ein Bot-Einladungslink oder eine Discovery-Seite.
* Eine Listing-URL (z. B. top.gg oder ähnliche Verzeichnisse).

**Vortäuschen und Identitätsdiebstahl (Spoofing & Impersonation):**

* **Täuschen Sie keine Browser-Strings vor.** Das Format `Mozilla/5.0 ...` ist strikt echten Webbrowsern und von Cloudflare verifizierten Bots vorbehalten.
* **Geben Sie sich nicht als bekannte Crawler aus**, wie z. B. `Googlebot` oder `Bingbot`.

*Die Nichtbeachtung dieser Richtlinien sowie die Verwendung generischer, Standard- oder vorgetäuschter Werte führen sehr wahrscheinlich dazu, dass Ihre Anfragen blockiert werden.*

## Kategorien

Kategorien definieren die Art der von der API zurückgegebenen Inhalte. Jede Kategorie ist einem festen Dateiformat zugeordnet.

### Bilder

<div class="category-grid">
  <span class="category-chip">husbando</span>
  <span class="category-chip">kitsune</span>
  <span class="category-chip">neko</span>
  <span class="category-chip">waifu</span>
</div>

### GIFs

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
