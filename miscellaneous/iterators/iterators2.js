// using next() method in iterators

const arr1 = ['masila', 'david', 'mwendwa', 'antony', 'prince', 'daks'];

const arr1Iterator = arr1[Symbol.iterator]();

console.log(arr1Iterator.next());
console.log(arr1Iterator.next());
console.log(arr1Iterator.next());
console.log(arr1Iterator.next());
console.log(arr1Iterator.next());
console.log(arr1Iterator.next());
console.log(arr1Iterator.next());
console.log(arr1Iterator.next());
console.log(arr1Iterator.next());
