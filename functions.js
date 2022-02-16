// Functions: a set of statements that perform a task

// function getBrand(brand){
//     console.log(brand);
//     return{
//         brand: brand,
//         site: `www.${brand}.com`
//     }
// }

const getBrand = function (brand){
    console.log(brand);
    return{
        brand: brand,
        site: `www.${brand}.com`
    }
}

const brand = getBrand('Nike');
console.log(brand);
console.log(JSON.stringify(brand,null,1));



function addNumbers(number1, number2) {
    var addition = number1 + number2;
    return addition;
}

var result1 = addNumbers(10, 10);
var result2 = addNumbers(7, 3);

console.log(result1);
console.log(result2);

var person = {
    name: "Jamila"
}
console.log(Object.values(person));
console.log(Object.keys(person));

console.log("Jamila".toUpperCase());
console.log("Jamila".toLocaleLowerCase());
console.log("Jamila".indexOf("i"));
