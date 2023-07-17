// changing prototype
// when the prototype value is changed that applies to the new objects
// older declared objects retain the original value 


function Person() {
    this.name = "David Masila"
}

Person.prototype.age = 25;

const person1  = new Person();
console.log(person1.age);

Person.prototype = {age:35}

const person2 = new Person();

console.log(person2.age);
console.log(person1.age);
console.log(Person.prototype);
console.log(person1.__proto__);