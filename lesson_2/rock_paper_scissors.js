const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WINNING_MOVES = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock']
};

const LOSING_MOVES = {
  rock: ['paper', 'spock'],
  paper: ['scissors', 'lizard'],
  scissors: ['rock', 'spock'],
  lizard: ['scissors', 'rock'],
  spock: ['paper', 'lizard']
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You picked ${choice}, the computer picked ${computerChoice}.`);

  if (WINNING_MOVES[choice].includes(computerChoice)) {
    prompt('You win!');
  } else if (LOSING_MOVES[choice].includes(computerChoice)) {
    prompt('Computer Wins!');
  } else {
    prompt("It's a Tie!");
  }
}

//WORK ON THIS
function getChoice() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question().toLowerCase();

  if (choice.startsWith('r')) {
    choice = 'rock';
  } else if (choice.startsWith('p')) {
    choice = 'paper';
  } else if (choice.startsWith('sc')) {
    choice = 'scissors';
  } else if (choice.startsWith('sp')) {
    choice = 'spock';
  } else if (choice.startsWith('l')) {
    choice = 'lizard';
  }

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice.");
    choice = readline.question().toLowerCase();
  }
  return choice;
}

while (true) {
  let choice = getChoice();
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Want to play again? (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt('Please enter "yes" or "no".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') {
    break;
  }
  console.clear();
}