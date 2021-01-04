/*
To get from user:
1. The loan amount
2. The annual percentage rate (APR) (convert to monthly for forumla use)
3. The loan duration (convert to months)


    m = monthlyPayment
    p = loanAmount
    j = monthlyInterestRate (in months)
    n = loanDuration (in months)


DONE return in dollar and cents amount

CALCULATE: payment due every month
total paid over the course of the loan and number of payments (which is just the loan duration in months)
total of interest paid
percent of interest vs percent of principle from total paid over course of the loan
*/
const readline = require('readline-sync');

function monthlyPayment(loanAmount, monthlyInterestRate, loanDuration) {
  let monthlyInstallments = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));
  let totalInterestPayments = (monthlyInstallments * loanDuration) - loanAmount;
  monthlyInstallments = Number(monthlyInstallments).toFixed(2);
  totalInterestPayments = Number(totalInterestPayments).toFixed(2);

  return [monthlyInstallments, totalInterestPayments];
}

function prompt(message) {
  console.log(`=> ${message}`);
}

while (true) {
  prompt('What is your loan amount?');
  let loanAmount = readline.question();
  loanAmount = parseFloat(loanAmount);


  prompt('What is your APR?');
  let monthlyInterestRate = readline.question();
  monthlyInterestRate = (parseFloat(monthlyInterestRate) / 100) / 12;


  prompt('What is your loan duration?'); // Could ask for years and months seperately
  let loanDuration = readline.question();
  loanDuration = Number(loanDuration);

  let results = monthlyPayment(loanAmount, monthlyInterestRate, loanDuration);
  prompt('your monthly payments are: $' + results[0]);
  prompt('your total interest is: $' + results[1]);
  prompt('Would you like to calculate another loan? Y/N');

  let restart = readline.question().toUpperCase();
  if (restart !== 'Y') break;
}

