---
outline: [2, 3]
---

# API 端点

## 基础 URL

```
https://nekos.best/api/:version
```

请将 `:version` 替换为下方列出的受支持版本之一。

## 版本列表

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">版本</div>
    <div class="version-col">状态</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">当前支持与维护</div>
  </div>
</div>

::: warning 重要
在发送请求之前，请阅读 [User-Agent 请求头文档](/zh-CN/getting-started/api-reference.html#user-agent)。所有 API 请求都必须包含格式正确的 `User-Agent` 请求头。
:::

## 端点列表

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

::: tip 提示
建议使用此端点动态获取受支持的分类，而不是硬编码在项目代码中。
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

返回指定分类中的随机图片或 GIF 及其元数据。

#### 查询参数 (Query Parameters)

| 参数名 | 类型   | 是否必填 | 描述                                                |
| ------ | ------ | -------- | --------------------------------------------------- |
| amount | number | 否       | 返回的结果数量 (`1 ≤ X ≤ 20`)                       |

如果不指定，默认为 `1`。

#### 示例 (单个结果)

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

#### 示例 (多个结果)

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

根据画师名称或作品来源标题等元数据搜索图片或 GIF。

#### 查询参数 (Query Parameters)

| 参数名   | 类型   | 是否必填 | 描述                                                |
| -------- | ------ | -------- | --------------------------------------------------- |
| query    | string | 是       | 搜索关键词                                          |
| type     | enum   | 是       | `1` = 图片，`2` = GIF 动图                          |
| category | string | 否       | 将结果限制在指定分类                                |
| amount   | number | 否       | 返回结果数量 (`1 ≤ X ≤ 20`)                         |

#### 示例 (搜索图片)

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

#### 示例 (搜索特定分类的 GIF)

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

#### 路径参数 (Path Parameters)

| 参数名   | 描述                        |
| -------- | --------------------------- |
| category | 分类名称                    |
| filename | 资源文件名 (UUID)           |
| format   | 文件格式 (`png`, `gif`)     |

::: info 信息
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
