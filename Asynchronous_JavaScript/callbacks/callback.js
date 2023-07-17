function one (secondFunction) {
  console.log('I call second function here ... ');
  secondFunction();
}

function two () {
  console.log('Here it is');
}

one(two);
