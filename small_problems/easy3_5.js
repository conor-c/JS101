// Problem
//  Write a function that logs a right triangle (hypotenuse on the left side)
//  made up of *, where the height is the number provided by the arg
// Input
//  inputArg = number
// Output
//  A triangle made of *, height and base is the number from input

//  Right away I notice that the base of the triangle is the number of * that
//  matches the input value.
//  first row of triangle has 1 star, second row, 2 stars, etc
// empty space is equal to the input - what row it is
//  repeat would be a good method for this function

triangle(9);

//     * // 4 dead spaces 1 star
//    ** // 3 dead spaces 2 stars
//   ***
//  ****
// *****

function triangle(height) {
  for (let row = 1; row <= height; row++) {
    console.log(' '.repeat(height - row) + '*'.repeat(row));
  }
}