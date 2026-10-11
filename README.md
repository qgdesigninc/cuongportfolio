# Portfolio Thiết Kế Đồ Họa – Trí Nguyễn

Trang web portfolio cá nhân cao cấp dành cho nhà thiết kế đồ họa tại Việt Nam, xây dựng trên nền tảng **React**, **TypeScript**, **Tailwind CSS v4** và **Vite**.

## 🎨 Điểm nổi bật về thiết kế (Design Direction)
- **Bảng màu tinh tế**: Nền trắng ấm giấy mỹ thuật `#F7F6F2`, chữ đen `#171717`, điểm nhấn màu xanh lá chanh `#C7F36B` có kiểm soát.
- **Thẩm mỹ Swiss Editorial & Typography**: Bố cục bất đối xứng, lưới tỷ lệ cân xứng, đường kẻ hairline thanh mảnh và font chữ hiện đại hỗ trợ đầy đủ tiếng Việt.
- **Zero-Pill Discipline**: Siêu dữ liệu phân tách bằng ký hiệu chấm biên tập (`·`), không dùng các hộp thuốc màu mè.
- **Bento Grid & Multi-view Modal**: Trưng bày 6 dự án với bố cục Bento đa dạng tỉ lệ, kèm cửa sổ chi tiết dự án (lightbox, mục tiêu thiết kế, định hướng sáng tạo, danh mục bàn giao và điều hướng qua lại).

---

## 📁 Cấu trúc dữ liệu dễ dàng chỉnh sửa

Mọi thông tin cá nhân, bài viết, dự án và liên hệ được tập trung tại một tệp tin duy nhất:
👉 `src/data/portfolioData.ts`

Bạn có thể chỉnh sửa:
- **Thông tin cá nhân**: Tên, chức danh, nơi làm việc, email (`DESIGNER_INFO.email`), trạng thái nhận dự án.
- **Dự án**: Thêm/bớt dự án trong mảng `PROJECTS`, thay thế đường dẫn hình ảnh `image` và `gallery`.
- **Dịch vụ & Quy trình**: Tùy chỉnh danh mục dịch vụ trong `SERVICES` và các bước trong `WORK_PROCESS`.

---

## 🚀 Khởi chạy & Triển khai

### 1. Cài đặt trên máy cá nhân (Local Development)
```bash
# Cài đặt dependencies
npm install

# Khởi chạy máy chủ phát triển
npm run dev
```
Truy cập `http://localhost:3000` trên trình duyệt.

### 2. Kiểm tra mã nguồn (Lint)
```bash
npm run lint
```

### 3. Đóng gói cho sản xuất (Build)
```bash
npm run build
```
Kết quả biên dịch sẽ nằm trong thư mục `/dist`.

### 4. Triển khai lên Vercel
Dự án đã có sẵn tệp cấu hình `vercel.json`:
1. Đẩy dự án lên GitHub.
2. Đăng nhập vào [Vercel](https://vercel.com) và chọn **Add New Project**.
3. Chọn kho lưu trữ GitHub của bạn. Vercel sẽ tự động phát hiện Vite và hoàn tất triển khai trong vài giây.
