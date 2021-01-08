const readline = require('readline-sync');

function monthlyPayment(loanAmount, annualPercentageRate, loanDuration) {
  let monthlyInterestRate = (annualPercentageRate / 100) / 12;

  let monthlyInstallments = loanAmount * (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));

  let totalInterestPayments = (monthlyInstallments * loanDuration) - loanAmount;
  let totalPayment = monthlyInstallments * loanDuration;

  if (monthlyInterestRate === 0) {
    monthlyInstallments = loanAmount / loanDuration;
    totalInterestPayments = 0;
    totalPayment = loanAmount;
  }
  return [monthlyInstallments, totalInterestPayments, totalPayment];
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

while (true) {
  prompt('What is your loan amount?');
  let loanAmount = readline.question().split(',').join('');

  while (invalidNumber(loanAmount)) {
    prompt('Please enter a valid number.');
    loanAmount = readline.question().split(',').join('');
  }
  loanAmount = Number(loanAmount);

  prompt('What is your APR?');
  let annualPercentageRate = readline.question();

  while (invalidNumber(annualPercentageRate)) {
    prompt('Please enter a valid number.');
    annualPercentageRate = readline.question();
  }

  while (annualPercentageRate < 1) {
    prompt("That's a very low APR.");
    prompt('Please note that this program would expect a value of 5% to be entered as 5, and not .05');
    prompt('Are you sure that ' + annualPercentageRate + ' is the annual percentage rate?');
    prompt('Enter "Y" to confirm, or "N" to reenter.');
    let aprConfirm = readline.question();

    if (aprConfirm.toUpperCase() === 'Y') break;
    prompt('What is your APR?');
    annualPercentageRate = readline.question();
  }
  annualPercentageRate = Number(annualPercentageRate);

  prompt('How many years is your loan for?');
  let loanYears = readline.question();

  while (invalidNumber(loanYears)) {
    prompt('Please enter a valid number.');
    loanYears = readline.question();
  }

  if ((loanYears > 0) && (loanYears < 1)) {
    prompt('Fractions of a year are not valid.');
    loanYears = 0;
  }

  prompt('How many months is your loan for?');
  let loanMonths = readline.question();

  while (invalidNumber(loanMonths)) {
    prompt('Please enter a valid number.');
    loanMonths = readline.question();
  }
  let loanDuration = (Number(loanYears) * 12) + Number(loanMonths);

  if (loanDuration === 0) {
    prompt('Please enter a nonzero loan term value.');
    continue;
  }

  let results = monthlyPayment(loanAmount, annualPercentageRate, loanDuration);
  prompt('Your monthly payments will be: $' + results[0].toFixed(2));
  prompt('Your total paid over ' + loanDuration + ' months: $' + results[2].toFixed(2));
  prompt('Your total interest is: $' + results[1].toFixed(2));

  prompt("Would you like to calculate another loan? Enter 'Y' or 'N'.");
  let restart = readline.question().toUpperCase();
  if (restart !== 'Y') break;
  console.clear();
}