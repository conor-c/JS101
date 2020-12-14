// ** command line calculator
// 1. Ask the user for the first number they want to use
// 2. Ask the user for the second number they want to use
// 3. Ask the user what type of operation they want to perform
//    3a. -- between add, subtract, multiply, or divide
// 4. Perform the requested operation from 3, using inputs from 1 and 2
// 5. Return the result to the user

const readline = require('readline-sync');
console.log('Welcome to the Terminal Calculator\n');

console.log("What's the first number?");
let number1 = readline.question();

console.log("What's the second number?");
let number2 = readline.question();

console.log('Great! What operation would you like to perform?\n1. Add 2. Subtract 3. Multiply 4. Divide');
let operation = readline.question();

let output;
if (operation === '1') {
  output = Number(number1) + Number(number2);
} else if (operation === '2') {
  output = Number(number1) - Number(number2);
} else if (operation === '3') {
  output = Number(number1) * Number(number2);
} else if (operation === '4') {
  output = Number(number1) / Number(number2);
}

console.log(`The result is: ${output}`);
//tried to add or (||) operators for word inputs ex: 'add'
//but it was always stopping at the first operation
//unsure of why at this point, decided to move on