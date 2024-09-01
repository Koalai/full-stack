let arr = [1, 2, 3];
let arr2 = arr.map((num) =>  num + 1)

Array.prototype.map = function a() { return 1 }
let arr3 = arr.map((num) => num + 1);
console.log(arr3);

