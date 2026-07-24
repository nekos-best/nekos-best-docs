---
lastUpdated: false
---

# Thêm ví dụ mã mới

## Hướng dẫn đóng góp cho Ví dụ mã

* Các bản đóng góp **bắt buộc** phải được viết bằng tiếng Anh.
* Tài liệu hóa ví dụ của bạn càng chi tiết càng tốt.
* Đảm bảo mã của bạn hoạt động và đã được kiểm tra kỹ lưỡng.

### Chúng tôi có quyền:

* Chỉnh sửa bản đóng góp của bạn sau khi được gửi.
* Xóa bản đóng góp của bạn nếu thấy cần thiết.

## Tạo một Ví dụ mã mới

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

### 4. Thêm Ví dụ mã của bạn

#### 4.1 Tạo tệp ví dụ

1. Tạo một tệp mới trong `/docs/examples` được đặt tên theo ngôn ngữ lập trình.
2. Tên tệp phải kết thúc bằng `.md`.
3. Bao gồm ít nhất **hai cách khác nhau** để thực hiện lệnh gọi API.

#### 4.2 Thêm ví dụ vào thanh bên (sidebar)

1. Mở `/docs/.vitepress/config.mts`.
2. Tìm phần **"Code Examples"** trong thanh bên.
3. Thêm tệp mới của bạn vào danh sách.
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
