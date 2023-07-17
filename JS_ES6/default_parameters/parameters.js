// expressions can also be used as default parameters 
// default parameters given for x and 7 but can be modified nonetheless

let y = function(x =3, y=5, z = x+y) {
    return x + y + z;
}

console.log(y(x=34, y=78));