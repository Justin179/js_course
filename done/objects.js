
// var obj = {key:value, key2:value2};

// Objects
var person = {
    firstName: "Jamila",
    age: 21,
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000, 1, 28).toJSON(),
    address: {
                city: "London",
                postCode: "SW9"
             }
};
console.log(person);
console.log();
console.log(person.firstName);
console.log(person.age);
console.log(person.balance);
console.log(person.address.city);
console.log();
console.log(Object.values(person));
console.log(Object.keys(person));
console.log();
console.log(JSON.stringify(person))