// ** command line calculator
// 1. Ask the user for the first number they want to use
// 2. Ask the user for the second number they want to use
// 3. Ask the user what type of operation they want to perform
//    3a. -- between add, subtract, multiply, or divide
// 4. Perform the requested operation from 3, using inputs from 1 and 2
// 5. Return the result to the user

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to the Terminal Calculator\n');

function getNumbers() {
  prompt("What's the first number?");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number1 = readline.question();
  }

  prompt("What's the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number2 = readline.question();
  }

  return [number1, number2];
}

function pickOperator() {
  prompt('Great! What operation would you like to perform?\n1. Add 2. Subtract 3. Multiply 4. Divide');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt("That is not a valid operation, please use 1, 2, 3, 4.");
    operation = readline.question();
  }
  return operation;
}

function calculate() {
  let output;
  let numbers = getNumbers();
  let operation = pickOperator();

  switch (operation) {
    case '1':
      output = Number(numbers[0]) + Number(numbers[1]);
      break;
    case '2':
      output = Number(numbers[0]) - Number(numbers[1]);
      break;
    case '3':
      output = Number(numbers[0]) * Number(numbers[1]);
      break;
    case '4':
      output = Number(numbers[0]) / Number(numbers[1]);
      break;
  }

  prompt(`The result is: ${output}\n`);
}

while (true) {
  calculate();
  prompt("Would you like to perform another calculation? (Y/N)");
  let askToRestart = readline.question().toUpperCase();
  if (askToRestart !== 'Y') break;
}

