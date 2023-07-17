//callback function example

function greet(name, secondFunction){
    console.log("Hellow world");
    //calling the call back function

    secondFunction(name);
}

function sayName(name){
    console.log("My name is ",name);
}

// greet('David', sayName);
//lets used a setTimeout delay of 3 seconds

setTimeout(greet, 3000, 'David', sayName)