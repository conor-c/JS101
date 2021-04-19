// PROBLEM
/*
Return the maximum rotation of any given integer
*/

// Input
/*
an integer
*/

// Output
/*
maximum rotation of any given integer
*/

// Rules
/*

*/

// Questions
/*

*/

// EXAMPLES/ TEST CASES
maxRotation(735291);          // 321579
// maxRotation(3);               // 3
// maxRotation(35);              // 53
// maxRotation(105);             // 15 -- the leading zero gets dropped
// maxRotation(8703529146);      // 7321609845

// DATA STRUCTURE
/*

*/

// ALGORITHM
/*
1. take the first digit and place it at the end, the new first digit
should become immutable
2. take the second digit and place it at the end, both digits are now immutable
3. continue this until out of digits
*/

// CODE
function rotateRightmostDigits(number, count) {
  let numArray = String(number).split('');
  let numbersToRotate = numArray.splice(-count);

  if (numbersToRotate.length > 1) {
    numbersToRotate.push(numbersToRotate.shift());
  }

  return Number(numArray.concat(numbersToRotate).join(''));
}

function maxRotation(number) {
  let count = String(number).length;
  while (count > 1) {
    number = rotateRightmostDigits(number, count);
    count--;
  }
  return number;
}