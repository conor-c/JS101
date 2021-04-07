// Problem
//  Given a number as input, return the number if it's digits were reversed

// Algorithm
//  Convert the number to a string, split the string into an array of numbers
//  reverse the order of the elements, join them together again,
//  convert back to number

function reverseNumber(num) {
  return Number(String(num).split('').reverse().join(''));
}
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1