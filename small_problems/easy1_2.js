// Problem
// - Log all odd numbers from 1 - 99, inclusive, to the console
// - with each number on a separate line.
//
// Questions:
// Should it only log integers?

// Examples/ Test Cases
// logNumbers();
// > 1
// > 3
// > 5
// > ...

// Data Structure
// - Unneeded, no parameters are expected

// Algoritm
// 1. Log starting number (1)
// 2. Increment starting number by 2
// 3. while the number is less than or equal to 99, repeat steps 1 & 2


// Code
function logNumbers() {
  for (let currentNum = 1; currentNum <= 99; currentNum += 2) {
    console.log(currentNum);
  }
}

logNumbers();