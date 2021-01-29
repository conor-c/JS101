// # Problem
// - Prompt for a bill amount and a tip rate, compute the tip and log both
// - the tip and the total amount of the bill to the console,
// - no input validation needed
// ## Input:
// - valid numbers
// ## Output:
// - tip amount and total bill to console
// ## Explicit Rules:
// - log both the tip amount and the total bill to the console
// ## Implicit Rules:
// - return a string containing a label, and round the bill to only 2 decimals
// ## Questions:
// - Should the percent input be .10 for 10% or 10% for 10%.
// - Should we prompt on same line or new line?

// # Examples/ Test Cases
// What is the bill? 200
// What is the tip percentage? 15
//
// The tip is $30.00
// The total is $230.00

// # Data Structure
// {
//   billAmount: 200,
//   tipPercentage: 15,
//   tipAmount: 30,
//   totalBill: 230
// }

// # Algorithm
// 1. Ask user for bill amount.
// 2. Ask user for tip percentage.
// 3. Compute tip percentage.
// 4. Compute total amount (bill + tip).
// 5. Return results from Steps 3 & 4.

// # Code

let readline = require('readline-sync');

function getUserInput() {
  let usersBill = {};

  console.log('What is the bill?');
  usersBill.billAmount = Number(readline.prompt());
  console.log('What is the tip percentage?');
  usersBill.tipPercentage = Number(readline.prompt()) / 100;

  return usersBill;
}

function calculateTotalBill() {
  let usersBill = getUserInput();

  usersBill.tipAmount = usersBill.billAmount * usersBill.tipPercentage;
  usersBill.totalBill = usersBill.billAmount + usersBill.tipAmount;

  return usersBill;
}

function displayBill() {
  let totalBill = calculateTotalBill();

  console.log(`The tip is $${totalBill.tipAmount.toFixed(2)}`);
  console.log(`The total bill is $${totalBill.totalBill.toFixed(2)}`);
}

displayBill();