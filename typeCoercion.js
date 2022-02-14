// type coercion -> converting one data type to another
console.log(0==false);
console.log(1==true);

console.log("0"==false);
console.log("1"==true);

console.log(1=="1");
// console.log(1==="1");

// === (不自動轉換型態，也就是比較時，同時會比較形態，形態不同就算不同)
console.log('------------------------------');
console.log(0===false);
console.log(1===true);

console.log("0"===false);
console.log("1"===true);