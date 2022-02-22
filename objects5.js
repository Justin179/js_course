
// const calculator = (brand, price) => ({
//     brand: brand,
//     price: price
// })

// enhanced object properties
// const calculator = (brand, price) => ({
//     brand,
//     price
// })

// const calculator = (brand, price) => ({
//     brand,
//     price,
//     getDiscount: function(){
//         return this.price*.70
//     }
// })

const calculator = (brand, price) => ({
    brand,
    price,
    getDiscount(){
        return this.price*.70
    }
})

const casio = calculator("casio", 10)
console.log(casio);
console.log(casio.getDiscount());