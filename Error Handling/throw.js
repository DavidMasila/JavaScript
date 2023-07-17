const number = 40;

try {
    if(number > 50) {
        console.log("Success");
    } else {

        //user-defined throw statement
        throw new Error("The number is lower than 50");
    }

    //if throw executes the statement below doesn't execute
    console.log("Hello");
} catch (error) {
    console.log("An Error was caught")
    console.log("Error message:" + error)
}