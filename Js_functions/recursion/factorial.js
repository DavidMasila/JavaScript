function factorial (num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

if (process.argv.length < 3) {
  console.log('Please input a number to find factorial for!!');
  process.exit(1);
}

try {
  const input = process.argv[2];
  const number = parseInt(input);

  if (isNaN(number)) {
    throw new Error(`"${input}" is not a valid integer input`);
  } else {
    const result = factorial(number);
    console.log(result);
  }
} catch (e) {
  console.log(e + '');
  process.exit(1);
}
