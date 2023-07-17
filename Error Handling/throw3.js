const number = 5;

try {
    throw new Error("This is the throw");
} catch (error) {
    console.log("An error Caught");

    if (number + 8 > 10) {

        //statement to handle exceptions
        console.log("Error message " + error);
        console.log("Error Resolved");
    }

    else {

        //cannot handle the exception rethrow the exception
        throw new Error("The number is low");
    }
}