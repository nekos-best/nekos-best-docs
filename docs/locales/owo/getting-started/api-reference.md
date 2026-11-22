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

| Endpoint                       | Wimit                                                            |
| ------------------------------ | ---------------------------------------------------------------- |
| `/search`                      | 7 weqwesties pew 5 seconds                                       |
| `/:category`                   | 200 weqwesties pew minute (pew categowy)                         |
| `/:category/:filename.:format` | 200 weqwesties pew minute (shawed acwoss `.png` & `.gif` assets) |

## User-Agent nya~

Whiwe a custom `User-Agent` headew is not wequiwed, we wecommend setting one on youw weqwesties using da fowwowing fowmat: `APP_NAME (CONTACT_INFO)`.\
Fow exampwe: `NekoApp (https://example.com)` ow `NekoApp (dev@example.com)` OwO

**Suggested Naming Guidewines >w<:**

* **Be specific:** Use youw appwication's actuaw name wathew dan genewic wabews wike "Discord Bot", "WhatsApp Bot", ow "Telegram Bot" nya~.
* **Avoid pwacehowdews:** Avoid pwacehowdew stwings wike `test`, `bot`, ow da exampwe vawues above OwO.
* **Avoid wibwawy defauwts:** Pwefew a custom vawue ovew defauwt wibwawy stwings such as `python-requests`, `okhttp`, `axios`, `node`, ow `Go-http-client` UwU.

**Contact Infowmation Options nya~:**\
Da contact info does not have to be a twaditionaw website. Any of da fowwowing wowk weww:

* A diwect contact emaiw addwess.
* A pwoject website ow **pubwic** wepositowy UWL (e.g., GitHub, GitLab).
* A bot invite wink ow discovewy page >w<.
* A wisting UWL (e.g., top.gg ow simiwaw diwectowies).

**Spoofing and Impewsonation OwO:**

* **Do not spoof bwowsew stwings.** Da `Mozilla/5.0 ...` fowmat is wesewved fow weaw web bwowsews and Cwoudfwawe-vewified bots nya~.
* **Do not impewsonate known cwawwews** wike `Googlebot` ow `Bingbot`.

::: info
Not setting a custom `User-Agent` headew cawwies a highew chance of being fwagged ow banned by ouw automated abuse detection (`NB-BCFSD`) >w<.
:::

## Categowies UwU

Categowies define da type of content wetuwned by da API. Each categowy maps to a fixed fiwe fowmat nya~.

### Images (4) OwO

<div class="category-grid">
  <span class="category-chip">husbando</span>
  <span class="category-chip">kitsune</span>
  <span class="category-chip">neko</span>
  <span class="category-chip">waifu</span>
</div>

### GIFs (59) >w<

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
