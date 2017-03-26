var numbers = [];
console.log(numbers.length); // 0

var numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // 5

var numbers = new Array();
console.log(numbers.length);

var numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers.length);

var numbers = new Array(10);
console.log(numbers.length);

//判断是否是数组对象
var number = 3;
var arr = [7, 4, 1776];
console.log(Array.isArray(number)); //false
console.log(Array.isArray(arr));    //true

