// Problem
//  Build a program that gets the users age, and when they would like to retire
//  Display what year it is currently, and what year they will retire at
//  and how many years till then

// Test Case
// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

// Questions
//  Do we need to check for input values?
//  Do we want the year to be hard coded, or should we get the year
// Algorithm
//  Get user age
//  Get what age the user would like to retire at
//  subtract user current age into the retire age to get how many years left
//  get the year
//    This should be the harder part
//  add the year to the years left for user
//  display the updated year
//  display the users years to retire

let readlineSync = require('readline-sync');

function timeUntilRetire() {
  let currentYear = new Date().getFullYear();
  let userAge = Number(readlineSync.question(`What is your age? `));
  let userRetireAge = Number(readlineSync.question(`At what age would you like to retire? `));
  let yearsLeftToRetire = userRetireAge - userAge;
  let yearOfRetirement = currentYear + yearsLeftToRetire;

  console.log(`It's ${currentYear}. You will retire in ${yearOfRetirement}.`);
  console.log(`You have only ${yearsLeftToRetire} years of work to go!`);
}

timeUntilRetire();