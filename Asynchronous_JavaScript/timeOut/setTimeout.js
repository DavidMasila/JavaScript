function greet(name) {
    console.log("Hello", name);
}

setTimeout(function() {
    greet("Masila");
}, 2000)

let intervalId = setTimeout(function() {
    greet("Masila");
}, 2000)

console.log(intervalId);  