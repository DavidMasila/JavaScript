const callMe = process.argv[2];
try {
    if(callMe) {
        console.log(callMe);
    } else {
        throw new Error("Please provide a name with at least 2 characters");
    }
} catch (e) {
    console.log("Error caught");
    console.log("The Error is: " + e);
} finally {
    console.log("Program completed either successfully or failed");
}
