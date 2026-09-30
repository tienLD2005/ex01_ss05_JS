/**
 * 
 * 1. Lỗi kiểm tra tiền tố khi chưa chuẩn hóa chuỗi:
 *    - Đoạn mã ban đầu kiểm tra startsWith("MED-") trực tiếp trên chuỗi chữ thường hoặc chuỗi chưa xử lý khoảng trắng.
 *    - Hậu quả: Mã phiếu khám hợp lệ nhưng hệ thống lại báo kết quả false (không hợp lệ).
 *    - Khắc phục: Dùng trim() để loại bỏ khoảng trắng thừa ở hai đầu và toUpperCase() để chuyển thành chữ in hoa trước khi kiểm tra startsWith("MED-").
 * 
 * 2. Lỗi cắt chuỗi số thứ tự tiếp đón:
 *    - Đoạn mã ban đầu chỉ định vị trí kết thúc cắt chuỗi slice(8, 11) bị thiếu 1 ký tự ở cuối.
 *    - Hậu quả: Số thứ tự 4 chữ số chỉ lấy được 3 chữ số (ví dụ 1024 bị cắt thành 102).
 *    - Khắc phục: Sửa vị trí cắt chuỗi thành slice(8, 12) hoặc slice(8) để lấy đầy đủ toàn bộ 4 chữ số thứ tự tiếp đón.
 */

const rawAppointmentCode = "  med-nhi-1024  ";
const rawPatientName = "  nguyễn văn an  ";

const cleanAppointmentCode = rawAppointmentCode.trim().toUpperCase();

const formattedPatientName = rawPatientName.trim().toUpperCase();

const isCodeValid = cleanAppointmentCode.startsWith("MED-");

const departmentCode = cleanAppointmentCode.slice(4, 7);
const appointmentNumber = cleanAppointmentCode.slice(8, 12);

console.log("Bệnh nhân:", formattedPatientName);
console.log("Chuyên khoa:", departmentCode);
console.log("Số thứ tự tiếp đón:", appointmentNumber);
console.log("Trạng thái hợp lệ:", isCodeValid);
