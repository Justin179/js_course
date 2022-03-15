// Sets

const numbersArray = [1,1,2,2,3];

console.log(numbersArray);

const numbersSet = new Set();
numbersSet.add(1).add(1).add(2).add(2).add(3)

console.log(numbersSet)

console.log(numbersSet.delete(3))

console.log(numbersSet)

console.log(numbersSet.has(2))

// numbersSet.clear()
console.log(numbersSet.size)

console.log('-----------');
for(const e of numbersSet){
    console.log(e)
}

console.log('-----------');
numbersSet.forEach(e => console.log(e))

// 直接把現有的Array中的重複移除
console.log(Array.from(new Set(numbersArray)))





