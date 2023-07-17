// sets do not accomodate duplicates 

const newSet = new Set([1, "Wossup", ['list item1','list item2']]);
console.log(newSet);
newSet.add("masila")
console.log(newSet.has('masila'));
console.log(newSet.values());

//removing elements from set using clear () and delete () methods
// clear() removing everything

newSet.delete(1);
console.log(newSet.values(), "\n");

//looping through sets
for(let i of newSet){
    console.log(i);
}
