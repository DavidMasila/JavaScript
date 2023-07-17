//getting key/values of a map
// we can interate through a map and get key/value of a map using entries()

let map1 = new Map();
map1.set('description', { name: 'masila', age: 25, gender: 'male' });
map1.set('career', 'software Engineering');
map1.set('languages spoken', ['kamba', 'swahili', 'English']);

//looping through a map
for(let elem of map1.entries()){
    if(elem[0] === 'description'){
        map1.delete('description')
    } else {
        console.log(`${elem[0]} : ${elem[1]}`)
    }
}


if(map1.has('career')){
    map1.set('career','Biochemistry');
} else {
    console.log('No updates')
}

console.log(map1)