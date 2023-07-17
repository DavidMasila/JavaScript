// promise version of the async and wait
new Promise((resolve, reject) => {
  // can add more expressions here
  resolve('promise handled');
}).then((result) => {
  console.log('Waiting for promise to be handled');
  setTimeout(() => {
    console.log(result);
  }, 4000);
}).catch(function errorValue (error) {
  console.log(error + '');
}).finally(() => {
  console.log('You might or might not have waited for a few seconds');
});
