// weaksets only take objects as elements
// trying any other data causes error
//weaksets have add(), delete(), has() methods // and are not iterable // 
const weakSet = new WeakSet();
console.log(weakSet);

const obj = {
  message: 'Hi',
  sendMessage: true
};

weakSet.add(obj);

console.log(weakSet);
