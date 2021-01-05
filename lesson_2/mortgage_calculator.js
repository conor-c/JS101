const readline = require('readline-sync');

function monthlyPayment(loanAmount, monthlyInterestRate, loanDuration) {
  let monthlyInstallments = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));
  let totalInterestPayments = (monthlyInstallments * loanDuration) - loanAmount;
  let totalPayment = (monthlyInstallments * loanDuration).toFixed(2);
  monthlyInstallments = Number(monthlyInstallments).toFixed(2);
  totalInterestPayments = Number(totalInterestPayments).toFixed(2);

  return [monthlyInstallments, totalInterestPayments, totalPayment];
}

function prompt(message) {
  console.log(`=> ${message}`);
}

while (true) {
  prompt('What is your loan amount?');
  let loanAmount = readline.question().split(',');
  loanAmount = parseFloat(loanAmount.join(''));

  prompt('What is your APR?');
  let monthlyInterestRate = (parseFloat(readline.question()) / 100) / 12;

  prompt('How many years is your loan for?');
  let loanYears = Number(readline.question()) * 12;
  prompt('How many months is your loan for?');
  let loanMonths = Number(readline.question());
  let loanDuration = loanYears + loanMonths;

  let results = monthlyPayment(loanAmount, monthlyInterestRate, loanDuration);
  prompt('Your monthly payments will be: $' + results[0]);
  prompt('Your total paid over ' + loanDuration + ' months: $' + results[2]);
  prompt('Your total interest is: $' + results[1]);
  prompt('Would you like to calculate another loan? Y/N');

  let restart = readline.question().toUpperCase();
  if (restart !== 'Y') break;
}

//THINGS TO DO
//check if inputs from user is valid
//specify that months input should not include years
//make sure user can't enter in a fraction for a year .toInt?
//internationalize text with JSON file
//right now APR is expected in 3.2 and not .032, check if decimal is leading
//--deal with that edge case, perhaps functionalize a validation checker?