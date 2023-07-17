function sayMyName() {
    console.log("This is me **** ");
}

let id = setTimeout(sayMyName, 4000)
clearTimeout(id)
console.log("timeOut Cleared and Stopped");