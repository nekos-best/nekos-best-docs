---
outline: [2, 3]
---

# API 參考

## 速率限制 (Rate Limits)

每個回應都包含以下標頭，以協助您追蹤並遵守速率限制：

| 標頭                    | 說明                                                     |
| ----------------------- | -------------------------------------------------------- |
| `x-rate-limit-limit`    | 當前速率限制時間視窗的長度（例如 `1m`）                  |
| `x-rate-limit-remaining`| 當前時間視窗內剩餘的請求次數                             |
| `x-rate-limit-reset`    | 當前時間視窗重設的 ISO 8601 時間戳記                     |

### 限制規則

| 端點          | 限制                                        |
| ------------- | ------------------------------------------- |
| `/search`     | 每 5 秒 7 次請求                            |
| `/:category`  | 每分鐘 200 次請求（每個分類）               |

## User-Agent

所有請求都必須包含 `User-Agent` 標頭。請使用以下格式：`APP_NAME (CONTACT_INFO)`。\
例如：`NekoApp (https://example.com)` 或 `NekoApp (dev@example.com)`

**命名規範：**

* **具體明確：** 切勿使用通用名稱，如 "Discord Bot"、"WhatsApp Bot" 或 "Telegram Bot"。您的應用程式必須擁有獨特的名稱。
* **避免占位符：** 請勿使用 `test`、`bot` 或上述範例值。
* **禁止使用函式庫預設值：** 請勿使用預設的 HTTP 函式庫字串，如 `python-requests`、`okhttp`、`axios`、`node` 或 `Go-http-client`。

**聯絡資訊選項：**\
聯絡資訊不必是傳統網站。以下任何一種方式都是可接受的識別提供方式：

* 直接聯絡的電子郵件地址。
* 專案網站或**公開**的儲存庫 URL（例如 GitHub、GitLab）。
* Bot 邀請連結或探索頁面。
* 列表頁面 URL（例如 top.gg 或類似目錄）。

**偽造與冒充限制：**

* **請勿偽造瀏覽器字串。** `Mozilla/5.0 ...` 格式嚴格保留給真實網頁瀏覽器與經 Cloudflare 驗證的 Bot。
* **請勿冒充已知爬蟲**，如 `Googlebot` 或 `Bingbot`。

*若未遵守這些規範並使用通用、預設或偽造的值，您的請求將很有可能被系統封鎖。*

## 分類

分類定義了 API 傳回的內容類型。每個分類皆對應固定的檔案格式。

### 圖片 (Images)

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

### 回應欄位

| 類型   | 欄位                                        |
| ------ | ------------------------------------------- |
| 圖片   | `artist_name`, `artist_href`, `source_url`  |
| GIF    | `anime_name`                                |

`url` 與 `dimensions` 包含在兩種類型中。
