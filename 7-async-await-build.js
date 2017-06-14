'use strict';

let main = (() => {
    var _ref = _asyncToGenerator(function* () {
        let msg1 = yield getMessage();
        console.log('1.', msg1);

        let msg2 = yield getMessage();
        console.log('2.', msg2);
    });

    return function main() {
        return _ref.apply(this, arguments);
    };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function getMessage() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Async/ Await is awsome :D');
        }, 2000);
    });
}

main();
console.log('Begin');
