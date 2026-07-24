---
lastUpdated: false
---

# 新增非官方函式庫

## 非官方函式庫貢獻指南

* 提交內容**必須**以英文撰寫。
* 函式庫擁有者必須加入我們的 [Discord 伺服器](https://nekos.best/discord?ref=docs)。
* 函式庫必須遵循良好的程式碼品質規範。
* 函式庫**不得**包含惡意軟體或其他不安全的行為。
* 函式庫必須是公開可存取且持續進行維護的。
* 請在您的儲存庫中提供清晰的安裝與使用說明。

### 我們保留以下權利：

* 在審查後修改您的提交內容。
* 若提交內容過時、不安全或停止維護，得將其移除。

## 新增新的非官方函式庫

### 1. Fork 本儲存庫

### 2. Clone 您的 Fork 並 `cd` 進入專案目錄

### 3. 安裝 VitePress

您可以在[官方文件](https://vitepress.dev/guide/getting-started#prerequisites)中找到 VitePress 的前置需求。

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

### 4. 將您的非官方函式庫新增至側邊欄

1. 開啟 `/docs/.vitepress/config.mts`。
2. 在側邊欄中找到 **"Unofficial Libraries"** 區段。
3. 新增指向您函式庫儲存庫的連結。
4. 請依據程式語言的英文字母順序排列清單。

---

### 5. 啟動開發伺服器

在建立 Pull Request 之前，請在本機驗證您的變更沒有破壞任何功能。

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

### 6. 建立 Pull Request

向原始儲存庫提交 Pull Request。
