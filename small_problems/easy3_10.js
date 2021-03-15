// // Test Cases
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

// Problem
//  Write a function that takes an integer (year) and returns the century
// Input
//  Integer
// Output
//  Century (string)
// Appending 'st', 'nd', 'rd', or 'th' based on the year it is

// Questions
//  How to determine a century?
//    New centuries begin in years that end with 01.
//    So, the years 1901 - 2000 comprise the 20th century
//  What numbers correlate to the 2 letter string ending?
//    These strings are called ordinal indicators
// -st is used with numbers ending in 1 (e.g. 1st, pronounced first)
// -nd is used with numbers ending in 2 (e.g. 92nd, pronounced ninety-second)
// -rd is used with numbers ending in 3 (e.g. 33rd, pronounced thirty-third)
// As an exception to the above rules, all the "teen" numbers ending with 11, 12 or 13 use -th (e.g. 11th, pronounced eleventh, 112th, pronounced one hundred [and] twelfth)
// -th is used for all other numbers (e.g. 9th, pronounced ninth).
// One archaic variant uses a singular -d for numbers ending in 2 or 3 (e.g. 92d or 33d)

// Thoughts
//  figure out how many centuries have occurred based on the given year
//  a century is 100 years, the next century occurs at the start of year 101
//  Right away I'm thinking dividing by 100 and working with the remainder (%)
//    Upon some math work, I realize that if I divide the year by 100,
//    the century will be the number rounded up to the nearest integer

function century(year) {
  let numOfCenturies = Math.ceil(year / 100);
  let lastTwoDigits = String(numOfCenturies).slice(-2);
  let lastDigit = lastTwoDigits[lastTwoDigits.length - 1];

  if (lastTwoDigits === '11' || lastTwoDigits === '12' || lastTwoDigits === '13') {
    console.log(numOfCenturies + 'th');
  } else if (lastDigit === '1') {
    console.log(numOfCenturies + 'st');
  } else if (lastDigit === '2') {
    console.log(numOfCenturies + 'nd');
  } else if (lastDigit === '3') {
    console.log(numOfCenturies + 'rd');
  } else {
    console.log(numOfCenturies + 'th');
  }
}