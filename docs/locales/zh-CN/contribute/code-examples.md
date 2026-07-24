---
lastUpdated: false
---

# 添加新代码示例

## 代码示例贡献指南

* 提交内容**必须**使用英文撰写。
* 尽可能详细地为您的示例编写文档。
* 确保您的代码可正常运行并已通过充分测试。

### 我们保留以下权利：

* 在提交后对您的内容进行修改。
* 在必要时删除您的提交。

## 创建新的代码示例

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

### 4. 添加您的代码示例

#### 4.1 创建示例文件

1. 在 `/docs/examples` 中创建一个以编程语言命名的新文件。
2. 文件名必须以 `.md` 结尾。
3. 至少包含**两种不同的** API 调用实现方式。

#### 4.2 将示例添加到侧边栏

1. 打开 `/docs/.vitepress/config.mts`。
2. 在侧边栏中找到 **"Code Examples"** 部分。
3. 将您的新文件添加到列表中。
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
