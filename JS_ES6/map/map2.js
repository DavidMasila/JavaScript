// working with maps
// 1. Interating through maps using for...of or forEach

let map1 = new Map();
map1.set('description', { name: 'masila', age: 25, gender: 'male' });
map1.set('career', 'software Engineering');
map1.set('languages spoken', ['kamba', 'swahili', 'English']);

for (let [key, value] of map1) {
  console.log(`${key} - ${JSON.stringify(value)}`);
}

for (let [key, value] of map1) {
    console.log(`${key} - ${value}`);
  }


// using forEach method
map1.forEach(( value, key) => {
    console.log(`${key} - ${value}`);
})


//iterating over the keys only
for(let key of map1.keys()){
    console.log(key);
}

//iterating over the values only
for(let value of map1.values()){
    console.log(value)
}
