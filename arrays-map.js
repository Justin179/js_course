// Arrays
const numbers = [1,2,3,4,5];
numbers.forEach(function(number) {
    console.log(number);
})

// numbers.forEach((number) => {
//     console.log(number);
// })

numbers.forEach(number => console.log(number))

console.log('------ 1 -----');
console.log(numbers[1]);
numbers[1] = 100;
console.log(numbers[1]);
numbers.push(99);
console.log('----- 2 ------');
console.log(numbers);

// splice 中文為拼接。可以藉由刪除原來有的元素並／或加入新元素來改變一個陣列的內容。
// arr1.splice(要插入或刪除的索引位置, 要刪除的元素數量, 要插入的元素內容)
const colors1 = ["red", "yellow", "blue", "gray", "purple"]
const colors2 = colors1.splice(1, 2, "hi") // 直接改原本的，並回傳刪掉的元素
console.log(colors1)
console.log(colors2)
