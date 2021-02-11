// Problem
// - Write a program that will ask for the user's name, and greet the user.
// - If the user writes ! after their name, return greeting as a yell.
// Input: Get users name (string)
// Output: Greeting of user, yell if 'name!'
// Explicit Rules:
// - ASK for the user's name
// - Greet the user, yell if the name was 'name!'
// Implicit Rules:
// - Greet the user using their own name
// Questions:
// - Should it capitalize names that weren't given as capitals?
// - How should we handle full names?
// - Should we account for empty inputs?

// Examples/ Test Cases
// What is your name? Bob
// Hello Bob.
// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

// Data Structure
// - A variable to store the users name
// - require readline-sync
// - conditional for yelling

// Algorithm
// 1. Create variable userName
// 2. Get users name and push to userName
// 3. Ensure each word in userName is capitalized
// 4. If '!' is found from name, yell in response
// 5. Otherwise greet normally

// Code
const readline = require('readline-sync');

function greetUser() {
  let userInput = readline.question('What is your name?\n');
  userInput = userInput.split(' ');

  for (let idx = 0; idx < userInput.length; idx += 1) {
    userInput[idx] = userInput[idx][0].toUpperCase() +
                     userInput[idx].substring(1);
  }

  let userName = userInput.join(' ');
  if (userName.includes('!')) {
    userName = userName.toUpperCase().slice(0, -1);
    console.log(`HELLO ${userName}, WHY ARE WE YELLING?!?!`);
  } else {
    console.log(`Hello ${userName}, nice to meet ya!`);
  }
}
greetUser();

//Bug: if we have a ! inbetween the name, like j!ohn, it returns j!oh