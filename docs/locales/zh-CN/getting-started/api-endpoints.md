---
outline: [2, 3]
---

# API 端点

## 基础 URL

```
https://nekos.best/api/:version
```

将 `:version` 替换为下方列出的受支持版本之一。

## 版本

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">版本</div>
    <div class="version-col">状态</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">当前版本 · 维护中</div>
  </div>
</div>

::: tip
我们建议在发起请求时设置自定义 `User-Agent` 请求头。推荐格式请参阅 [User-Agent 文档](/zh-CN/getting-started/api-reference.html#user-agent)。
:::

## 端点

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

返回所有可用的 API 分类及其对应的文件格式。

#### 示例

https://nekos.best/api/v2/endpoints
```json
{
  "neko": { "format": "png" },
  "...": {},
  "wink": { "format": "gif" }
}
```

::: tip
建议使用此端点动态获取支持的分类，而不是在代码中硬编码。
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

从指定分类中返回随机图片或 GIF 及其元数据。

#### 查询参数

| 参数名 | 类型   | 必填 | 说明                           |
| ------ | ------ | ---- | ------------------------------ |
| amount | number | 否   | 返回的结果数量（`1 ≤ X ≤ 20`） |

未指定时默认为 `1`。

#### 示例（单个结果）

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

#### 示例（多个结果）

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

根据画师名称或作品标题等元数据搜索图片或 GIF。

#### 查询参数

| 参数名   | 类型   | 必填 | 说明                           |
| -------- | ------ | ---- | ------------------------------ |
| query    | string | 是   | 搜索关键词                     |
| type     | enum   | 是   | `1` = 图片，`2` = GIF          |
| category | string | 否   | 将结果限定在指定分类内         |
| amount   | number | 否   | 返回的结果数量（`1 ≤ X ≤ 20`） |

#### 示例（图片搜索）

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

#### 示例（按分类搜索 GIF）

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

直接获取指定的资源文件。

#### 路径参数

| 参数名   | 说明                        |
| -------- | --------------------------- |
| category | 分类名称                    |
| filename | 资源文件名（UUID）          |
| format   | 文件格式（`png`、`gif`）    |

::: info
该端点的元数据通过 **URL 编码的 HTTP 响应头**返回。
:::

**可用响应头：**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### 示例

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**响应：** 图片或 GIF 的二进制数据
