//test more
//figure out a looping program
const readline = require('readline-sync');

function monthlyPayment(loanAmount, annualPercentageRate, loanDuration) {
  let monthlyInterestRate = (annualPercentageRate / 100) / 12;
  let monthlyInstallments = loanAmount * (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));

  if (monthlyInterestRate === 0) {
    monthlyInstallments = loanAmount / loanDuration;
  }
  return Number(monthlyInstallments);
}

function totalInterestPayment(monthlyInstallments, loanDuration, loanAmount) {
  let totalInterest = (monthlyInstallments * loanDuration) - loanAmount;
  return Number(totalInterest);
}

function totalPayment(monthlyInstallments, loanDuration) {
  let totalPaid = monthlyInstallments * loanDuration;
  return Number(totalPaid);
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === ''
  || Number.isNaN(Number(number))
  || (Number(number) < 0);
}

function getValidLoanAmount() {
  prompt('What is your loan amount?');
  let loanAmount = readline.question().split(',').join('');

  while (invalidNumber(loanAmount)) {
    prompt('Please enter a valid number.');
    loanAmount = readline.question().split(',').join('');
  }
  return Number(loanAmount);
}

function aprLowChecker(annualPercentageRate) {
  while (annualPercentageRate < 1) {
    prompt("That's a very low APR.");
    prompt('Please note that this program would expect a value of 5% to be entered as 5, and not .05');
    prompt('Are you sure that ' + annualPercentageRate + ' is the annual percentage rate?');
    prompt('Enter "Y" to confirm, or "N" to reenter.');
    let aprConfirm = readline.question();

    if (aprConfirm.toUpperCase() === 'Y') break;
    prompt('What is your APR?');
    annualPercentageRate = readline.question();

    while (invalidNumber(annualPercentageRate)) {
      prompt('Please enter a valid number.');
      annualPercentageRate = readline.question();
    }
  }
  return Number(annualPercentageRate);
}

function getValidAPR() {
  prompt('What is your APR?');
  let annualPercentageRate = readline.question();

  while (invalidNumber(annualPercentageRate)) {
    prompt('Please enter a valid number.');
    annualPercentageRate = readline.question();
  }
  return aprLowChecker(annualPercentageRate);
}

function getYearsDuration() {
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
  return Number(loanYears);
}

function getMonthsDuration() {
  prompt('How many months is your loan for?');
  let loanMonths = readline.question();

  while (invalidNumber(loanMonths)) {
    prompt('Please enter a valid number.');
    loanMonths = readline.question();
  }
  return Number(loanMonths);
}

function getValidLoanDuration() {
  while (true) {
    let loanYears = getYearsDuration();
    let loanMonths = getMonthsDuration();
    if (loanYears + loanMonths === 0) {
      prompt('Please enter a positive value for loan duration.');
      continue;
    }
    let loanDuration = (Number(loanYears) * 12) + Number(loanMonths);
    return Number(loanDuration);
  }
}

function displayResults() {
  let loanAmount = getValidLoanAmount();
  let annualPercentageRate = getValidAPR();
  let loanDuration = getValidLoanDuration();
  let monthlyPayments = monthlyPayment(
    loanAmount, annualPercentageRate, loanDuration);
  let totalPaid = totalPayment(monthlyPayments, loanDuration);
  let interestPaid = totalInterestPayment(
    monthlyPayments, loanDuration, loanAmount);


  prompt('Your monthly payments will be: $' + monthlyPayments.toFixed(2));
  prompt('Your total paid over ' + loanDuration + ' months: $' + totalPaid.toFixed(2));
  prompt('Your total interest is: $' + interestPaid.toFixed(2));
}

while (true) {
  displayResults();
  prompt("Would you like to calculate another loan? Enter 'Y' for Yes, or 'N' for No.");
  let restart = readline.question().toUpperCase();

  if (restart !== 'Y') break;
  console.clear();
}