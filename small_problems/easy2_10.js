const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

function stringToSignedInteger(signedString) {
  let value = 0;
  let isNegative;
  let numArray = [];

  for (let idx = 0; idx < signedString.length; idx++) {
    if (signedString[idx] === '+') continue;
    if (signedString[idx] === '-') {
      isNegative = true;
      continue;
    }
    numArray.push(DIGITS[signedString[idx]]);
  }

  numArray.forEach(num => (value = (10 * value) + num));
  if (isNegative) {
    value *= -1;
  }

  return value;
}

console.log(stringToSignedInteger("4321")); // === 4321); // logs true
console.log(stringToSignedInteger("-570")); // === -570); // logs true
console.log(stringToSignedInteger("+100")); // === 100); // logs true
