// const getBrand = function (brand){
//     console.log(brand);
//     return{
//         brand: brand,
//         site: `www.${brand}.com`
//     }
// }

// const getBrand = (brand) => {
//     console.log(brand);
//     return{
//         brand: brand,
//         site: `www.${brand}.com`
//     }
// }

const getBrand = brand => ({
        brand: brand,
        site: `www.${brand.toLowerCase()}.com`
    })

const brand = getBrand('Nike');
console.log(brand);
console.log(JSON.stringify(brand,null,1));



// function add(a,b){
//     return a+b;
// }

const add = (a,b) => a+b;
console.log(add(1,3));

const calculate = (a,b,sign) => {
    switch(sign){
        case '+':
            return a+b;
            break;
        case '-':
            return a-b;
            break;
        default:
            return "??";
    }
}

console.log(calculate(3,2,'+'));