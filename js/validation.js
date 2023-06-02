function Validation() {
  this.checkEmpty = function (value, spanID, message) {
    if (value === "") {
      //!chưa hợp lệ
      //thông báo lỗi
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = "block";
      //trả kết quả false
      return false;
    }

    //?hợp lệ
    document.getElementById(spanID).innerHTML = "";
    document.getElementById(spanID).style.display = "none";
    //trả kết quả true
    return true;
  };

  this.checkAccount = function (value, spanID, message) {
    var pattern = /^\d{4,6}$/;

    if (pattern.test(value)) {
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";
      return true;
    }

    document.getElementById(spanID).innerHTML = message;
    document.getElementById(spanID).style.display = "block";
    return false;
  };

  this.checkName = function (value, spanID, message) {
    //biểu thức chính quy (regexp)
    var pattern =
      /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;

    if (value.match(pattern)) {
      //?hợp lệ
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";
      //trả kết quả true
      return true;
    }
    //!chưa hợp lệ
    //thông báo lỗi
    document.getElementById(spanID).innerHTML = message;
    document.getElementById(spanID).style.display = "block";
    //trả kết quả false
    return false;
  };

  this.checkEmail = function (value, spanID, message) {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(pattern)) {
      //?hợp lệ
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";
      //trả kết quả true
      return true;
    }
    //!chưa hợp lệ
    //thông báo lỗi
    document.getElementById(spanID).innerHTML = message;
    document.getElementById(spanID).style.display = "block";
    //trả kết quả false
    return false;
  };

  this.checkPassword = function (value, spanID, message) {
    var pattern = /^(?=.*\d)(?=.*[A-Z])(?=.*\W)(?!.*\s).{6,10}$/;

    if (pattern.test(value)) {
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";
      return true;
    }

    document.getElementById(spanID).innerHTML = message;
    document.getElementById(spanID).style.display = "block";
    return false;
  };

  this.checkDate = function (value, spanID, message) {
    var pattern = /^\d{2}\/\d{2}\/\d{4}$/;

    if (pattern.test(value)) {
      var dateParts = value.split("/");
      var day = parseInt(dateParts[0]);
      var month = parseInt(dateParts[1]);
      var year = parseInt(dateParts[2]);

      // Kiểm tra tính hợp lệ của ngày, tháng, năm
      if (
        year >= 1000 &&
        year <= 9999 &&
        month >= 1 &&
        month <= 12 &&
        day >= 1 &&
        day <= 31
      ) {
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
      }
    }

    document.getElementById(spanID).innerHTML = message;
    document.getElementById(spanID).style.display = "block";
    return false;
  };

  this.checkSalary = function (value, spanID, message) {
    var pattern = /^[1-9][0-9]{6,7}$/;

    if (pattern.test(value)) {
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";
      return true;
    }

    document.getElementById(spanID).innerHTML = message;
    document.getElementById(spanID).style.display = "block";
    return false;
  };

  this.checkPosition = function (value, spanID, message) {
    var validPositions = ["Sếp", "Trưởng phòng", "Nhân viên"];

    if (validPositions.includes(value)) {
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";
      return true;
    }

    document.getElementById(spanID).innerHTML = message;
    document.getElementById(spanID).style.display = "block";
    return false;
  };

  this.checkHoursWorked = function (value, spanID, message) {
    var hours = parseInt(value);

    if (hours >= 80 && hours <= 200) {
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";
      return true;
    }

    document.getElementById(spanID).innerHTML = message;
    document.getElementById(spanID).style.display = "block";
    return false;
  };
}
