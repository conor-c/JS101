// # Problem
// - A program that gets an integer greater than 0
// - Asks if user wants the sum or product between
// - 1 and the entered integer, (inclusive)
// ## Input:
// - An integer greater than 0 and less than infinity
// ## Output:
// Either the sum or the product of all integers between 1 and Input integer.
// ## Explicit Rules:
// - Ask the user for integer greater than 0
// - Ask the user for the sum or product calculation
// - Perform calculation inclusive of user integer and 1.
// ## Implicit Rules:
// - Only add and multiply integers between 1 and the users integer
// ## Questions:
// - Should add and multiple only be integers between the range?
// - Should inputs be sanitized?
// - the user entering 1, return 1? or 2?

// # Examples/ Test Cases
// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s
//
// The sum of the integers between 1 and 5 is 15.
//
// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p
//
// The product of the integers between 1 and 6 is 720.

// # Data Structure
// - an array to push the integers to

// # Algorithm
// 1. Get user integer greater than 0
// 2. Get user input of either sum or product
// 3. Take Step 1 result and find all integers from 1 to user integer
// 4. add or multiply each integer from Step 3 together, accordingly
// 5. Return result

// # Code
let readline = require('readline-sync');

function getUserInput() {
  let userData = {};

  console.log('Please enter an integer greater than 0: ');
  userData.Integer = Number(readline.prompt());
  console.log("Enter 's' to compute the sum, or 'p' to compute the product.");
  userData.Operator = readline.prompt().toLowerCase();
  if (userData.Operator === 's') {
    userData.Operator = 'sum';
  } else if (userData.Operator === 'p') {
    userData.Operator = 'product';
  }

  return userData;
}

function calculateSumOrProduct() {
  let userData = getUserInput();

  if (userData.Operator === 'sum') {
    userData.Total = 0;
    for (let integers = 1; integers <= userData.Integer; integers++) {
      userData.Total += integers;
    }
  } else if (userData.Operator === 'product') {
    userData.Total = 1;
    for (let integers = 1; integers <= userData.Integer; integers++) {
      userData.Total *= integers;
    }
  }
  return userData;
}

function displayResult () {
  let userData = calculateSumOrProduct();
  let operator = userData.Operator;
  let integer = userData.Integer;
  let total = userData.Total;

  console.log(`The ${operator} of the integers between 1 and ${integer} is ${total}.`);
}

displayResult();

//TODO: Input validation
