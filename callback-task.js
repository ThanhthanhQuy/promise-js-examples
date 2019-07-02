
function sum (a,b,cb) {
    var result=a+b;
    console.log("tổng hai số là: " + result);
    setTimeout(() => { 
         cb(result);
    }, 2000);
}
function cb(result) {
    result*=3;
    console.log("Tổng hai số nhân 3 là: " + result)
}
sum(1,2, cb) 
