function DanhSachNhanVien() {
    this.mangNV = [];
  
    this.themNV = function (nv) {
      this.mangNV.push(nv);
    };
  
    this.timIndex = function (tk) {
      var indexFind = -1;
      this.mangNV.map(function (nv, index) {
        if (nv.taiKhoan === tk) {
          indexFind = index;
        }
      });
      return indexFind;
    };
  
    this.xoaNV = function (tk) {
      var index = this.timIndex(tk);
      if (index > -1) {
        this.mangNV.splice(index, 1);
      }
    };

    this.capNhat = function(nv){
      var index = this.timIndex(nv.taiKhoan);
      if(index >-1){
        dsnv.mangNV[index] = nv;
        return true
      } else{
        return false
      }
    }
  }

DanhSachNhanVien.prototype.timKiemTheoLoai = function(loai) {
  var mangTK = [];
  var loaiThuong = loai.toLowerCase().replace(/\s/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Chuẩn hóa từ khóa tìm kiếm

  this.mangNV.forEach(function(nv) {
      var xepLoaiThuong = nv.xepLoai.toLowerCase().replace(/\s/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 

      if (xepLoaiThuong.indexOf(loaiThuong) !== -1) {
          mangTK.push(nv);
      }
  });
  return mangTK;
};

  