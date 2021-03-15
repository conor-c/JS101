// Problem
//  Write a function that returns the index of the first fibonacci number
//  that has the number of digits provided by an argument
// Input
//  a BigInt number representing the number of digits the fibonacci number
//  should have.
// Output
//  The index of the first fibonacci number that has the correct number of
//  digits.
// Explicit Rules
//  the first fibonacci number has an index of 1, not zero
//  The first two numbers in the sequence are 1 by definition
//  Arg will always be greater than or equal to 2
// Questions
//  What the fibonacci sequence?
//    A series of numbers where the next number is the sum of the previous two
//      ex: (1, 1, 2, 3, 5, 8, 13, 21, ...)

// Test Cases
// findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
// findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
// findFibonacciIndexByLength(10n) === 45n;
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

// Data Structure
//  Since our main focus is to know the index of the number, an
//  array seems perfect for this. We can just build the array up until the digit
//  requirement is reached
// Algorithm - (suboptimal as it will be simply build the whole sequence)
//  Initialize a starting array with the values of [1, 1]
//  If input is 1n, return 1n.
//  Initialize a currentFibNum with the value of 2.
//  While (String(currentFibNum)).length < inputArg
//  push currentFibNum to starting array
//  set currentFibNum to the value of the sum of the previous
//    two elements in the starting array
//  continue
//  If String(currentFibNum.length) = inputArg
//  push currentFibNum to starting array
//  return startingArray.length (since the first fib num
//  sequence has an index of 1 not 0)

// Code
//  Do not run, see explanation.
// function findFibonacciIndexByLength(inputArg) {
//   let fibArray = [1n, 1n];
//   let currentFibNum = 2n;
//   while (inputArg > String(currentFibNum).length) {
//     currentFibNum = BigInt(fibArray[fibArray.length - 1]
//                     + fibArray[fibArray.length - 2]);
//     fibArray.push(currentFibNum);
//   }
//   console.log(BigInt(fibArray.length));
// }

// provided solution below.
//  A few reason why my solution is so much worse. I am creating
//  and storing a collection of every single fibonacci number in the sequence.
//  On the last test, its trying to store an array with nearly 50 thousand
//  elements.
//  So not only am I adding giant number together, I'm also storying every
//  number I've added.

// function findFibonacciIndexByLength(length) {
//   let first = 1n;
//   let second = 1n;
//   let count = 2n;
//   let fibonacci;

//   do {
//     fibonacci = first + second;
//     count += 1;
//     first = second;
//     second = fibonacci;
//   } while (String(fibonacci).length < length);

//   return count;
// }
