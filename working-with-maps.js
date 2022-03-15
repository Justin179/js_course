const map = new Map();
// map.set('name',"James")
// map.set('age',2)

map.set('name',"James").set('age',2)

console.log(map)

// convert map into a object
console.log(Object.fromEntries(map.entries()))

console.log('---------------')

console.log(map.has('name'))

console.log(map.get('name'))

console.log(map.delete('name'))

console.log(map)

console.log(map.clear())

console.log(map)




