const description = {
    name: "Your name",
    age: 56,
    school: "Where you learn",
    hobbies: ["Swimming","Gaming","Exercising"]
}

for (let i in description){
    // the i here gets the keys
    console.log(`${i} matches ${description[i]}`);
}


const hobbies =  description['hobbies'];

for(let i in hobbies){
    console.log(hobbies[i]);
}