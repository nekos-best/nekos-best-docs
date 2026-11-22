---
outline: [2, 3]
---

# API referencia

## Rate limitek

Minden válasz tartalmazza az alábbi fejléceket, amelyek segítségével nyomon követheted és betarthatod a rate limiteket:

| Fejléc                   | Leírás                                                             |
| ------------------------ | ------------------------------------------------------------------ |
| `x-rate-limit-limit`     | Az aktuális rate limit ablak időtartama (pl. `1m`)                 |
| `x-rate-limit-remaining` | A jelenlegi ablakban még hátralévő kérések száma                   |
| `x-rate-limit-reset`     | ISO 8601 időbélyeg arról, mikor áll vissza a jelenlegi időablak    |

### Korlátok

| Végpont                        | Korlát                                                          |
| ------------------------------ | --------------------------------------------------------------- |
| `/search`                      | 7 kérés / 5 másodperc                                           |
| `/:category`                   | 200 kérés / perc (kategóriánként)                               |
| `/:category/:filename.:format` | 200 kérés / perc (megosztva a `.png` és `.gif` fájlok között)   |

## User-Agent

Bár az egyedi `User-Agent` fejléc megadása nem kötelező, javasoljuk, hogy állíts be egyet a kéréseidhez a következő formátumban: `APP_NAME (CONTACT_INFO)`.\
Például: `NekoApp (https://example.com)` vagy `NekoApp (dev@example.com)`

**Ajánlott elnevezési irányelvek:**

* **Légy konkrét:** Használd az alkalmazásod valódi nevét az olyan általános megnevezések helyett, mint a „Discord Bot”, „WhatsApp Bot” vagy „Telegram Bot”.
* **Kerüld a helyőrzőket:** Ne használj olyan helyőrző szövegeket, mint a `test`, a `bot`, vagy a fenti példaértékek.
* **Kerüld a könyvtárak alapértelmezett értékeit:** Használj egyedi értéket az alapértelmezett könyvtár-azonosítók (például `python-requests`, `okhttp`, `axios`, `node` vagy `Go-http-client`) helyett.

**Kapcsolattartási lehetőségek:**\
A kapcsolattartási adatnak nem kell hagyományos weboldalnak lennie. Az alábbiak bármelyike megfelelő:

* Közvetlen kapcsolattartási e-mail-cím.
* A projekt weboldala vagy egy **nyilvános** repository URL-je (pl. GitHub, GitLab).
* Bot meghívólink vagy bemutatóoldal.
* Katalógusoldal linkje (pl. top.gg vagy hasonló gyűjtőoldalak).

**Hamisítás és megszemélyesítés:**

* **Ne hamisíts böngészőazonosítókat.** A `Mozilla/5.0 ...` formátum kizárólag valódi webböngészők és a Cloudflare által hitelesített botok számára van fenntartva.
* **Ne add ki magad ismert keresőrobotoknak**, például `Googlebot`-nak vagy `Bingbot`-nak.

::: info
Ha nem adsz meg egyedi `User-Agent` fejlécet, nagyobb az esélye, hogy az automatikus visszaélés-észlelő rendszerünk megjelöl vagy kitilt (`NB-BCFSD`).
:::

## Kategóriák

A kategóriák határozzák meg az API által visszaadott tartalom típusát. Minden kategória egy fix fájlformátumhoz tartozik.

### Képek (4)

<div class="category-grid">
  <span class="category-chip">husbando</span>
  <span class="category-chip">kitsune</span>
  <span class="category-chip">neko</span>
  <span class="category-chip">waifu</span>
</div>

### GIF-ek (59)

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

### Válaszmezők

| Típus  | Mezők                                       |
| ------ | ------------------------------------------- |
| Képek  | `artist_name`, `artist_href`, `source_url`  |
| GIF-ek | `anime_name`                                |

Az `url` és a `dimensions` mező mindkettőben szerepel.
