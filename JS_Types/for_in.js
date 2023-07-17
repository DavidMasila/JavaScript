// the for ... in  looping method is used to access properties in objects, arrys, strings etc
//syntax

/* for (let key in object){
    //do something
}
*/

const student = {
    name: 'Antony',
    class: 9,
    age: 56
}

for (let keys in student) {
    console.log(`${keys} => ${student[keys]}`);
}

const salaries = {
    jack: 34000,
    masila: 4520254,
    mwendwa: 120058
}

for (let key in salaries) {
    let salary = "$ " + salaries[key];
    console.log(`${key} earns ${salary}`);
}

const randomShit = ["Universe","Posts","Moon","Kangaroo"];

for(let i in randomShit){
    // the i represents indexes.
    console.log(randomShit[i]);
}