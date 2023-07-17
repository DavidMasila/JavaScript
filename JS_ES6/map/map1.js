//maps can take objects and functions as keys
// we use set to add items to maps

let map1 = new Map();
map1.set('description', {name : 'masila', age:25, gender :'male'});
map1.set('career', 'software Engineering');
map1.set('languages spoken', ['kamba','swahili','English'])

//accessing elements in maps using get() method
console.log(map1);
console.log(map1.get('description'));

//checking whether a map has a key using has() method

if(map1.has('description')){
    console.log("Map has a detailed description");
} else {
    console.log("Map has no description");
}

// removing elemsts from a map. We can use clear() or delete() methods to remove
// delete true if key/value exists
//clear well that clears the map

map1.delete('career');
console.log(map1);

// getting the number  of elements in a map
console.log(map1.size)
map1.clear();
