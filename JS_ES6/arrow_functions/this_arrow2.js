function Person() {
    this.name = "Masila"
    this.age = 50
    this.sayName = function (){
        console.log(this.name)

        let innerFunc = () => {
            console.log(this.age)
        }

        innerFunc()
    }
}

let x  = new Person();
x.sayName();