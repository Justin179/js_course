// Function Default Parameter
// const getBrand = brand => ({
//         brand: brand,
//         site: `www.${brand.toLowerCase()}.com`
//     })

const getBrand = (brand = "Hello", a={}) => ({
        brand: brand,
        site: `www.${brand.toLowerCase()}.com`
    })

const brand = getBrand('Nike');
console.log(brand);
console.log(JSON.stringify(brand,null,1));