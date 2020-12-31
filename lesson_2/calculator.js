// ** command line calculator
// 1. Ask the user for the first number they want to use
// 2. Ask the user for the second number they want to use
// 3. Ask the user what type of operation they want to perform
//    3a. -- between add, subtract, multiply, or divide
// 4. Perform the requested operation from 3, using inputs from 1 and 2
// 5. Return the result to the user

const readline = require('readline-sync');
const MESSAGES = require('./calculator_MESSAGES.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES.welcome);

function getNumbers() {
  prompt(MESSAGES.number1);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES.invalidNumber);
    number1 = readline.question();
  }

  prompt(MESSAGES.number2);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES.invalidNumber);
    number2 = readline.question();
  }

  return [number1, number2];
}

function pickOperator() {
  prompt(MESSAGES.pickOperator);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES.invalidOperator);
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
  return output;
}

while (true) {
  prompt(MESSAGES.output + calculate());
  prompt(MESSAGES.restart);

  let askToRestart = readline.question().toUpperCase();
  if (askToRestart !== 'Y') break;
}
