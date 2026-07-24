---
lastUpdated: false
---

# 新しいコード例の追加

## コード例の貢献ガイドライン

* 投稿は**必ず**英語で記述してください。
* 例を可能な限り詳細にドキュメント化してください。
* コードが動作し、適切にテストされていることを確認してください。

### 以下の権利を保留します:

* 提出後に投稿を変更すること。
* 必要に応じて投稿を削除すること。

## 新しいコード例の作成

### 1. このリポジトリをフォークする

### 2. フォークをクローンし、プロジェクトディレクトリに `cd` する

### 3. VitePress をインストールする

VitePress の前提条件は
[公式ドキュメント](https://vitepress.dev/guide/getting-started#prerequisites) で確認できます。

::: code-group

```sh [npm]
npm add -D vitepress@next
```

```sh [pnpm]
pnpm add -D vitepress@next
```

```sh [yarn]
yarn add -D vitepress@next vue
```

```sh [bun]
bun add -D vitepress@next
```

:::

---

### 4. コード例を追加する

#### 4.1 例のファイルを作成する

1. プログラミング言語名にちなんだ新しいファイルを `/docs/examples` に作成します。
2. ファイル名は `.md` で終わる必要があります。
3. API 呼び出しを行うための少なくとも **2 つの異なる方法** を含めてください。

#### 4.2 サイドバーに例を追加する

1. `/docs/.vitepress/config.mts` を開きます。
2. サイドバーの **"Code Examples"** セクションを見つけます。
3. 新しいファイルをリストに追加します。
4. リストはプログラミング言語のアルファベット順に保ってください。

---

### 5. 開発サーバーを起動する

プルリクエストを作成する前に、変更によって何も破損していないことをローカルで確認してください。

::: code-group

```sh [npm]
npm run dev
```

```sh [pnpm]
pnpm run dev
```

```sh [yarn]
yarn dev
```

```sh [bun]
bun run dev
```

:::

---

### 6. プルリクエストを作成する

元のリポジトリにプルリクエストを送信します。
