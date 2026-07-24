---
lastUpdated: false
---

# 非公式ライブラリの追加

## 非公式ライブラリの貢献ガイドライン

* 申請内容は**必ず**英語で記述してください。
* ライブラリの所有者は公式 [Discord サーバー](https://nekos.best/discord?ref=docs) に参加する必要があります。
* ライブラリは優れたコード品質とプラクティスに従う必要があります。
* ライブラリにはマルウェアやその他の危険な動作を含めては **いけません**。
* ライブラリは公開され、アクティブにメンテナンスされている必要があります。
* リポジトリには明確なインストールおよび使用方法の手順を記載してください。

### 当方は以下の権利を留保します:

* レビュー後に申請内容を修正する権利。
* ライブラリが古くなった場合、安全でない場合、またはメンテナンスされなくなった場合に削除する権利。

## 新しい非公式ライブラリの追加手順

### 1. このリポジトリをフォークする

### 2. フォークしたリポジトリをクローンし、プロジェクトディレクトリに `cd` する

### 3. VitePress をインストールする

VitePress の前提条件は [公式ドキュメント](https://vitepress.dev/guide/getting-started#prerequisites) で確認できます。

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

### 4. 非公式ライブラリをサイドバーに追加する

1. `/docs/.vitepress/config.mts` を開きます。
2. サイドバーの **「非公式ライブラリ (Unofficial Libraries)」** セクションを見つけます。
3. ライブラリのリポジトリへのリンクを追加します。
4. リストはプログラミング言語のアルファベット順に保持してください。

---

### 5. 開発サーバーを起動する

プルリクエストを作成する前に、変更によって問題が発生していないかローカルで確認します。

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

元のリポジトリに対してプルリクエストを送信します。
