---
outline: [2, 3]
---

# API 参考

## 速率限制

每个响应都会包含以下响应头，方便你跟踪并遵守速率限制：

| 响应头                   | 说明                                       |
| ------------------------ | ------------------------------------------ |
| `x-rate-limit-limit`     | 当前速率限制窗口的时间跨度（例如 `1m`）    |
| `x-rate-limit-remaining` | 当前窗口内剩余的请求次数                   |
| `x-rate-limit-reset`     | 当前窗口重置时间的 ISO 8601 时间戳         |

### 限制额度

| 端点                           | 限制                                              |
| ------------------------------ | ------------------------------------------------- |
| `/search`                      | 每 5 秒 7 次请求                                  |
| `/:category`                   | 每分钟 200 次请求（按分类单独计算）               |
| `/:category/:filename.:format` | 每分钟 200 次请求（`.png` 与 `.gif` 资源共享）    |

## User-Agent

虽然不强制要求设置自定义 `User-Agent` 请求头，但我们建议你在请求中按以下格式设置：`APP_NAME (CONTACT_INFO)`。\
例如：`NekoApp (https://example.com)` 或 `NekoApp (dev@example.com)`

**建议命名规范：**

* **明确具体：** 使用应用的实际名称，避免使用“Discord Bot”、“WhatsApp Bot”或“Telegram Bot”这类笼统的标签。
* **避免占位符：** 避免使用 `test`、`bot` 或直接套用上面的示例值。
* **避免库默认值：** 建议使用自定义标识，而非 HTTP 库的默认字符串（如 `python-requests`、`okhttp`、`axios`、`node` 或 `Go-http-client`）。

**联系信息选项：**\
联系信息不必是传统网站，以下任意一种都很合适：

* 可直接联系的电子邮箱地址。
* 项目官网或**公开**代码仓库 URL（如 GitHub、GitLab）。
* Bot 邀请链接或发现页地址。
* 目录收录页 URL（如 top.gg 或类似平台）。

**伪造与冒充：**

* **请勿伪造浏览器标识。** `Mozilla/5.0 ...` 格式仅限真实浏览器和经 Cloudflare 验证的爬虫使用。
* **请勿冒充已知爬虫**，例如 `Googlebot` 或 `Bingbot`。

::: info
不设置自定义 `User-Agent` 请求头会增加被自动滥用检测系统标记或封禁（`NB-BCFSD`）的风险。
:::

## 分类

分类用于定义 API 返回的内容类型，每个分类均对应固定的文件格式。

### 图片 (4)

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

### 响应字段

| 类型 | 字段                                        |
| ---- | ------------------------------------------- |
| 图片 | `artist_name`, `artist_href`, `source_url`  |
| GIF  | `anime_name`                                |

`url` 和 `dimensions` 字段在两种类型中均会返回。
