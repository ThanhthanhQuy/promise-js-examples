'use strict';

function getMessage() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Async/ Await is awsome :D');
        }, 2000);
    });
}

async function main() {
    let msg1 = await getMessage();
    console.log('1.', msg1);

    let msg2 = await getMessage();
    console.log('2.', msg2);
}

main();
console.log('Begin');