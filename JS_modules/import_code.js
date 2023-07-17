// importing greetPerson from greet.js file
import { greetPerson, calculator as multi, myName } from './export_code.js';

// importing a defalt function
// it can be called whatever name and will work
import anything from './export_code.js';

// using greetPerson() defined in greet.js
let displayName = greetPerson('Jack');

console.log(displayName); // Hello Jack
console.log(myName)
multi(10, 80);
anything();