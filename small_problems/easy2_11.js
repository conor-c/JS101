// Code
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(integer) {
  let resultingString = '';

  do {
    let remainder = integer % 10; // resulting in any integer in the ones place, or zero if it's zero
    integer = Math.floor(integer / 10); // reassign integer to equal the sequence of digits to the left of the remainder (removes right digit)

    resultingString = DIGITS[remainder] + resultingString; // gets the string of the remainder (which correlates to the index of the DIGITS array)
  } while (integer > 0);
  return resultingString;
}

// Test Cases
console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"