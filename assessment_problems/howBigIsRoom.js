/*  PROBLEM
Get the room dimensions from user, and return the square footage
*/

/* INPUT
length and width of room in meters
*/

/* Output
area of the room in both square meters and square feet
*/

/*  Rules
1 square meter === 10.7639 feet
*/

/* Questions

*/

// EXAMPLES/ TEST CASES
// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

/* DATA STRUCTURE

*/

/* ALGORITHM
1. Prompt the user for the length of the room in meters
2. Prompt the user for width of the room in meters
3. Return 1 * 2 as square meters
4. return square feet as #3 * 10.7639
*/

// CODE

const readline = require('readline-sync');

function promptUserNum(string) {
  let num = readline.question(string);

  while (!checkInputIsNum(num)) {
    console.log('Error: not a valid number.');
    num = readline.question(string);
  }

  return num;
}

function checkInputIsNum(num) {
  if (!(num > 0)) return false;
  return Number.parseFloat(num);
}

function getDimensions() {
  let length = promptUserNum('Enter the length of the room in meters: ');
  let width = promptUserNum('Enter the width of the room in meters: ');
  return {length: length, width: width};
}
function calculateFootage() {
  let room = getDimensions();
  let squareMeters = room.length * room.width;
  let squareFootage = squareMeters * 10.7639;
  return `The area of the room is ${squareMeters.toFixed(2)} square meters (${squareFootage.toFixed(2)} square feet).`;
}

console.log(calculateFootage());