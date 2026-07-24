---
lastUpdated: false
---

# Thêm thư viện không chính thức

## Hướng dẫn đóng góp cho Thư viện không chính thức

* Các bản đóng góp **bắt buộc** phải được viết bằng tiếng Anh.
* Chủ sở hữu thư viện phải tham gia [máy chủ Discord](https://nekos.best/discord?ref=docs) của chúng tôi.
* Thư viện phải tuân thủ các thực hành chất lượng mã tốt.
* Thư viện **không được** chứa phần mềm độc hại hoặc các hành vi không an toàn khác.
* Thư viện phải có thể truy cập công khai và được duy trì tích cực.
* Cung cấp hướng dẫn cài đặt và sử dụng rõ ràng trong repository của bạn.

### Chúng tôi có quyền:

* Chỉnh sửa bản đóng góp của bạn sau khi xem xét.
* Xóa bản đóng góp của bạn nếu nó trở nên lỗi thời, không an toàn hoặc không còn được duy trì.

## Thêm một Thư viện không chính thức mới

### 1. Fork repository này

### 2. Clone fork của bạn và chuyển vào thư mục dự án (`cd`)

### 3. Cài đặt VitePress

Bạn có thể tìm thấy các yêu cầu tiên quyết của VitePress trong
[tài liệu chính thức](https://vitepress.dev/guide/getting-started#prerequisites).

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

### 4. Thêm Thư viện không chính thức của bạn vào thanh bên

1. Mở `/docs/.vitepress/config.mts`.
2. Tìm phần **"Unofficial Libraries"** trong thanh bên.
3. Thêm liên kết đến repository thư viện của bạn.
4. Giữ danh sách theo thứ tự bảng chữ cái dựa trên ngôn ngữ lập trình.

---

### 5. Khởi chạy Server phát triển

Trước khi tạo pull request, hãy kiểm tra cục bộ xem các thay đổi của bạn có làm hỏng thứ gì không.

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

### 6. Tạo Pull Request

Gửi pull request đến repository gốc.
