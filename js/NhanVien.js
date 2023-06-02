function NhanVien(
  taiKhoan,
  hoTen,
  email,
  matKhau,
  ngayLam,
  luongCoBan,
  chucVu,
  gioLam
) {
  this.taiKhoan = taiKhoan;
  this.hoTen = hoTen;
  this.email = email;
  this.matKhau = matKhau;
  this.ngayLam = ngayLam;
  this.luongCoBan = luongCoBan;
  this.chucVu = chucVu;
  this.gioLam = gioLam;
  this.tongLuong = 0;
  this.xepLoai = "";

  this.tinhTongLuong = function () {
    if (this.chucVu == "Sếp") {
      this.tongLuong = this.luongCoBan * 3;
    } else if (this.chucVu == "Trưởng phòng") {
      this.tongLuong = this.luongCoBan * 2;
    } else {
      this.tongLuong = this.luongCoBan;
    }
  };
  this.xepLoaiNV = function () {
    if (192 <= this.gioLam) {
      this.xepLoai = "Xuất sắc";
    } else if (176 <= this.gioLam && this.gioLam < 192) {
      this.xepLoai = "Giỏi";
    } else if (160 <= this.gioLam && this.gioLam < 176) {
      this.xepLoai = "Khá";
    } else {
      this.xepLoai = "Trung bình";
    }
  };
}
