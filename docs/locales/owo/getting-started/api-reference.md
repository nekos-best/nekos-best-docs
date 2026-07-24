---
outline: [2, 3]
---

# API Wefewence nya~

## Wate Wimits OwO

Evewy wesponse incwudes the fowwowing headews to hewp you twack and wespect wate wimits >w<:

| Headew                  | Descwiption                                              |
| ----------------------- | -------------------------------------------------------- |
| `x-rate-limit-limit`    | Duwation of the cuwwent wate wimit window (e.g. `1m`)    |
| `x-rate-limit-remaining`| Wemaining weqwesties in the cuwwent window               |
| `x-rate-limit-reset`    | ISO 8601 timestamp of when the cuwwent window wesets     |

### Wimits UwU

| Endpoint      | Wimit                                       |
| ------------- | ------------------------------------------- |
| `/search`     | 7 weqwesties pew 5 seconds                  |
| `/:category`  | 200 weqwesties pew minute (pew categowy)    |

## User-Agent nya~

Aww weqwesties must incwude a `User-Agent` headew OwO. Pwease use the fowwowing fowmat: `APP_NAME (CONTACT_INFO)`.\
Fow exampwe: `NekoApp (https://example.com)` ow `NekoApp (dev@example.com)`

**Naming Guidewines >w<:**

* **Be specific:** Do not use genewic names wike "Discord Bot", "WhatsApp Bot", ow "Telegram Bot". Youw appwicawion must have a uniqwe name nya~.
* **Avoid pwacehowdews:** Do not use stwings wike `test`, `bot`, ow the exampwe vawue above OwO.
* **No wibwawy defauwts:** Avoid using defauwt wibwawy stwings such as `python-requests`, `okhttp`, `axios`, `node`, ow `Go-http-client` UwU.

**Contact Infowmation Options nya~:**\
The contact info does not have to be a twaditionaw website. Any of the fowwowing awe acceptabwe ways to pwovide identificawion:

* A diwect contact emaiw addwess.
* A pwoject website ow **pubwic** wepositowy UWL (e.g., GitHub, GitLab).
* A bot invite wink ow discovewy page >w<.
* A wisting UWL (e.g., top.gg ow simiwaw diwectowies).

**Spoofing and Impewsonawion OwO:**

* **Do not spoof bwowsew stwings.** The `Mozilla/5.0 ...` fowmat is stwictwy wesewved fow weaw web bwowsews and Cwoudfwawe-vewified bots nya~.
* **Do not impewsonate known cwawwews** wike `Googlebot` ow `Bingbot`.

*Faiwuwe to fowlow these guidewines and using genewic, defauwt, ow spoofed vawues wiww wikewy weswt in youw weqwesties being bwocked >w< !*

## Categowies UwU

Categowies define the type of content wetuwned by the API. Each categowy maps to a fixed fiwe fowmat nya~.

### Images OwO

<div class="category-grid">
  <span class="category-chip">husbando</span>
  <span class="category-chip">kitsune</span>
  <span class="category-chip">neko</span>
  <span class="category-chip">waifu</span>
</div>

### GIFs >w<

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

### Wesponse Fiewds nya~

| Type   | Fiewds                                      |
| ------ | ------------------------------------------- |
| Images | `artist_name`, `artist_href`, `source_url`  |
| GIFs   | `anime_name`                                |

`url` and `dimensions` awe incwuded in both OwO.
