---
outline: [2, 3]
---

# API Reference

## Rate Limits

Every response includes the following headers to help you track and respect rate limits:

| Header                  | Description                                              |
| ----------------------- | -------------------------------------------------------- |
| `x-rate-limit-limit`    | Duration of the current rate limit window (e.g. `1m`)    |
| `x-rate-limit-remaining`| Remaining requests in the current window                 |
| `x-rate-limit-reset`    | ISO 8601 timestamp of when the current window resets     |

### Limits

| Endpoint      | Limit                                       |
| ------------- | ------------------------------------------- |
| `/search`     | 7 requests per 5 seconds                    |
| `/:category`  | 200 requests per minute (per category)      |

## User-Agent

All requests must include a `User-Agent` header. Please use the following format: `APP_NAME (CONTACT_INFO)`.\
For example: `NekoApp (https://example.com)` or `NekoApp (dev@example.com)`

**Naming Guidelines:**

* **Be specific:** Do not use generic names like "Discord Bot", "WhatsApp Bot", or "Telegram Bot". Your application must have a unique name.
* **Avoid placeholders:** Do not use strings like `test`, `bot`, or the example value above.
* **No library defaults:** Avoid using default library strings such as `python-requests`, `okhttp`, `axios`, `node`, or `Go-http-client`.

**Contact Information Options:**\
The contact info does not have to be a traditional website. Any of the following are acceptable ways to provide identification:

* A direct contact email address.
* A project website or **public** repository URL (e.g., GitHub, GitLab).
* A bot invite link or discovery page.
* A listing URL (e.g., top.gg or similar directories).

**Spoofing and Impersonation:**

* **Do not spoof browser strings.** The `Mozilla/5.0 ...` format is strictly reserved for real web browsers and Cloudflare-verified bots.
* **Do not impersonate known crawlers** like `Googlebot` or `Bingbot`.

*Failure to follow these guidelines and using generic, default, or spoofed values will likely result in your requests being blocked.*

## Categories

Categories define the type of content returned by the API. Each category maps to a fixed file format.

### Images

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

### Response Fields

| Type   | Fields                                      |
| ------ | ------------------------------------------- |
| Images | `artist_name`, `artist_href`, `source_url`  |
| GIFs   | `anime_name`                                |

`url` and `dimensions` are included in both.
