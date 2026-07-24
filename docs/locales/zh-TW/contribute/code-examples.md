---
lastUpdated: false
---

# 新增程式碼範例

## 程式碼範例貢獻指南

* 提交內容**必須**以英文撰寫。
* 請盡可能詳細地為您的範例編寫文件。
* 確保您的程式碼可正常運作且已通過適當測試。

### 我們保留以下權利：

* 在提交後修改您的內容。
* 如有必要，移除您的提交內容。

## 建立新的程式碼範例

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

### 4. 新增您的程式碼範例

#### 4.1 建立範例檔案

1. 在 `/docs/examples` 中以該程式語言命名建立新檔案。
2. 檔案名稱必須以 `.md` 結尾。
3. 必須包含至少 **兩種不同的方式** 來發送 API 請求。

#### 4.2 將範例新增至側邊欄

1. 開啟 `/docs/.vitepress/config.mts`。
2. 在側邊欄中找到 **"Code Examples"** 區段。
3. 將您的新檔案新增至清單中。
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
