# Google Lens OCR

## Giới thiệu

Google Lens OCR là một module JavaScript cho phép người dùng quét và phân tích hình ảnh bằng Google Lens. Module này dễ dàng tích hợp vào các ứng dụng web và cung cấp trải nghiệm quét hình ảnh đơn giản và hiệu quả.


## Hướng dẫn sử dụng

Dưới đây là hướng dẫn cơ bản để sử dụng module Google Lens Scanner:

### Import Module

```javascript
import { Lens } from './lens.mjs';
```

### Khởi tạo và Sử dụng

```javascript
// Khởi tạo đối tượng Lens
const lens = new Lens();

lens.scanByURL('https://cdn.logojoy.com/wp-content/uploads/20230801150127/Backrub-logo-1996.jpg')
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error(err);
    });
```

### Tính năng

- Quét hình ảnh từ URL .
- Phân tích hình ảnh và trả về kết quả chi tiết.
- Hỗ trợ các định dạng hình ảnh phổ biến.

## Đóng góp

Nếu bạn muốn đóng góp vào dự án này, hãy mở một vấn đề (issue) hoặc tạo một pull request (PR).

