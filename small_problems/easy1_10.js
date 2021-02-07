// Problem
// - Create a function that computes the sum of all numbers between 1 and some
//   number, inclusive, that are multiples of 3 or 5.
// Input: A positive integer greater than 1
// Output: The sum of all numbers between 1 and Input number, that are multiples
//         of three and five.
// Expicit Rules:
// - It can bet assumed that the number passed in is an integer greather than 1.
// Implicit Rules:
// - The function does not have to get the Input from a user.
// Questions:
// - Is there a need to solve the problem mathematically?
// - What should be returned when input is less than 3?

// Examples/ Test Cases
console.log(multisum(0));
console.log(multisum(1));
console.log(multisum(2));
console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

// Data Structure
// - An array of integers that are multiples of 3, and array of integers that
//   are multiples of 5.
// - Q: what to do in cases where it is both a multiple of 3, and of 5? (15)
//   A: just add it to the first array, and skip to the next integer.

// Algorithm
// 1. Set startingInteger to 1 (3?)
// 2. While startingInteger <= Input Integer
// 3. Check if startingInteger is divisible by 3 with 0 left over
// 4. If yes, push to multiplesOfThree array, increase startingInteger by 1,
//    skip to Step 3.
// 5. Check if startingInteger is divisble by 5 with 0 left over
// 6. If yes, push to multiplesOfFive array, increase starting Integer by 1,
//    skip to step 2.
// 7. Once startingInteger is > Input Integer, sum the two arrays togther
//    and return the result

// Code
function multisum(inputInteger) {
  let multiplesOfThreeAndFive = findMultiples(inputInteger);

  return multiplesOfThreeAndFive.reduce((total, integer) => {
    return total + integer;
  }, 0);
}

function findMultiples(inputInteger) {
  let startingInteger = 1;
  let multiplesOfThree = [];
  let multiplesOfFive = [];
  let multiplesOfThreeAndFive = [];

  while (startingInteger <= inputInteger) {
    if (startingInteger % 3 === 0) {
      multiplesOfThree.push(startingInteger);
      startingInteger++;
    } else if (startingInteger % 5 === 0) {
      multiplesOfFive.push(startingInteger);
      startingInteger++;
    } else {
      startingInteger++;
    }
  }
  multiplesOfThreeAndFive = multiplesOfThree.concat(multiplesOfFive);
  return multiplesOfThreeAndFive;
}

// Thoughts:
// There was no real reason to push them into seperate arrays
// or even push them into arrays at all. The solution I came up with is non
// obvious, and hard to read what it does.