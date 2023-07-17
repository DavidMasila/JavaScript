// arrow functions lack argument binding 

let x = function () {
    console.log(arguments)
}

// prints out the arguments
x(123,456,789);


let y = () => console.log(arguments);

// Reference Error
y(123,456,789);

// to solve the problem of argument binding in arrow functions we can use spread operator

let z = (...n) => {
    return n;
};

z(123,456,789).forEach(elem => {
    console.log(elem);
});
