// hoisting
for(var i = 0; i<=10; i++){ // 只要i <=10 都會進去執行
    console.log(i);
}
// i==11時，此loop結束
console.log('outside loop: '+i);



// var i;
// for(i = 0; i<=10; i++){
//     console.log(i);
// }

// console.log('outside loop: '+i);