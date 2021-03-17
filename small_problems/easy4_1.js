// Problem
//  Build a program that generates a random age for 'Teddy' and logs it to
//  console.
//  The age should be a random number between 20 and 120 inclusive.
// Algorithm
//  Randomize a number between 20-120 inclusive, and assign it to a variable
//    Useful methods:
//    Math.round()
//    Math.random()
//  Using string literals, log it to console with the text:
//  `Teddy is ${age} years old!`

function randomTeddyAge() {
  let randomAge = Math.round((Math.random() * 100) + 20);
  return `Teddy is ${randomAge} years old!`;
}

console.log(randomTeddyAge());

// NOTE: Math.round in this way will NOT return an even distribution.
