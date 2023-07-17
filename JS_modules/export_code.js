// exporting a function
export function greetPerson(name) {
    return `Hello ${name}`;
}


export function calculator(a, b) {
    let multiply = a * b;
    console.log(multiply);
}

export const myName = "David Masila";

//default export


export default function saySomething() {
    console.log("Hey i am the default function");
}