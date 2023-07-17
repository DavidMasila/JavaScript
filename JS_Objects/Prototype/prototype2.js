// JavaScript prototype
// used to add properties to a constructor function

function Person () {
    this.name = 'Masila David';
    this.career = 'Software Engineering';
}
  
// creating objects
const Person1 = new Person();
const Person2 = new Person();

// updating the constructor function using a prototype method

Person.prototype.gender = 'Male';

// person1 and Person 2 will inherit the defined protype property

console.log(Person1.gender);
console.log(Person.prototype)
// modifying the peroperty for person 2

Person2.gender = 'Female';

console.log(Person2.gender);

// adding methods to the constructor function using prototype

Person.prototype.greet = function () {
console.log("Hello " + this.name);
}

Person2.greet();