// constructor functions
// creating multiple with constructor functions

function Person(){
    this.name = "John"
    this.age = 34
    this.greet = function () {
        console.log(`Hello ${this.name}`)
    }
}

const person1 = new Person();
const person2 =  new Person();

person1.greet =  function () {
    console.log(`Hellow my age is ${this.age}`)
}

person2.age = 56;

console.log(person1.age);
console.log(person2.age);

person1.greet();
person2.greet();