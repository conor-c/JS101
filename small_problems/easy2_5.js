// Problem
//  - Prompt the user for two positive integers, then print the result of
//    the following operators using those integers as operands.
//    Addition, Subtraction, Product, Quotient, Remainder, and Power.
//  Input: Two valid positive integers
//  Output: The result of performing addition, subtraction, product,
//          quotient, remainder, and power.
//  Explicit Rules:
//    1. Don't need to validate input.
//    2. Prompt the user for the Input numbers
//  Implicit Rules:
//    1. Display the original numbers, as well as the operator sign
//    2. Division should be be rounded down to the smallest whole integer.
//  Questions:
//    1. Is there an upper limit allowed for user inputted numbers?
//    2. Should the program be created with pure functions?

// Example/ Test Cases
// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23

// Data Structure
//  Function List:
//    - prompt (console.log pizzazz)
//    - getUserInput (prompt and get the two input numbers)
//    - calculateOperations (probably return an object with each math operation
//      as well as the operator used as a string)
//    - displayExpressions (a function that iterates a prompt for each
//      expression so it's not needed to type it all)
// Algorithm


// Code
const READLINE = require('readline-sync');

function prompt(string) {
  console.log(`==> ${string}`);
}

function getUserInput() {
  let userInput = [];

  prompt('Enter the first number:');
  userInput[0] = Number(READLINE.question());
  prompt('Enter the second number:');
  userInput[1] = Number(READLINE.question());

  return userInput;
}

function calculateOperations(userInput) {
  let [a, b] = userInput;
  let results = {
    userNumOne: a,
    userNumTwo: b,
    add: ['+', a + b],
    subtract: ['-', a - b],
    multiply: ['*', a * b],
    divide: ['/', Math.floor(a / b)],
    remainder: ['%', a % b],
    power: ['**', a ** b],
  };
  return results;
}

function displayExpressions(results) {
  let resultOperators = Object.keys(results).filter(key => key !== 'userNumOne' && key !== 'userNumTwo');

  resultOperators.forEach(operation => {
    prompt(`${results.userNumOne} ${results[operation][0]} ${results.userNumTwo} = ${results[operation][1]}`);
  });
}

displayExpressions(calculateOperations(getUserInput()));


// // calculateOperations(getUserInput());
// console.log(calculateOperations(getUserInput()));