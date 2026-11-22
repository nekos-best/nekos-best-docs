---
outline: [2, 3]
---

# Riferimento API

## Rate limit

Ogni risposta include i seguenti header per aiutarti a monitorare e rispettare i rate limit:

| Header                   | Descrizione                                                    |
| ------------------------ | -------------------------------------------------------------- |
| `x-rate-limit-limit`     | Durata della finestra di rate limit corrente (es. `1m`)        |
| `x-rate-limit-remaining` | Richieste rimanenti nella finestra corrente                    |
| `x-rate-limit-reset`     | Timestamp ISO 8601 del ripristino della finestra corrente      |

### Limiti

| Endpoint                       | Limite                                                          |
| ------------------------------ | --------------------------------------------------------------- |
| `/search`                      | 7 richieste ogni 5 secondi                                      |
| `/:category`                   | 200 richieste al minuto (per categoria)                         |
| `/:category/:filename.:format` | 200 richieste al minuto (condivise tra risorse `.png` e `.gif`) |

## User-Agent

Sebbene un header `User-Agent` personalizzato non sia obbligatorio, consigliamo di impostarne uno nelle tue richieste usando questo formato: `NOME_APP (INFO_CONTATTO)`.\
Ad esempio: `NekoApp (https://example.com)` o `NekoApp (dev@example.com)`

**Consigli per la denominazione:**

* **Sii specifico:** Usa il nome reale della tua applicazione invece di etichette generiche come "Discord Bot", "WhatsApp Bot" o "Telegram Bot".
* **Evita segnaposto:** Evita valori generici come `test`, `bot` o gli esempi riportati sopra.
* **Evita i valori predefiniti delle librerie:** Preferisci un valore personalizzato alle stringhe predefinite come `python-requests`, `okhttp`, `axios`, `node` o `Go-http-client`.

**Opzioni per le informazioni di contatto:**\
Le informazioni di contatto non devono essere necessariamente un sito web classico. Qualsiasi opzione seguente va bene:

* Un indirizzo e-mail di contatto diretto.
* Il sito web del progetto o l'URL di un repository **pubblico** (es. GitHub, GitLab).
* Un link di invito del bot o una pagina di presentazione.
* L'URL di una directory o lista (es. top.gg o simili).

**Spoofing e impersonificazione:**

* **Non falsificare le stringhe dei browser.** Il formato `Mozilla/5.0 ...` è riservato ai veri browser web e ai bot verificati da Cloudflare.
* **Non impersonare crawler noti** come `Googlebot` o `Bingbot`.

::: info
Non impostare un header `User-Agent` personalizzato aumenta la probabilità di essere segnalato o bannato dal nostro sistema automatico di rilevamento degli abusi (`NB-BCFSD`).
:::

## Categorie

Le categorie definiscono il tipo di contenuto restituito dall'API. Ogni categoria corrisponde a un formato di file fisso.

### Immagini (4)

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

### Campi della risposta

| Tipo     | Campi                                      |
| -------- | ------------------------------------------ |
| Immagini | `artist_name`, `artist_href`, `source_url` |
| GIF      | `anime_name`                               |

`url` e `dimensions` sono inclusi in entrambi i casi.
