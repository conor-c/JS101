/*  PROBLEM
Given a number, return the next highest 'featured number'
if there is no more featured number, return an error message
*/

/* INPUT
integer as argument
*/

/* Output
featured number that is the next highest from input
*/

/*  Rules
A featured number is an odd number that is a multiple oy 7, with
no repeated numbers

The largest featured number (by definition) is 9876543201
*/

/* Questions
only integers?
*/

// EXAMPLES/ TEST CASES
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543186));   // 9876543186
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

/* DATA STRUCTURE

*/

/* ALGORITHM
1. set starting number to be 1 more than given number
2. if new number is odd, and divisible by 7, and no repeated digits, return
  2a. No repeated digits
  For every digit, search the number and see if there is a match
3. if any of the conditions in step 2 aren't met, increment number by one
*/

// CODE

function featured(number) {
  const MAX_FEATURED = 9876543201;
  if (number >= MAX_FEATURED) {
    return 'There is no possible number that fulfills those requirements.';
  }

  let num = number + 1;

  while (true) {
    if (!(num % 2 === 0)) {
      while (num % 7 === 0) {
        if (noRepeats(num)) return num;
        num += 14;
      }
    }
    num += 1;
  }
}

function noRepeats(num) {
  return !String(num).split('')
    .sort((a, b) => a - b)
    .filter((digit, idx, arr) => {
      return digit === arr[idx + 1];
    }).length;
}
