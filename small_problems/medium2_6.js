/*  PROBLEM
returns the difference between the square of the sum of the integers leading
up to the arg
and the sum of the squares
*/

/* INPUT
positive integer
*/

/* Output
sum squared - squared sum
*/

/*  Rules

*/

/* Questions

*/

// // EXAMPLES/ TEST CASES
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150

/* DATA STRUCTURE

*/

/* ALGORITHM
1. first get all the integers from 1 to the given integer, inclusive
2. set a variable to the result of the sum of all of 1, squared
3. set a variable to the result of the square of all of 1, summed
subtract 3 from 2
*/

// CODE

function sumSquareDifference(num) {
  let allPositiveIntegers = [];

  for (let int = 1; int <= num; int += 1) {
    allPositiveIntegers.push(int);
  }

  let sumsSquared = (allPositiveIntegers
    .reduce((total, value) => total + value)) ** 2;

  let squaresSummed = allPositiveIntegers.reduce((total, value) => {
    return total + (value ** 2);
  });

  return sumsSquared - squaresSummed;
}