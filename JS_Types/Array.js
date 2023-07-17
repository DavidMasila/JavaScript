// we can add to arrays using push and unshift

let randomShit = ["Shoes","Television","Bags"]

// add elements  to array 
// Push adds to the very end of the array
randomShit.push("Backbone");

// unshift adds at the very beginning 

randomShit.unshift("Mouse")

randomShit.forEach( (elem) => {
    console.log(elem);
});

