/*  PROBLEM
given 3 input lengths as numbers
return the type of triangle if any
*/

/* INPUT
3 numbers
*/

/* Output
triangle type
1. equilateral
2. isosceles
3. scalene
or 'invalid'
*/

/*  Rules
equilateral: all three sides are of equal length
isosceles: two sides are of equal length, while the third is different
scalene: all three sides are of different lengths
Valid Triangle: the sum of the lengths of the two shortest sides must be
greater than the length of the longest side
All sides must have a length greater than 0
*/

/* Questions

*/

// EXAMPLES/ TEST CASES
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

/* DATA STRUCTURE
an array to contain the sizes
*/

/* ALGORITHM
1. put all the sizes into an array
2. sort the array from smallest to largest
3. if any are zero, return invalid
4. if the first two sides combined aren't equal to the last side, return invalid
5. if all three sides are equal return equilateral
6. if none of the sides are equal return scalene
7. otherwise return isosceles
*/

// CODE

function triangle(sideA, sideB, sideC) {
  let triangle = [sideA, sideB, sideC].sort((a, b) => a - b);
  if (!triangle.every(side => side > 0)) return "invalid";
  if (!(triangle[0] + triangle[1] > triangle[2])) return "invalid";
  if (triangle[0] === triangle[1] && triangle[1] === triangle[2]) return "equilateral";
  if (triangle[0] === triangle[1] || triangle[1] === triangle[2]) return "isosceles";
  return "scalene";
}