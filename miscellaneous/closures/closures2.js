// example 2 of closures

function calculate(x){
    function multiply(y){
        return x * y
    }
    return multiply;
}

const hesabu = calculate(10)(4);
const hisabati = calculate(8);
console.log(hisabati(87));
console.log(hesabu);