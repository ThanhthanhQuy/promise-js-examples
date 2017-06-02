'use strict';

function làm_việc_gì_đó() {
    console.log('Bắt đầu');

    làm_một_việc_mất_thời_gian(function (err, data) {
        if (err) {
            return console.log(err);
        }

        console.log('Kết quả trả về:', data);
    });
}

function làm_một_việc_mất_thời_gian(cb) {
    setTimeout(function () {
        cb(null, {key: 'value'});
    }, 2000);
}

làm_việc_gì_đó();