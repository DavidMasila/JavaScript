const arr1 = ['masila', 'david', 'mwendwa', 'antony', 'prince', 'daks'];

// creating a Symbol.iterator() method
const arr1Iterator = arr1[Symbol.iterator]();

console.log(arr1Iterator);

const str = 'Hello';

const strIterator = str[Symbol.iterator]();
console.log(strIterator);

// we can iterate over the iterables using the for ...of

for (const i of arr1Iterator) { console.log(i); }
