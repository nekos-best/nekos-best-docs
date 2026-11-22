---
outline: [2, 3]
---

# Tham chiếu API

## Giới hạn tốc độ (Rate Limits)

Mỗi phản hồi đều đi kèm các header sau để giúp bạn theo dõi và tuân thủ rate limit:

| Header                   | Mô tả                                                        |
| ------------------------ | ------------------------------------------------------------ |
| `x-rate-limit-limit`     | Thời lượng của khung rate limit hiện tại (ví dụ: `1m`)       |
| `x-rate-limit-remaining` | Số yêu cầu còn lại trong khung hiện tại                      |
| `x-rate-limit-reset`     | Dấu thời gian ISO 8601 cho thời điểm khung hiện tại đặt lại  |

### Hạn mức

| Endpoint                       | Giới hạn                                                      |
| ------------------------------ | ------------------------------------------------------------- |
| `/search`                      | 7 yêu cầu mỗi 5 giây                                          |
| `/:category`                   | 200 yêu cầu mỗi phút (theo từng danh mục)                     |
| `/:category/:filename.:format` | 200 yêu cầu mỗi phút (dùng chung cho các tệp `.png` & `.gif`) |

## User-Agent

Dù header `User-Agent` tùy chỉnh không bắt buộc, chúng tôi khuyến nghị bạn thiết lập nó cho các yêu cầu theo định dạng: `APP_NAME (CONTACT_INFO)`.\
Ví dụ: `NekoApp (https://example.com)` hoặc `NekoApp (dev@example.com)`

**Gợi ý đặt tên:**

* **Cụ thể:** Hãy dùng tên thật của ứng dụng thay vì các nhãn chung chung như "Discord Bot", "WhatsApp Bot" hay "Telegram Bot".
* **Tránh giá trị giữ chỗ:** Tránh dùng các chuỗi như `test`, `bot` hoặc các giá trị ví dụ ở trên.
* **Tránh giá trị mặc định của thư viện:** Nên đặt giá trị tùy chỉnh thay vì để nguyên chuỗi mặc định như `python-requests`, `okhttp`, `axios`, `node` hay `Go-http-client`.

**Tùy chọn thông tin liên hệ:**\
Thông tin liên hệ không nhất thiết phải là một trang web truyền thống. Bất kỳ lựa chọn nào dưới đây đều phù hợp:

* Địa chỉ email liên hệ trực tiếp.
* Trang web dự án hoặc URL kho mã nguồn **công khai** (ví dụ: GitHub, GitLab).
* Liên kết mời bot hoặc trang khám phá (discovery page).
* URL trang danh sách bot (ví dụ: top.gg hoặc các danh mục tương tự).

**Giả mạo và mạo danh:**

* **Không giả mạo chuỗi trình duyệt.** Định dạng `Mozilla/5.0 ...` chỉ dành cho trình duyệt web thực sự và các bot đã được Cloudflare xác minh.
* **Không mạo danh các trình thu thập dữ liệu phổ biến** như `Googlebot` hoặc `Bingbot`.

::: info
Việc không thiết lập header `User-Agent` tùy chỉnh sẽ làm tăng khả năng bị hệ thống phát hiện lạm dụng tự động của chúng tôi gắn cờ hoặc cấm (`NB-BCFSD`).
:::

## Danh mục

Danh mục xác định loại nội dung do API trả về. Mỗi danh mục tương ứng với một định dạng tệp cố định.

### Hình ảnh (4)

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

### Các trường phản hồi

| Loại     | Các trường                                 |
| -------- | ------------------------------------------ |
| Hình ảnh | `artist_name`, `artist_href`, `source_url` |
| GIF      | `anime_name`                               |

Cả hai loại đều bao gồm `url` và `dimensions`.
