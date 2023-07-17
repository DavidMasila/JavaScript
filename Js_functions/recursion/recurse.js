function countDown(number){
    // function that recurses as it counts down
    console.log(number);
    let new_number = number - 1;

    if(new_number > 0){
        countDown(new_number)
    }
}

if(process.argv.length < 3){
    console.log("Please enter a number to count down from");
    process.exit(1)
}

const input = process.argv[2];
const number = parseInt(input);

if(isNaN(number)) {
    console.log("Invalid number!");
    process.exit(1)
}

countDown(number);