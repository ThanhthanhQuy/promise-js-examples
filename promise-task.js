function sum(a,b) {
    return new Promise((resolve, reject) => {
        var result = a+b; 
        console.log("Tổng hai số là: "+ result)

        setTimeout(() => {
            if(result == 3) { resolve(result)}
            else { reject() }    
        }, 2000)
})}

var promise = sum(1,1);
promise
.then((result) => {
    result*=3;
    console.log("Tổng hai số nhân 3: "+ result);
})
.catch(()=> {
    console.log("Lỗi gì đó")
})
