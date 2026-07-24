---
outline: [2, 3]
---

# API 参考

## 速率限制 (Rate Limits)

每个响应都包含以下响应头（headers），以帮助您跟踪并遵守速率限制：

| 响应头                  | 说明                                                     |
| ----------------------- | -------------------------------------------------------- |
| `x-rate-limit-limit`    | 当前速率限制窗口的时间跨度（例如 `1m`）                   |
| `x-rate-limit-remaining`| 当前窗口内剩余的请求次数                                 |
| `x-rate-limit-reset`    | 当前窗口重置的 ISO 8601 时间戳                           |

### 限制

| 端点          | 限制                                        |
| ------------- | ------------------------------------------- |
| `/search`     | 每 5 秒 7 次请求                            |
| `/:category`  | 每分钟 200 次请求（每个分类）                 |

## User-Agent

所有请求必须包含 `User-Agent` 请求头。请使用以下格式：`应用名称 (联系信息)`。\
例如：`NekoApp (https://example.com)` 或 `NekoApp (dev@example.com)`

**命名指南：**

* **明确具体：** 请勿使用通用名称，例如 "Discord Bot"、"WhatsApp Bot" 或 "Telegram Bot"。您的应用程序必须拥有唯一的名称。
* **避免占位符：** 请勿使用如 `test`、`bot` 或上述示例中的字符串。
* **禁用库默认值：** 避免使用默认的库字符串，如 `python-requests`、`okhttp`、`axios`、`node` 或 `Go-http-client`。

**联系信息选项：**\
联系信息不必是传统网站。以下任何一种方式都是可接受的身份标识：

* 直接联系的电子邮件地址。
* 项目网站或**公开**代码库 URL（例如 GitHub、GitLab）。
* Bot 邀请链接或探索页面。
* 收录列表 URL（例如 top.gg 或类似目录）。

**欺骗与冒充 (Spoofing and Impersonation)：**

* **请勿伪造浏览器字符串。** `Mozilla/5.0 ...` 格式严格仅保留给真实 Web 浏览器和 Cloudflare 验证的 Bot。
* **请勿冒充已知爬虫**，如 `Googlebot` 或 `Bingbot`。

*未能遵守这些指南并使用通用、默认或伪造的值，极有可能导致您的请求被拦截。*

## 分类 (Categories)

分类定义了 API 返回的内容类型。每个分类都映射到固定的文件格式。

### 图片 (Images)

<div class="category-grid">
  <span class="category-chip">husbando</span>
  <span class="category-chip">kitsune</span>
  <span class="category-chip">neko</span>
  <span class="category-chip">waifu</span>
</div>

### GIF 动图 (GIFs)

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

### 响应字段 (Response Fields)

| 类型   | 字段                                        |
| ------ | ------------------------------------------- |
| 图片   | `artist_name`, `artist_href`, `source_url`  |
| GIF 动图 | `anime_name`                              |

两者均包含 `url` 和 `dimensions`。
