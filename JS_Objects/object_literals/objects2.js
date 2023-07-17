// adding methods to js objects 

let mySelf = {}

mySelf.name = "David Masila";

mySelf.describe = function () {
    console.log("Developer Full time!");
};

mySelf.age = "26";
mySelf["Siblings"] = ["Antony", "Faith"]

mySelf.describe();
console.log(mySelf.Siblings);