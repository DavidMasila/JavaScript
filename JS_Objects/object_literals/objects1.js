// JS objects
// objects literal

const greet = {
    name:'Masila',
    sayHi:function () {
        console.log("Hellow fool!")
    },
    otherName: 'David',
}

greet.name = "David";
console.log(greet.name);
console.log(greet.sayHi);
greet.sayHi();

Object.keys(greet).forEach((key) => {
    console.log(`${key} => ${greet[key]}`)
});