// creating a constructor function that takes in paramaters 

function Person(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
    this.greetPerson = function () {
        console.log(`Hellow ${this.name}, welcome aboard. You are ${this.age} years old and are a ${this.gender}`)
    }
}

const person1 = new Person('David', '25', 'Male');
person1.greetPerson();
const person2 = new Person('Percival', '25', 'Female');
person2.greetPerson();
