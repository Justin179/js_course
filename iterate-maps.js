const map = new Map();
map.set('name',"James")
map.set('age',2)

console.log(map.keys())

for(const k of map.keys()){
    console.log(k)
}
console.log('-------------');
for(const v of map.values()){
    console.log(v)
}

console.log('-------------');

for(const entry of map){
    console.log(entry)
    console.log(entry[0])
    console.log(entry[1])
}