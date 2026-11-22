---
outline: [2, 3]
---

# API リファレンス

## レート制限

すべてのレスポンスには、レート制限の状況を確認・管理するための以下のヘッダーが含まれています。

| ヘッダー                  | 説明                                                     |
| ------------------------- | -------------------------------------------------------- |
| `x-rate-limit-limit`      | 現在のレート制限ウィンドウの期間（例: `1m`）             |
| `x-rate-limit-remaining`  | 現在のウィンドウ内で残っているリクエスト数               |
| `x-rate-limit-reset`      | 現在のウィンドウがリセットされる時刻（ISO 8601 形式）    |

### 制限値

| エンドポイント                 | 制限                                                        |
| ------------------------------ | ----------------------------------------------------------- |
| `/search`                      | 5 秒あたり 7 リクエスト                                     |
| `/:category`                   | 1 分あたり 200 リクエスト（カテゴリごと）                   |
| `/:category/:filename.:format` | 1 分あたり 200 リクエスト（`.png`・`.gif` アセット共通）    |

## User-Agent

カスタム `User-Agent` ヘッダーの設定は必須ではありませんが、リクエスト時には `APP_NAME (CONTACT_INFO)` の形式で設定することをおすすめします。\
例: `NekoApp (https://example.com)` または `NekoApp (dev@example.com)`

**推奨される命名ガイドライン:**

* **具体的な名前を使う:** 「Discord Bot」「WhatsApp Bot」「Telegram Bot」のような汎用的な名称ではなく、アプリケーション固有の名称を使用してください。
* **プレースホルダーを避ける:** `test` や `bot`、または上記のサンプル値そのままの使用は避けてください。
* **ライブラリのデフォルト値を避ける:** `python-requests`、`okhttp`、`axios`、`node`、`Go-http-client` といったデフォルトの文字列ではなく、独自の値を設定することをおすすめします。

**連絡先情報の例:**\
連絡先情報は一般的なウェブサイトである必要はありません。次のような情報も利用できます。

* 直接連絡可能なメールアドレス
* プロジェクトのウェブサイトまたは**公開**リポジトリの URL（GitHub、GitLab など）
* ボットの招待リンクまたはディスカバリーページ
* ディレクトリ掲載ページの URL（top.gg など）

**なりすまし・偽装について:**

* **ブラウザ文字列を偽装しないでください。** `Mozilla/5.0 ...` 形式は、実際のウェブブラウザおよび Cloudflare 認証済みボット専用です。
* **`Googlebot` や `Bingbot` など、既知のクローラーになりすまさないでください。**

::: info
カスタム `User-Agent` ヘッダーを設定していない場合、自動不正検出システムによってフラグ付けされたり、API 利用停止（`NB-BCFSD`）となったりする可能性が高くなります。
:::

## カテゴリ

カテゴリは、API から返されるコンテンツの種類を表します。各カテゴリには固定のファイル形式が割り当てられています。

### 画像 (4)

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

### レスポンスフィールド

| タイプ | フィールド                                  |
| ------ | ------------------------------------------- |
| 画像   | `artist_name`, `artist_href`, `source_url`  |
| GIF    | `anime_name`                                |

`url` と `dimensions` は両方に含まれます。
