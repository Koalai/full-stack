// hoc duoc ve ham callback, ve cach tao mot method bat ki ap dung duoc cho tat ca cac mang
// hoc duoc cach ham map chay nhu nao, vong loop chay nhu nao, nen gan bien o dau khi thuc
// hien mot ham loop, hoc duoc cach ghi de tat ca cac loai ham cua Array, hoc duoc con tro 
// this 
function myMap(callback) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i]));
    }
    return result;         
}
// minh goi myMap o dong 13, this cua myMap la Window,


myMap()
let arr =[1,2,3]
Array.prototype.newMap = myMap
// arr goi, this cua newMap(myMap) la arr, on qua em khong nghe
let arr3 = arr.newMap((num) => {
    return num + 1;
})

let arr4 = arr.map((num) => {
    return num + 2;
})

let arr5 = arr.map((num) => {
    return num + 3;
})
console.log(arr3,arr4,arr5);