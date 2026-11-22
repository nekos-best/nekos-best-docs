---
outline: [2, 3]
---

# API エンドポイント

## ベース URL

```
https://nekos.best/api/:version
```

`:version` は、以下でサポートされているバージョンのいずれかに置き換えてください。

## バージョン

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">バージョン</div>
    <div class="version-col">ステータス</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">現行・メンテナンス中</div>
  </div>
</div>

::: tip
リクエストを送信する際は、カスタム `User-Agent` ヘッダーを設定することをおすすめします。推奨フォーマットについては [User-Agent ドキュメント](/ja/getting-started/api-reference.html#user-agent)をご覧ください。
:::

## エンドポイント

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

利用可能なすべての API カテゴリと、それぞれに対応するファイル形式を返します。

#### 例

https://nekos.best/api/v2/endpoints
```json
{
  "neko": { "format": "png" },
  "...": {},
  "wink": { "format": "gif" }
}
```

::: tip
サポートされているカテゴリをハードコードせず、このエンドポイントから動的に取得することをおすすめします。
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

指定したカテゴリからランダムな画像または GIF をメタデータ付きで返します。

#### クエリパラメータ

| 名前   | 型     | 必須   | 説明                                    |
| ------ | ------ | ------ | --------------------------------------- |
| amount | number | いいえ | 取得する件数（`1 ≤ X ≤ 20`）            |

省略時のデフォルトは `1` です。

#### 例（単一の結果）

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

#### 例（複数の結果）

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

作者名や作品タイトルなどのメタデータを使って画像または GIF を検索します。

#### クエリパラメータ

| 名前     | 型     | 必須   | 説明                                    |
| -------- | ------ | ------ | --------------------------------------- |
| query    | string | はい   | 検索キーワード                          |
| type     | enum   | はい   | `1` = 画像、`2` = GIF                   |
| category | string | いいえ | 指定したカテゴリに結果を絞り込む        |
| amount   | number | いいえ | 取得する件数（`1 ≤ X ≤ 20`）            |

#### 例（画像検索）

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

#### 例（カテゴリ指定の GIF 検索）

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

特定のアセットを直接取得します。

#### パスパラメータ

| 名前     | 説明                        |
| -------- | --------------------------- |
| category | カテゴリ名                  |
| filename | アセットのファイル名（UUID） |
| format   | ファイル形式（`png`, `gif`） |

::: info
このエンドポイントのメタデータは、**URL エンコードされた HTTP レスポンスヘッダー**として返されます。
:::

**返却されるヘッダー:**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### 例

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**レスポンス:** 画像または GIF のバイナリデータ
