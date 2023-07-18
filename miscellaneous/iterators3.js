// creating our own iterator

function displayContents (arr) {
  let n = 0;

  return {
    nextItem () {
      if (n < arr.length) {
        return {
          value: arr[n++],
          done: false
        };
      } else {
        return {
          value: undefined,
          done: true
        };
      }
    }
  };
}

const arr1 = ['masila', 'david', 'mwendwa', 'antony', 'prince', 'daks'];
const arr1Iterator = displayContents(arr1);
console.log(arr1Iterator.nextItem());
console.log(arr1Iterator.nextItem());
console.log(arr1Iterator.nextItem());
console.log(arr1Iterator.nextItem());
console.log(arr1Iterator.nextItem());
console.log(arr1Iterator.nextItem());
console.log(arr1Iterator.nextItem());
