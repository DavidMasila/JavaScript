// using JavaScript Object.defineProperty()
//We can use object.defineProperty() to add getters and setters

const student = {
    firstName: "Monica"
}

Object.defineProperty(student, "getName", {
    get : function () {
        return this.firstName;
    }
});

Object.defineProperty(student, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});

Object.defineProperty(student, "Age", {
    value:78,
});

console.log(student.getName);
student.changeName = "Habesha";
console.log(student.getName);
console.log(student.Age);