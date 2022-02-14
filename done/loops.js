// Loops
var names = [
    "Alex",
    "Jamila", 
    "Joe", 
    "Aisha",
    "Bob"
];

console.log("fori");

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log();
console.log("for of");

/*
Java: 
for (String s : names){

}
*/

// var 以後都不再用 var  -> let or const

for (let name of names) {
    console.log(name);
}

console.log();
console.log("forEach");

/* 完整的看testFunction.js
const xxx2 = function (name) {
    console.log(name)
};
*/

names.forEach(function(name) {
    console.log(name)
});







// names.forEach(function);

