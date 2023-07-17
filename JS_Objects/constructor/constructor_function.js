// demonstrates the use of constructor function in js
// basically creating classes without using the es6 method
// creating objects

function Person () {
    this.name = "David"
    this.age="25"
    this.specializiation="Backend Development"
}

const someOne = new Person();
console.log(someOne.name);
console.log(someOne.age);
console.log(someOne.specializiation);