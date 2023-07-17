function delay (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise has been handled');
    }, ms);
  });
}

async function waitForDelay () {
  try {
    console.log('Waiting for promise to be handled');
    let result = await delay(5000);
    console.log(result);
  } catch (error) {
    console.log('Error found');
    console.log('Error is ' + error);
  } finally {
    console.log('If you see the error it didnt go through LOL');
  }
}

//calling the async function
waitForDelay();
