---
outline: [2, 3]
---

# Riferimento API

## Limiti di Frequenza (Rate Limits)

Ogni risposta include le seguenti intestazioni per aiutarti a tracciare e rispettare i limiti di frequenza:

| Intestazione            | Descrizione                                              |
| ----------------------- | -------------------------------------------------------- |
| `x-rate-limit-limit`    | Durata della finestra corrente del limite di frequenza (es. `1m`) |
| `x-rate-limit-remaining`| Richieste rimanenti nella finestra corrente                 |
| `x-rate-limit-reset`    | Timestamp ISO 8601 del ripristino della finestra corrente |

### Limiti

| Endpoint      | Limite                                      |
| ------------- | ------------------------------------------- |
| `/search`     | 7 richieste ogni 5 secondi                  |
| `/:category`  | 200 richieste al minuto (per categoria)     |

## User-Agent

Tutte le richieste devono includere un'intestazione `User-Agent`. Si prega di utilizzare il seguente formato: `NOME_APP (INFO_CONTATTO)`.\
Ad esempio: `NekoApp (https://example.com)` o `NekoApp (dev@example.com)`

**Linee guida per la denominazione:**

* **Sii specifico:** Non utilizzare nomi generici come "Discord Bot", "WhatsApp Bot" o "Telegram Bot". La tua applicazione deve avere un nome univoco.
* **Evita segnaposto:** Non utilizzare stringhe come `test`, `bot` o il valore di esempio sopra riportato.
* **Nessun valore predefinito delle librerie:** Evita di utilizzare le stringhe predefinite delle librerie come `python-requests`, `okhttp`, `axios`, `node` o `Go-http-client`.

**Opzioni per le informazioni di contatto:**\
Le informazioni di contatto non devono necessariamente essere un sito web tradizionale. Ciascuno dei seguenti è un modo accettabile per fornire l'identificazione:

* Un indirizzo email di contatto diretto.
* Un sito web del progetto o un URL di repository **pubblico** (es. GitHub, GitLab).
* Un link di invito per bot o una pagina di esplorazione.
* Un URL di elenco (es. top.gg o directory simili).

**Falsificazione e Impersonificazione:**

* **Non falsificare le stringhe del browser.** Il formato `Mozilla/5.0 ...` è strettamente riservato ai veri browser web e ai bot verificati da Cloudflare.
* **Non impersonare crawler noti** come `Googlebot` o `Bingbot`.

*Il mancato rispetto di queste linee guida e l'uso di valori generici, predefiniti o falsificati comporteranno molto probabilmente il blocco delle tue richieste.*

## Categorie

Le categorie definiscono il tipo di contenuto restituito dall'API. Ogni categoria corrisponde a un formato di file fisso.

### Immagini

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

### Campi della Risposta

| Tipo   | Campi                                       |
| ------ | ------------------------------------------- |
| Immagini | `artist_name`, `artist_href`, `source_url`  |
| GIF    | `anime_name`                                |

`url` e `dimensions` sono inclusi in entrambi.
