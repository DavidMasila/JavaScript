// Arrow functions do no have their own this!
// when this is called it refers to its parent scope!

function Person() {
    this.name = "Masila"
    this.age = 25
    this.sayName = function () {

        //accessible
        console.log(this.name);

        function innerfunc () {

            // global object
            console.log(this.age);
            console.log(this);
        }

        innerfunc();
    }
}

let x = new Person();
x.sayName();