// PROBLEM
/*
Rotate first digit to the last place at location from count
*/

// Input
/*
count, and number, two arguments
*/

// Output
/*
number where the digit located at count from the right, is rotated to the end
of number
*/

// Rules
/*
To perform the rotation, move the first of the digits that you want to rotate
to the end and shift the remaining digits to the left
*/

// Questions
/*
Will arguments always be number types?
Will the numbers always be integers?
*/

// EXAMPLES/ TEST CASES
console.log(rotateRightmostDigits(735291, 1) === 735291);      // 735291
console.log(rotateRightmostDigits(735291, 2) === 735219);      // 735219
console.log(rotateRightmostDigits(735291, 3) === 735912);      // 735912
console.log(rotateRightmostDigits(735291, 4) === 732915);      // 732915
console.log(rotateRightmostDigits(735291, 5) === 752913);      // 752913
console.log(rotateRightmostDigits(735291, 6) === 352917);      // 352917

// DATA STRUCTURE
/*

*/

// ALGORITHM
/*
1. split the number into an array of digits
2. slice off the number of digits given by count from the end
of the number.
3. Rotate the first digit from 2, to the end of the new array
4. concat the new array to the first array
5. rejoin array into a number

*/

// CODE
// refactor to just operate from string instead of array
function rotateRightmostDigits(number, count) {
  let numArray = String(number).split('');
  let numbersToRotate = numArray.splice(-count);

  if (numbersToRotate.length > 1) {
    numbersToRotate.push(numbersToRotate.shift());
  }

  return Number(numArray.concat(numbersToRotate).join(''));
}