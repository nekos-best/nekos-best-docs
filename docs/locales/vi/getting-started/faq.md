---
outline: [2]
---
# Câu hỏi thường gặp (FAQ)

Dưới đây là giải đáp cho những câu hỏi phổ biến nhất.

## Tổng quan

#### Máy chủ được đặt ở đâu?
> Máy chủ được đặt tại Đức.

#### API có độ ổn định như thế nào?
> API của chúng tôi hiện duy trì thời gian hoạt động (uptime) **ít nhất** 99,99% mỗi năm.

#### Sử dụng API có bắt buộc phải ghi nguồn không?
> Không bắt buộc, nhưng chúng tôi rất trân trọng nếu bạn làm điều đó.

## Hình ảnh & GIF

#### Hình ảnh và GIF an toàn đến mức nào?
> Chúng tôi ưu tiên nội dung hoàn toàn an toàn cho môi trường làm việc (SFW). Khác với nhiều API anime khác, bạn sẽ không bắt gặp các nhân vật trong trang phục gợi cảm (như đồ bơi, bikini, nội y, trang phục xuyên thấu hoặc quá hở hang).\
> Bên cạnh đó, chúng tôi loại trừ các nội dung như panty shot (cố tình để lộ nội y), nội dung câu view kiểu tập trung vào vùng nách và các thể loại thiên hướng fetish tương tự.\
> Mỗi hình ảnh và GIF đều được tuyển chọn kỹ lưỡng để đảm bảo an toàn và chất lượng thay vì chạy theo số lượng.

#### Tôi có thể dùng hình ảnh hoặc GIF cho mục đích thương mại không?
> Không. Việc sử dụng cho mục đích thương mại bị nghiêm cấm theo quy định trong [Điều khoản dịch vụ](/legal/tos).\
> Chúng tôi không sở hữu các hình ảnh này; chúng chỉ được chia sẻ thuần túy nhằm mục đích giải trí, kèm ghi nhận đầy đủ cho các tác giả gốc.

#### Tôi có bắt buộc phải hiển thị tên họa sĩ không?
> Dù không bắt buộc, chúng tôi rất khuyến khích bạn ghi nhận họa sĩ vì API đã cung cấp sẵn thông tin này.

#### Một hình ảnh hoặc GIF bị sai hoặc thiếu nguồn. Tôi nên báo cáo ở đâu?
> Nếu phát hiện nguồn bị sai hoặc còn thiếu trong API, hãy báo cáo trên máy chủ Discord của chúng tôi bằng cách vào kênh `#api-support` và tạo một bài viết mới.

#### Các bạn có thể thêm danh mục X vào API không?
> Bạn có thể gửi đề xuất danh mục mới qua máy chủ Discord của chúng tôi tại kênh `#suggestions`.
>
> **Lưu ý:** Chúng tôi chỉ tiếp nhận các đề xuất danh mục SFW. Những đề xuất liên quan đến nội dung như liếm (lick) hoặc bắt cóc (kidnap) không phù hợp với tiêu chuẩn SFW và sẽ bị từ chối.

#### Khi nào hình ảnh, GIF hoặc danh mục mới sẽ được cập nhật?
> Chúng tôi không có lịch phát hành cố định hay thời gian dự kiến (ETA). Mọi nội dung đều được bổ sung thủ công và sẽ được cập nhật khi sẵn sàng cũng như khi nhóm quản trị có thời gian rảnh.

#### Tôi có thể đóng góp hình ảnh hoặc GIF cho API không?
> Hoàn toàn được! Nếu muốn đóng góp, hãy tham gia máy chủ Discord của chúng tôi và tạo bài viết trong `#api-support`.
> Người đóng góp sẽ nhận được vai trò Contributor đặc biệt trong cộng đồng Discord của chúng tôi.

#### API có chứa hình ảnh hoặc GIF do AI tạo ra không?
> Không. Toàn bộ hình ảnh và GIF trong API đều do các họa sĩ thực sự sáng tác. Chúng tôi không hỗ trợ nội dung do AI tạo ra.

#### Tôi có thể dùng hình ảnh hoặc GIF để huấn luyện AI, ML hoặc LLM không?
> **Không.** Như đã nêu trong [Điều khoản dịch vụ](/legal/tos), việc sử dụng nội dung từ API để huấn luyện mô hình AI, học máy (ML) hay LLM (bao gồm cả cào dữ liệu hoặc thu thập bộ dữ liệu) bị nghiêm cấm và sẽ dẫn đến lệnh cấm API. Chúng tôi cũng không thể cấp phép vì không sở hữu bản quyền các nội dung này.

#### Tôi có thể cache, tải xuống hoặc cào (scrape) hình ảnh hay GIF không?
> Việc cache **phản hồi JSON từ API** (như metadata và URL) được phép cho **mục đích sử dụng cá nhân**, miễn là không công khai hoặc phân phối lại.\
> Việc cache, tải xuống, cào dữ liệu, lưu trữ lại (rehost) hoặc trích xuất hàng loạt **tệp hình ảnh hoặc GIF thực tế** bị **nghiêm cấm hoàn toàn** theo [Điều khoản dịch vụ](/legal/tos) và sẽ dẫn đến lệnh cấm API.

#### Các tệp GIF có dung lượng bao lớn?
> Các tệp GIF của chúng tôi được giữ ở mức gọn nhẹ và tối ưu để tải nhanh, trung bình khoảng **~900 KB** mỗi tệp.

## Gỡ lỗi & Lỗi thường gặp

#### Tại sao tôi nhận được mã ERR-C "NB-BXIUA"?
> Các header `User-Agent` trống hoặc giả mạo sẽ bị chặn. Hãy đảm bảo yêu cầu của bạn có header `User-Agent` hợp lệ, đồng thời tránh giả mạo chuỗi trình duyệt hoặc mạo danh các trình thu thập dữ liệu phổ biến. Vui lòng xem [tài liệu User-Agent](/vi/getting-started/api-reference.html#user-agent) để tham khảo định dạng đề xuất.

#### Tại sao tôi nhận được mã ERR-C "NB-BCFSD"?
> `NB-BCFSD` cho biết bạn đã bị cấm truy cập API bởi hệ thống phát hiện lạm dụng tự động của chúng tôi. Nếu cho rằng đây là nhầm lẫn, vui lòng liên hệ với chúng tôi qua [máy chủ Discord](https://nekos.best/discord) hoặc gửi email tới **[contact@nekos.best](mailto:contact@nekos.best)**.

#### Tại sao tôi nhận được mã ERR-C "NB-BXASN"?
> `NB-BXASN` cho biết ASN (Autonomous System Number) của bạn đang bị chặn trong hệ thống của chúng tôi. Để gửi yêu cầu, địa chỉ IP của bạn cần được đưa vào danh sách cho phép (whitelist). Vui lòng liên hệ qua [máy chủ Discord](https://nekos.best/discord) hoặc gửi email tới **[contact@nekos.best](mailto:contact@nekos.best)**.

#### Tôi dùng VPN hoặc proxy và giờ không thể gửi yêu cầu nữa.
> VPN và proxy vẫn được phép sử dụng nhưng đi kèm một số hạn chế đáng lưu ý. Địa chỉ IP của các dịch vụ này được dùng chung bởi rất nhiều người, nên chỉ cần một người vi phạm khiến IP bị cấm thì toàn bộ người dùng khác cũng bị ảnh hưởng. Các IP VPN/proxy bị cấm sẽ bị chặn vĩnh viễn không có ngoại lệ và có tỷ lệ bị gắn cờ cao hơn nhiều so với IP thông thường. Nếu bạn phụ thuộc vào VPN/proxy và mất quyền truy cập, rất tiếc chúng tôi không thể hỗ trợ mở lại.
