//generators provide a bew way of working with functions and iterators
//Using yield to pause execution of a code.

function* generatorFunc(){
    console.log("Before first yield");
    yield 1;
    console.log("After yield 1");
    console.log("Before yield 2");
    yield 2;
    console.log("After yield 2");
    console.log("Before yield 3")
    yield 3;
    console.log("After yield 3")
}

const genObj = generatorFunc();
//will run code to the first yield statement
console.log(genObj.next());
//will run code to the next yield statement from the previous 
console.log(genObj.next());
