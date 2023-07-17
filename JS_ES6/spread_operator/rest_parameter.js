// the rest parameter is just the spread parameter used as a parameter
// gives back an array
let randomFunc =  function (...args){
    console.log(args)
}

randomFunc(1,2,3,4,5,6);


function sum(x, y, z){
    console.log(x + y + z);
}

const numbers = [23,45,67,78,89];
sum(...numbers);