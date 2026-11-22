---
outline: [2, 3]
---

# API 參考

## 速率限制

每個回應都會附帶以下標頭，方便你追蹤並遵守速率限制：

| 標頭                     | 說明                                       |
| ------------------------ | ------------------------------------------ |
| `x-rate-limit-limit`     | 目前速率限制時間視窗的長度（例如 `1m`）    |
| `x-rate-limit-remaining` | 目前時間視窗內剩餘的請求次數               |
| `x-rate-limit-reset`     | 目前時間視窗重設的 ISO 8601 時間戳記       |

### 限制規則

| 端點                           | 限制                                       |
| ------------------------------ | ------------------------------------------ |
| `/search`                      | 每 5 秒 7 次請求                           |
| `/:category`                   | 每分鐘 200 次請求（每個分類獨立計算）      |
| `/:category/:filename.:format` | 每分鐘 200 次請求（`.png` 與 `.gif` 資源共用） |

## User-Agent

雖然我們不強制要求設定自訂的 `User-Agent` 標頭，但仍建議你在請求中加上自訂值，格式為 `APP_NAME (CONTACT_INFO)`。\
例如：`NekoApp (https://example.com)` 或 `NekoApp (dev@example.com)`

**建議命名原則：**

* **具體明確：** 請使用你應用程式的實際名稱，避免使用「Discord Bot」、「WhatsApp Bot」或「Telegram Bot」等籠統名稱。
* **避免使用預留位置：** 請避免使用 `test`、`bot` 或上述範例字串等預留值。
* **避免使用函式庫預設值：** 建議優先使用自訂值，而非 `python-requests`、`okhttp`、`axios`、`node` 或 `Go-http-client` 等函式庫預設字串。

**聯絡資訊選項：**\
聯絡資訊不一定要是傳統網站，以下任一種方式都適用：

* 可直接聯繫的電子郵件位址。
* 專案網站或**公開**的程式碼儲存庫 URL（例如 GitHub、GitLab）。
* Bot 邀請連結或探索頁面（discovery page）。
* 清單或目錄頁面 URL（例如 top.gg 等平台）。

**偽造與冒充：**

* **請勿偽造瀏覽器字串。** `Mozilla/5.0 ...` 格式僅限真實網頁瀏覽器與經 Cloudflare 驗證的 Bot 使用。
* **請勿冒充已知爬蟲**，例如 `Googlebot` 或 `Bingbot`。

::: info
未設定自訂 `User-Agent` 標頭的請求，較容易被我們的自動濫用偵測系統標記或封鎖（`NB-BCFSD`）。
:::

## 分類

分類決定了 API 回傳的內容類型，每個分類都對應固定的檔案格式。

### 圖片 (4)

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

### 回應欄位

| 類型 | 欄位                                       |
| ---- | ------------------------------------------ |
| 圖片 | `artist_name`, `artist_href`, `source_url` |
| GIF  | `anime_name`                               |

兩種類型的回應皆包含 `url` 與 `dimensions`。
