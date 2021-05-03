/*  PROBLEM
Write a function that takes one integer argument, and return true if the
number's absolute value is odd.
*/

/* INPUT
A valid integer value of positive, negative, or zero
*/

/* Output
True or false depending on if the absolutely value is odd
*/

/*  Rules

*/

/* Questions

*/

// EXAMPLES/ TEST CASES


/* DATA STRUCTURE

*/

/* ALGORITHM
1. 
*/

// CODE

function isOdd(num) {
  return !!(Math.abs(num) % 2 !== 0);
}