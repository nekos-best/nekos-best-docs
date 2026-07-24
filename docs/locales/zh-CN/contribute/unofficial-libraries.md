---
lastUpdated: false
---

# 添加非官方库

## 非官方库贡献指南

* 提交内容**必须**使用英文撰写。
* 库所有者必须加入我们的 [Discord 服务器](https://nekos.best/discord?ref=docs)。
* 库必须遵循良好的代码质量规范。
* 库**不得**包含恶意软件或其他不安全行为。
* 库必须是公开可访问的且处于积极维护状态。
* 在您的仓库中提供清晰的安装和使用说明。

### 我们保留以下权利：

* 在审查后修改您的提交。
* 如果库变得过时、不安全或停止维护，将删除您的提交。

## 添加新的非官方库

### 1. Fork 本仓库

### 2. Clone 您的 Fork 并进入项目目录 (`cd`)

### 3. 安装 VitePress

您可以在[官方文档](https://vitepress.dev/guide/getting-started#prerequisites)中查看 VitePress 的前置条件。

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

### 4. 将您的非官方库添加到侧边栏

1. 打开 `/docs/.vitepress/config.mts`。
2. 在侧边栏中找到 **"Unofficial Libraries"** 部分。
3. 添加指向您的库仓库的链接。
4. 按编程语言字母顺序保持列表排序。

---

### 5. 启动开发服务器

在创建 Pull Request 之前，请在本地验证您的更改未造成任何破坏。

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

### 6. 创建 Pull Request

向原始仓库提交 Pull Request。
