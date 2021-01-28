// Problem
// - Log all even numbers from 1-99 inclusive
// Questions:
// - Should the program iterate over every number from 1-99?
// - Should the program start at 1? Can it start at 2?

// Examples/ Test Cases
// > logEvenNumbers();
// > 2
// > 4
// > 6
// > 8
// > 10
// > ...

// Data Structure
// No collections needed

// Algorithm
// 1. Log first even number (2)
// 2. Increment number by 2
// 3. While the number is less than or equal to 98, repeat 1 & 2

// Code
function logEvenNumbers() {
  for (let currentNum = 2; currentNum <= 98; currentNum += 2) {
    console.log(currentNum);
  }
}

logEvenNumbers();
