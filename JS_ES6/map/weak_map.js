// weakMap only takes the key as an object. 
// any other type causes an error
// weakmaps are not iterable
// WeakMaps have methods get(), set(), delete(), and has().

const weakMap = new WeakMap();

let keyObject = {}

weakMap.set(keyObject, 'Wossup');
console.log(weakMap);

