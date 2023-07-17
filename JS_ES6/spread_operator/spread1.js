//spread operator used to spread an iterable or an array

const randomArray = ["Masila","David","Mwendwa"];

console.log(randomArray);
console.log(...randomArray);

// copying an array using the spread operator

const newArray = [...randomArray, "Other","Random","Stuff"];

console.log(newArray);
console.log(...newArray);

// cloning arrays using spread operator

let arr1 = [1,2,3]
let arr2 = arr1

//cloning using the spread operator stops reference assigning

let arr3 = [...arr1]

arr2.push(10);

console.log(arr1, arr2, arr3)

// spread operator with objects

const obj1 = {x:1, y:2};
const obj2 = {z:3};

const finalObj = {...obj1, ...obj2}
console.log(finalObj);

