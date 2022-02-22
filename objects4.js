// Objects
const jamila = {
    firstName: "Jamila",
    age: 21,
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000, 1, 28).toJSON(),

    toString: function(){
        return `Name: ${this.firstName} Age: ${this.age}`
    },
    deleteMe: true             
};

// spread operator on objects

   const address = {
                city: "London",
                postCode: "SW9"
             };

// 以上兩個物件結合為一個物件
// const person = {
//     firstName: jamila.firstName,
//     address: {
//         city: address.city,
//         postCode: address.postCode
//     }
// }

const person = {
    ...jamila,
    address: {...address}
}

console.log(person);