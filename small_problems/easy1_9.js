
// Examples/ Test Cases
console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true
// Data Structure
// - an object that stores properities of true if it passes a leap year rule
// - return true if it passes % 4 rule and is less than 1752

// Algorithm
// 1. Check if the year is evenly divisble by 4
//  1a. If year is less than 1752, return true
// 2. Check if the year is evenly divisble by 100
// 3. Check if the year is evenly divisble by 400
// 4. If only 1 & 3 is true, return true.
// 5. If only 1 & 2 are true, return false.
// 6. If 1 & 2 & 3 are true, return true.

// Code
function isLeapYear(year) {
  let leapChecker = {};

  if (year % 4 === 0) {
    leapChecker['isDivisbleBy4'] = true;
    if (year < 1752) {
      return true;
    }
  }
  if (year % 100 === 0) {
    leapChecker['isDivisbleBy100'] = true;
  }
  if (year % 400 === 0) {
    leapChecker['isDivisbleBy400'] = true;
  }

  let rulesSatisfied = Object.keys(leapChecker).length;
  if ((rulesSatisfied === 1) || (rulesSatisfied === 3)) {
    return true;
  }
  return false;
}
