// v1
// function brand(a,b){
//     console.log("Luna")
// }

// v2
// const brand = function (a,b){
//                 console.log("Luna")
//             };

// v3
const brand = (a, b) => {
                console.log(a+b)
                };

brand(1,2);


// let brand = "nike";
// brand = {}; // 這是一個js物件
// brand = 10;
// brand = function() { // function也是一個js物件
//     return "hello"
// }

// brand()

// console.log(brand());


// change let to const, brand can no longer be reassigned
// const 即常數，也就是不可以被更改的固定值


// can't be reassigned, but add/delete properties is not a problem
// const brandObj = {};
// brandObj["brand"] = brand;
// delete brandObj.brand;
// console.log(brandObj);


// 使用const & let的時機說明

// use const as ur default 
// 預設使用const 對變數與方法進行宣告


// 使用const 對方法進行宣告 例子
function hello(){

}
hello = 1;
console.log(hello);

const hello2 = function (){

}
hello2 = 1;
console.log(hello2);

// 除非有需要reassign不同的值，才改用let

// 注意 for loop 仍必須用let，因為i 必須reassign


// 永遠別用var