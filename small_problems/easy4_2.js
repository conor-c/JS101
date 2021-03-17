// Problem
//  Get six numbers from user
//  if the sixth number has one of the first 5 numbers,
//  log a message that says it appears in the first 5
//  or log a message that says it doesn't if it doesn't
// Input
//  6 numbers (watch out for types)
// Output
//  String describing if the sixth number had been received previously

// Algorithm
//  Get numbers 1-6
//    Assigned numbers 1-5 to an array
//    check if array includes the sixth number

// Test Case Ex:
// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in 25,15,20,17,23.
const READLINE = require('readline-sync');

function getNumbers() {
  let resultingArray = [];

  for (let num = 1; num <= 6; num++) {
    // has no input checking
    let numString = numToStringedNum(num);
    resultingArray.push(Number(READLINE.question(`Enter the ${numString} number: `)));
  }
  return resultingArray;
}

function numToStringedNum(num) {
  let numString;
  if (num === 1) numString = num + 'st';
  if (num === 2) numString = num + 'nd';
  if (num === 3) numString = num + 'rd';
  if (num === 4 || num === 5) numString = num + 'th';
  if (num === 6) numString = 'last';
  return numString;
}

function checkForNumRepeat() {
  let userArray = getNumbers();
  let lastNum = userArray.pop();

  if (userArray.includes(lastNum)) {
    console.log(`The number ${lastNum} appears in ${userArray}.`);
  } else {
    console.log(`The number ${lastNum} does not appear in ${userArray}.`);
  }
}

checkForNumRepeat();