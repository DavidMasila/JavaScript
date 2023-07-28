// closures provide access to the outer scope of a function from the inner function
// this is even after the outer function has closed.

function greet(){
    let name = 'Masila';

    function sayHi(){
        console.log(`Hello there ${name}`)
    }

    return sayHi;
}

const wossup = greet();
console.log(wossup);
wossup();