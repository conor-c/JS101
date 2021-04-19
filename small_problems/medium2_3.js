/*  PROBLEM
Given three degrees, determine the type of triangle
*/

/* INPUT
three integer degrees
*/

/* Output
type of triangle:

    Right: One angle is a right angle (exactly 90 degrees).
    Acute: All three angles are less than 90 degrees.
    Obtuse: One angle is greater than 90 degrees.

*/

/*  Rules
All angles are integer values, the arguments are in degrees
*/

/* Questions

*/

// EXAMPLES/ TEST CASES
console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

/* DATA STRUCTURE
array
*/

/* ALGORITHM
1. Check if any argument is 0, return invalid
2. If the total sum of the arguments are not exactly 180 degrees, return invalid
3. If one angle is 90 degrees, return "right"
4. If all three angles are less than 90, return "acute"
5. Else return "obtuse"
*/

// CODE
function triangle(degA, degB, degC) {
  let degrees = [...arguments];
  if (!degrees.every(noZeros)) return "invalid";
  if (degrees.reduce(is180degrees) !== 180) return "invalid";
  if (degrees.some(isRight)) return "right";
  if (degrees.every(isAcute)) return "acute";
  return "obtuse";
}

function noZeros(angle) {
  return angle > 0;
}

function is180degrees(total, value) {
  return total + value;
}
function isRight(angle) {
  return angle === 90;
}

function isAcute(angle) {
  return angle < 90;
}