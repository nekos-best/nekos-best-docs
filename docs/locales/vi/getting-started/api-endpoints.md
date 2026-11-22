---
outline: [2, 3]
---

# Endpoint API

## URL cơ sở

```
https://nekos.best/api/:version
```

Thay `:version` bằng một trong các phiên bản được hỗ trợ bên dưới.

## Phiên bản

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">Phiên bản</div>
    <div class="version-col">Trạng thái</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">Hiện tại & Đang bảo trì</div>
  </div>
</div>

::: tip
Chúng tôi khuyến nghị thiết lập header `User-Agent` tùy chỉnh khi gửi yêu cầu. Xem [tài liệu User-Agent](/vi/getting-started/api-reference.html#user-agent) để tham khảo định dạng đề xuất.
:::

## Endpoint

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

Trả về tất cả các danh mục API hiện có cùng định dạng tệp tương ứng.

#### Ví dụ

https://nekos.best/api/v2/endpoints
```json
{
  "neko": { "format": "png" },
  "...": {},
  "wink": { "format": "gif" }
}
```

::: tip
Hãy dùng endpoint này để tự động lấy danh sách các danh mục được hỗ trợ thay vì ghi cứng (hardcode) trong mã nguồn.
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

Trả về hình ảnh hoặc GIF ngẫu nhiên thuộc danh mục chỉ định, kèm theo metadata.

#### Tham số truy vấn (Query Parameters)

| Tên    | Kiểu   | Bắt buộc | Mô tả                                  |
| ------ | ------ | -------- | -------------------------------------- |
| amount | number | Không    | Số lượng kết quả trả về (`1 ≤ X ≤ 20`) |

Mặc định là `1` nếu không chỉ định.

#### Ví dụ (một kết quả)

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

#### Ví dụ (nhiều kết quả)

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

Tìm kiếm hình ảnh hoặc GIF dựa trên metadata như tên họa sĩ hoặc tên anime nguồn.

#### Tham số truy vấn (Query Parameters)

| Tên      | Kiểu   | Bắt buộc | Mô tả                                      |
| -------- | ------ | -------- | ------------------------------------------ |
| query    | string | Có       | Từ khóa tìm kiếm                           |
| type     | enum   | Có       | `1` = hình ảnh, `2` = GIF                  |
| category | string | Không    | Giới hạn kết quả trong một danh mục cụ thể |
| amount   | number | Không    | Số lượng kết quả (`1 ≤ X ≤ 20`)            |

#### Ví dụ (tìm kiếm hình ảnh)

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

#### Ví dụ (tìm kiếm GIF theo danh mục)

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

Truy xuất trực tiếp một tệp tài nguyên cụ thể.

#### Tham số đường dẫn (Path Parameters)

| Tên      | Mô tả                        |
| -------- | ---------------------------- |
| category | Tên danh mục                 |
| filename | Tên tệp tài nguyên (UUID)    |
| format   | Định dạng tệp (`png`, `gif`) |

::: info
Metadata cho endpoint này được trả về thông qua **header phản hồi HTTP đã mã hóa URL**.
:::

**Các header có sẵn:**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### Ví dụ

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**Phản hồi:** Dữ liệu nhị phân của hình ảnh hoặc GIF
