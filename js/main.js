const dsnv = new DanhSachNhanVien();
const validation = new Validation();

function setLocalStorage() {
  localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}

function getLocalStorage() {
  var data = JSON.parse(localStorage.getItem("DSNV"));
  if (data !== null) {
    hienThiTable(data);
    dsnv.mangNV = data;
  }
}
getLocalStorage();

function getELE(id) {
  return document.getElementById(id);
}

function themNhanVien() {
  var taiKhoan = getELE("tknv").value;
  var hoTen = getELE("name").value;
  var email = getELE("email").value;
  var matKhau = getELE("password").value;
  var ngayLam = getELE("datepicker").value;
  var luongCoBan = getELE("luongCB").value;
  var chucVu = getELE("chucvu").value;
  var gioLam = getELE("gioLam").value;

  var isValid = true;

  isValid &=
    validation.checkEmpty(
      taiKhoan,
      "tbTKNV",
      "Tài khoản không được để trống"
    ) &&
    validation.checkAccount(taiKhoan, "tbTKNV", "Tài khoản tối đa 4 - 6 ký số");

  isValid &=
    validation.checkEmpty(hoTen, "tbTen", "Tên không được để trống") &&
    validation.checkName(hoTen, "tbTen", "Tên nhân viên phải là chữ");

  isValid &=
    validation.checkEmpty(email, "tbEmail", "Email không được để trống") &&
    validation.checkEmail(email, "tbEmail", "Email chưa đúng định dạng");

  isValid &=
    validation.checkEmpty(
      matKhau,
      "tbMatKhau",
      "Mật khẩu không được để trống"
    ) &&
    validation.checkPassword(
      matKhau,
      "tbMatKhau",
      "mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)"
    );

  isValid &=
    validation.checkEmpty(ngayLam, "tbNgay", "Ngày không được để trống") &&
    validation.checkDate(ngayLam, "tbNgay", "định dạng mm/dd/yyyy");

  isValid &=
    validation.checkEmpty(
      luongCoBan,
      "tbLuongCB",
      "Lương không được để trống"
    ) &&
    validation.checkSalary(
      luongCoBan,
      "tbLuongCB",
      "Lương cơ bản 1 000 000 - 20 000 000"
    );

  isValid &= validation.checkPosition(
    chucVu,
    "tbChucVu",
    "Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên)"
  );

  isValid &=
    validation.checkEmpty(gioLam, "tbGiolam", "Giờ không được để trống") &&
    validation.checkHoursWorked(
      gioLam,
      "tbGiolam",
      "Số giờ làm trong tháng 80 - 200 giờ"
    );

  if (isValid) {
    var nv = new NhanVien(
      taiKhoan,
      hoTen,
      email,
      matKhau,
      ngayLam,
      luongCoBan,
      chucVu,
      gioLam
    );
    nv.tinhTongLuong();
    nv.xepLoaiNV();
    dsnv.themNV(nv);
    setLocalStorage();
    hienThiTable(dsnv.mangNV);
  }
}

getELE("btnThemNV").onclick = themNhanVien;

function hienThiTable(mang) {
  var content = "";
  mang.forEach(function (nv) {
    var trNV = `<tr>
      <td>${nv.taiKhoan}</td>
      <td>${nv.hoTen}</td>
      <td>${nv.email}</td>
      <td>${nv.ngayLam}</td>
      <td>${nv.chucVu}</td>
      <td>${nv.tongLuong}</td>
      <td>${nv.xepLoai}</td>
      <td>
        <button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}')">Xóa</button>
        <button class="btn btn-info" onclick="xemThongTin('${nv.taiKhoan}')">Xem</button>
      </td>
    </tr>`;
    content += trNV;
  });
  getELE("tableDanhSach").innerHTML = content;
}

function xoaNhanVien(tk) {
  dsnv.xoaNV(tk);
  hienThiTable(dsnv.mangNV);
  setLocalStorage();
}

function xemThongTin(tk) {
  var index = dsnv.timIndex(tk);
  if (index > -1) {
    var nvFind = dsnv.mangNV[index];
    getELE("tknv").value = nvFind.taiKhoan;
    getELE("tknv").disabled = true;
    getELE("name").value = nvFind.hoTen;
    getELE("email").value = nvFind.email;
    getELE("password").value = nvFind.matKhau;
    getELE("datepicker").value = nvFind.ngayLam;
    getELE("luongCB").value = nvFind.luongCoBan;
    getELE("chucvu").value = nvFind.chucVu;
    getELE("gioLam").value = nvFind.gioLam;
  }
}

function capNhatNV() {
  var taiKhoan = getELE("tknv").value;
  var hoTen = getELE("name").value;
  var email = getELE("email").value;
  var matKhau = getELE("password").value;
  var ngayLam = getELE("datepicker").value;
  var luongCoBan = getELE("luongCB").value;
  var chucVu = getELE("chucvu").value;
  var gioLam = getELE("gioLam").value;

  var nv = new NhanVien(
    taiKhoan,
    hoTen,
    email,
    matKhau,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLam
  );
  nv.tinhTongLuong();
  nv.xepLoaiNV();

  var result = dsnv.capNhat(nv);
  if (result) {
    setLocalStorage();
    hienThiTable(dsnv.mangNV);
    resetForm();
  } else {
    alert("Cập nhật thất bại");
  }
}
getELE("btnCapNhat").onclick = capNhatNV;

function resetForm() {
  document.getElementById("formQLNV").reset();
  document.getElementById("tknv").disabled = false;
}

document.getElementById("searchName").onkeyup = function () {
  var loai = document.getElementById("searchName").value;
  var mangTK = dsnv.timKiemTheoLoai(loai);
  hienThiTable(mangTK);
};
