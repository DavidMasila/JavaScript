
// returns a promise

let namesAndCharacters = {
    "masila": "Hardworking",
    "antony": "Brilliant",
    "Tim": "Funny"
};

// let namesAndCharacters = false;

new Promise(function (resolve, reject) {
    if (namesAndCharacters) {
        let lengthOfInputs = Object.keys(namesAndCharacters).length;
        let output = ""
        for (const key in namesAndCharacters) {
            output += `${key} corresponds with ${namesAndCharacters[key]} \n`
        }
        resolve([output, lengthOfInputs])
    } else {
        reject("There are no names and Characters")
    }
}).then(function successValue(result) {
    return result;
}).then(function successValue1(result2) {
    result2.forEach(element => {
        console.log(element);
    });
}).catch(function errorValue(error) {
    console.log(error + "");
}).finally(function () {
    console.log("\n\nThe function follows a simple promise execution")
})