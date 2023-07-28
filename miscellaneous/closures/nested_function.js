// a nested function is a function contained inside another function

function greet (name) {
  // inner function
  function displayName () {
    console.log(`Hi ${name}`);
  }

  // display inner function.
  displayName();
}

// so we call the outer function is we want to run function
greet('masila');
