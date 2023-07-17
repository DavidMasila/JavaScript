let numerator = 100;
let denominator = 0;

function divide (upperNum, lowerNum){
    try{
       let div = upperNum / lowerNum;
       console.log(div);
       console.log(a)
    } catch (er) {
        console.log("Caught this error " + er);
    } finally {
        console.log("The function might have run or not");
    }
}

divide(numerator, denominator);