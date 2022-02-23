// Arrays - map
const numbers = [1,2,3,4,5];
const numberTimesTwo = numbers.map(number =>  number * 2)
console.log(numberTimesTwo);

// Arrays - reduce (最後回傳一個值)
const result = numbers.reduce((accumulator,current) => accumulator + current)
console.log(result);