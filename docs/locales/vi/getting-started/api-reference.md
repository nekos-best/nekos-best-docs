---
outline: [2, 3]
---

# Tài liệu API

## Giới hạn tốc độ (Rate Limits)

Mỗi phản hồi đều bao gồm các header sau để giúp bạn theo dõi và tuân thủ giới hạn tốc độ:

| Header                  | Mô tả                                                    |
| ----------------------- | -------------------------------------------------------- |
| `x-rate-limit-limit`    | Thời gian của khung giới hạn tốc độ hiện tại (ví dụ: `1m`)|
| `x-rate-limit-remaining`| Số lượng yêu cầu còn lại trong khung hiện tại            |
| `x-rate-limit-reset`    | Dấu thời gian ISO 8601 khi khung hiện tại đặt lại        |

### Giới hạn

| Endpoint      | Giới hạn                                    |
| ------------- | ------------------------------------------- |
| `/search`     | 7 yêu cầu mỗi 5 giây                        |
| `/:category`  | 200 yêu cầu mỗi phút (cho mỗi danh mục)     |

## User-Agent

Tất cả các yêu cầu phải bao gồm header `User-Agent`. Vui lòng sử dụng định dạng sau: `TEN_UNGDUNG (THONGTIN_LIENHE)`.\
Ví dụ: `NekoApp (https://example.com)` hoặc `NekoApp (dev@example.com)`

**Hướng dẫn đặt tên:**

* **Cụ thể:** Không sử dụng các tên chung chung như "Discord Bot", "WhatsApp Bot", hoặc "Telegram Bot". Ứng dụng của bạn phải có tên duy nhất.
* **Tránh các giá trị giữ chỗ:** Không sử dụng các chuỗi như `test`, `bot`, hoặc giá trị ví dụ ở trên.
* **Không dùng giá trị mặc định của thư viện:** Tránh sử dụng các chuỗi mặc định của thư viện như `python-requests`, `okhttp`, `axios`, `node`, hoặc `Go-http-client`.

**Các tùy chọn thông tin liên hệ:**\
Thông tin liên hệ không nhất thiết phải là một trang web truyền thống. Bất kỳ phương thức nào sau đây đều được chấp nhận để xác minh danh tính:

* Địa chỉ email liên hệ trực tiếp.
* Trang web dự án hoặc URL kho lưu trữ **công khai** (ví dụ: GitHub, GitLab).
* Liên kết mời bot hoặc trang khám phá (discovery page).
* URL danh sách niêm yết (ví dụ: top.gg hoặc các thư mục tương tự).

**Giả mạo và mạo danh (Spoofing and Impersonation):**

* **Không giả mạo chuỗi trình duyệt.** Định dạng `Mozilla/5.0 ...` nghiêm ngặt chỉ dành riêng cho trình duyệt web thực tế và các bot đã được Cloudflare xác minh.
* **Không mạo danh các trình thu thập thông tin đã biết** như `Googlebot` hoặc `Bingbot`.

*Việc không tuân thủ các hướng dẫn này và sử dụng các giá trị chung chung, mặc định hoặc giả mạo rất có thể sẽ dẫn đến việc các yêu cầu của bạn bị chặn.*

## Danh mục (Categories)

Các danh mục xác định loại nội dung được API trả về. Mỗi danh mục ánh xạ tới một định dạng tệp cố định.

### Hình ảnh

<div class="category-grid">
  <span class="category-chip">husbando</span>
  <span class="category-chip">kitsune</span>
  <span class="category-chip">neko</span>
  <span class="category-chip">waifu</span>
</div>

### GIFs

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

### Các trường phản hồi (Response Fields)

| Loại     | Các trường                                  |
| -------- | ------------------------------------------- |
| Hình ảnh | `artist_name`, `artist_href`, `source_url`  |
| GIFs     | `anime_name`                                |

`url` và `dimensions` được bao gồm trong cả hai.
