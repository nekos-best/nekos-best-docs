---
outline: [2, 3]
---

# API リファレンス

## レート制限 (Rate Limits)

すべてのレスポンスには、レート制限を追跡し尊重するのに役立つ以下のヘッダーが含まれています:

| ヘッダー                 | 説明                                                    |
| ----------------------- | ------------------------------------------------------- |
| `x-rate-limit-limit`    | 現在のレート制限ウィンドウの期間（例: `1m`）            |
| `x-rate-limit-remaining`| 現在のウィンドウ内の残りリクエスト数                    |
| `x-rate-limit-reset`    | 現在のウィンドウがリセットされる ISO 8601 タイムスタンプ|

### 制限値

| エンドポイント | 制限                                        |
| ------------- | ------------------------------------------- |
| `/search`     | 5秒あたり 7 リクエスト                      |
| `/:category`  | 1分あたり 200 リクエスト（カテゴリごと）    |

## User-Agent

すべてのリクエストには `User-Agent` ヘッダーを含める必要があります。次の形式を使用してください: `アプリ名 (連絡先情報)`\
例: `NekoApp (https://example.com)` または `NekoApp (dev@example.com)`

**命名ガイドライン:**

* **具体的に指定する:** 「Discord Bot」、「WhatsApp Bot」、「Telegram Bot」のような汎用的な名前を使用しないでください。アプリケーションには一意の名前が必要です。
* **プレースホルダーを避ける:** `test`、`bot`、または上記の例の値のような文字列を使用しないでください。
* **ライブラリのデフォルト値を使用しない:** `python-requests`、`okhttp`、`axios`、`node`、`Go-http-client` などのデフォルトのライブラリ文字列の使用を避けてください。

**連絡先情報のオプション:**\
連絡先情報は伝統的なウェブサイトである必要はありません。識別情報を提供する方法として、以下のいずれも受け入れられます:

* 直接連絡可能なメールアドレス。
* プロジェクトのウェブサイトまたは**公開**リポジトリの URL（例: GitHub、GitLab）。
* ボットの招待リンクまたはディスカバリーページ。
* リスティング URL（例: top.gg や同様のディレクトリ）。

**なりすましとスプーフィング:**

* **ブラウザ文字列を偽装しないでください。** `Mozilla/5.0 ...` 形式は、本物のウェブブラウザおよび Cloudflare によって認証されたボット専用に厳密に予約されています。
* **クローラー（`Googlebot` や `Bingbot` など）になりすまさないでください。**

*これらのガイドラインに従わなかったり、汎用的、デフォルト、または偽装された値を使用した場合、リクエストがブロックされる可能性が高いです。*

## カテゴリ

カテゴリは API によって返されるコンテンツのタイプを定義します。各カテゴリは固定のファイル形式にマッピングされます。

### 画像

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

### レスポンスフィールド

| タイプ | フィールド                                  |
| ------ | ------------------------------------------- |
| 画像   | `artist_name`, `artist_href`, `source_url`  |
| GIF    | `anime_name`                                |

`url` と `dimensions` は両方に含まれます。
