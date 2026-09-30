
## 1. Nguyên nhân bị lỗi

- Lỗi kiểm tra tiền tố khi chưa chuẩn hóa chuỗi: kiểm tra startsWith("MED-") trực tiếp trên chuỗi chữ thường hoặc chuỗi chưa xóa khoảng trắng thừa ở hai đầu. Dù mã phiếu là hợp lệ nhưng hàm startsWith phân biệt hoa thường và bị vướng khoảng trắng dẫn đến kết quả trả về false.

- Lỗi cắt chuỗi số thứ tự tiếp đón: sử dụng hàm slice(8, 11) chỉ lấy ký tự từ vị trí index 8 đến 10 (3 ký tự) mà bỏ quên ký tự cuối cùng ở index 11. Hậu quả là số thứ tự 4 chữ số bị cắt thiếu mất 1 số (ví dụ 1024 chỉ còn 102).

Cách khắc phục: dùng trim() để xóa khoảng trắng và toUpperCase() để viết hoa chuỗi trước khi kiểm tra tiền tố, đồng thời chỉnh lại chỉ số cắt chuỗi thành slice(8, 12) hoặc slice(8) để lấy trọn vẹn số thứ tự tiếp đón.

## 2. Bảng kiểm thử

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
| --- | --- | --- | --- |
| Mã hợp lệ khoa Nhi kèm khoảng trắng | rawAppointmentCode = "  med-nhi-1024  ", rawPatientName = "  nguyễn văn an  " | Chuyên khoa: NHI, STT: 102, Hợp lệ: false | Chuyên khoa: NHI, STT: 1024, Hợp lệ: true |
| Mã hợp lệ khoa Tai kèm khoảng trắng | rawAppointmentCode = "  med-tai-2048  ", rawPatientName = "  trần thị mai  " | Chuyên khoa: TAI, STT: 204, Hợp lệ: false | Chuyên khoa: TAI, STT: 2048, Hợp lệ: true |
