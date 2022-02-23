const names = [
    "James",
    "Mariam",
    "Jamal",
    "Aisha"
];
// const james = names[0];
// const mariam = names[1];
// console.log(james);
// console.log(mariam);

// const[a,b,c,d] = names;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

const[a,...rest] = names;
console.log(a);
console.log(rest);






