// we can also return the nested function 

function sayHi(name){
    // console.log("Hello from the outer function");

    function greet(){
        console.log(`Hello ${name} from the inner function`)
    }

    //returning the inner function
    return greet;
}

const g1 = sayHi('Mwendwa');
g1();