//passing arguments to generator functions

function* genFunc() {
    let x = yield "Hellow";
    // the value of yield is not assigned to x
    console.log(x);
    console.log("Something else");

    yield 5;
}

const funcObj = genFunc();
console.log(funcObj.next());
// here the program starts from let x and assigned 5 to x
console.log(funcObj.next(5));
// console.log(funcObj.next(7));