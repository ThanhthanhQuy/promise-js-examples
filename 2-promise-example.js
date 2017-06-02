'use strict';

let vui = false;

// Hàm này trả ra lời hứa chứ không phải chiếc BMW
function hứa_cho_có() {
    return new Promise((thuc_hien_loi_hua, that_hua) => {
        // Sau 1 thời gian dài dài dàiiiiiii
        // Nếu vui bố mẹ sẽ thực hiện lời hứa
        if (vui) {
            thuc_hien_loi_hua("Xe BMW");
            // Lúc này trạng thái của lời hứa là fulfilled
        } else {
            that_hua("Xe dap");
            // Lúc này trạng thái của lời hứa là rejected
        }
    });
}

// Lời hứa bây giờ đang là pendding
// Nếu được thực hiện, bạn có "Xe BMW"
// Nếu bị reject, bạn có "Xe đạp"
let promise = hứa_cho_có();
promise
    .then((xe_bmw) => {
        console.log("Được chiếc BMW vui quá");
    })
    .catch((xe_dap) => {
        console.log("Được chiếc xe đạp ....");
    });