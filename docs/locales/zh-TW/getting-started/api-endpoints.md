---
outline: [2, 3]
---

# API 端點

## 基礎 URL

```
https://nekos.best/api/:version
```

將 `:version` 替換為下方支援的版本之一。

## 版本

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">版本</div>
    <div class="version-col">狀態</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">當前版本與持續維護</div>
  </div>
</div>

::: warning 重要
在發送任何請求之前，請閱讀 [User-Agent 文件](/zh-TW/getting-started/api-reference.html#user-agent)。所有請求都必須包含格式正確的 `User-Agent` 標頭。
:::

## 端點

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

傳回所有可用的 API 分類及其關聯的檔案格式。

#### 範例

https://nekos.best/api/v2/endpoints
```json
{
  "neko": { "format": "png" },
  "...": {},
  "wink": { "format": "gif" }
}
```

::: tip
建議使用此端點動態探索支援的分類，而不是將分類寫死（hardcode）在程式碼中。
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

傳回指定分類中的隨機圖片或 GIF，並包含元資料（metadata）。

#### 查詢參數

| 名稱   | 類型   | 必填 | 說明                                |
| ------ | ------ | ---- | ----------------------------------- |
| amount | number | 否   | 要傳回的結果數量 (`1 ≤ X ≤ 20`)     |

若未指定，預設為 `1`。

#### 範例 (單一結果)

https://nekos.best/api/v2/neko

```json
{
  "results": [
    {
      "artist_name": "John Doe",
      "artist_href": "https://www.example.com/en/users/1234567",
      "source_url": "https://www.example.com/en/artworks/1234567",
      "url": "https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png",
      "dimensions": {
        "width": 420,
        "height": 690
      }
    }
  ]
}
```

#### 範例 (多個結果)

https://nekos.best/api/v2/hug?amount=2

```json
{
  "results": [
    {
      "anime_name": "Generic Anime Name",
      "url": "https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif",
      "dimensions": {
        "width": 420,
        "height": 690
      }
    },
    {
      "anime_name": "Generic Anime Name",
      "url": "https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif",
      "dimensions": {
        "width": 420,
        "height": 690
      }
    }
  ]
}
```

---

### <Badge type="tip" text="GET" class="http-get" /> /search

使用繪師名稱或作品名稱等元資料搜尋圖片或 GIF。

#### 查詢參數

| 名稱     | 類型   | 必填 | 說明                             |
| -------- | ------ | ---- | -------------------------------- |
| query    | string | 是   | 搜尋字詞                         |
| type     | enum   | 是   | `1` = 圖片, `2` = GIF            |
| category | string | 否   | 將結果限制在特定分類             |
| amount   | number | 否   | 結果數量 (`1 ≤ X ≤ 20`)          |

#### 範例 (圖片搜尋)

https://nekos.best/api/v2/search?query=John&type=1

```json
{
  "results": [
    {
      "artist_name": "John Doe",
      "artist_href": "https://www.example.com/en/users/1234567",
      "source_url": "https://www.example.com/en/artworks/1234567",
      "url": "https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png",
      "dimensions": {
        "width": 420,
        "height": 690
      }
    }
  ]
}
```

#### 範例 (指定分類的 GIF 搜尋)

https://nekos.best/api/v2/search?query=Generic&type=2&category=pat&amount=2

```json
{
  "results": [
    {
      "anime_name": "Generic Anime Name",
      "url": "https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif",
      "dimensions": {
        "width": 420,
        "height": 690
      }
    },
    {
      "anime_name": "Generic Anime Name",
      "url": "https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif",
      "dimensions": {
        "width": 420,
        "height": 690
      }
    }
  ]
}
```

---

### <Badge type="tip" text="GET" class="http-get" /> /:category/:filename.:format

直接取得特定的資源檔案。

#### 路徑參數

| 名稱     | 說明                        |
| -------- | --------------------------- |
| category | 分類名稱                    |
| filename | 資源檔名 (UUID)             |
| format   | 檔案格式 (`png`, `gif`)     |

::: info
此端點的元資料會透過 **URL 編碼的 HTTP 回應標頭** 傳回。
:::

**可用的回應標頭：**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### 範例

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**回應：** 二進位圖片或 GIF 資料
