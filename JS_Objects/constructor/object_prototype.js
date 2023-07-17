// Adding properties and methods to a constructor function using a prototype

function Person(name, age){
    this.name = name
    this.age = age
}

//creating objects

const person1 = new Person("David",56);
const person2 = new Person("Antony", 56);

// adding new property to the constructor function

Person.prototype.gender = "Male"

console.log(person1.name, person1.age, person1.gender);
console.log(person2.gender);

// in js to use constructor functions you need to state "New" followed by constructor function name
