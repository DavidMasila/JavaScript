// Removing elemts from Arrays

let randomShit = ["Work","Sky","Elon","Studio","Coding"]
randomShit.sort()
let firstTwo = randomShit.slice(0,2);
console.log(firstTwo);
//using pop. Removes the last element and returns it

let removedItem = randomShit.pop();
console.log(removedItem);
console.log(randomShit);

//using shift to remove items in the array
//shift also returns the removed first item

let shiftedItem = randomShit.shift();
console.log(shiftedItem);
console.log(randomShit)

console.log(randomShit.indexOf("Elon"));