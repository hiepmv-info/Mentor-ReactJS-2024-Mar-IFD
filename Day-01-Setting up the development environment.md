# Thiết Lập Môi Trường Phát Triển

## GIỚI THIỆU

Hướng dẫn này sẽ hướng dẫn bạn qua quá trình thiết lập môi trường phát triển cho một dự án React sử dụng Node.js và NVM. Chúng ta cũng sẽ giới thiệu cách khởi tạo một dự án React bằng cả NPX và Vite.

## YÊU CẦU

- Kiến thức cơ bản về JavaScript và React
- Một máy tính sử dụng hệ điều hành Windows
- Kết nối internet

## THIẾT LẬP KHÔNG GIAN LÀM VIỆC

### Cài đặt Node.js với NVM

1. Tải xuống và cài đặt NVM (Node Version Manager) từ [đây](https://github.com/coreybutler/nvm-windows/releases).
2. Mở cửa sổ lệnh mới và cài đặt Node.js bằng NVM với lệnh: `nvm install latest`
3. Xác minh việc cài đặt bằng lệnh: `node -v`

### Tạo một Dự án React

#### Sử dụng NPX

1. Mở cửa sổ lệnh mới.
2. Di chuyển đến thư mục mà bạn muốn tạo dự án của mình.
3. Chạy lệnh: `npx create-react-app my-app`

#### Sử dụng Vite

1. Đầu tiên, cài đặt create-vite toàn cầu với lệnh: `npm install -g create-vite`
2. Di chuyển đến thư mục mà bạn muốn tạo dự án của mình.
3. Chạy lệnh: `create-vite my-app --template react`

## KHỞI TẠO ỨNG DỤNG

Sau khi tạo dự án, điều hướng vào thư mục dự án với lệnh: `cd my-app`

Đối với NPX, bắt đầu ứng dụng với: `npm start`

Đối với Vite, bắt đầu ứng dụng với: `npm run dev`

## THAM KHẢO

- [NVM cho Windows](https://github.com/coreybutler/nvm-windows)
- [Create React App](https://create-react-app.dev/)
- [Vite](https://vitejs.dev/)
