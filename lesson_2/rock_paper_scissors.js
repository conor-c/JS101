const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let playerScore = 0;
let computerScore = 0;
const WINNING_SCORE = 5;
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

function calculateScore(choice, computerChoice) {
  if (WINNING_MOVES[choice].includes(computerChoice)) {
    playerScore += 1;
  } else if (LOSING_MOVES[choice].includes(computerChoice)) {
    computerScore += 1;
  }
}

function displayWinner(choice, computerChoice) {
  prompt(`You picked ${choice}, the computer picked ${computerChoice}.`);

  if (WINNING_MOVES[choice].includes(computerChoice)) {
    prompt(`You win! You've won ${playerScore}/${WINNING_SCORE} times!`);
  } else if (LOSING_MOVES[choice].includes(computerChoice)) {
    prompt(`Computer Wins! Computer has won ${computerScore}/${WINNING_SCORE} times!`);
  } else {
    prompt("It's a Tie!");
  }
}

function predictChoice(choice) {
  if (choice.startsWith(VALID_CHOICES[0].slice(0, 1))) {
    choice = VALID_CHOICES[0];
  } else if (choice.startsWith(VALID_CHOICES[1].slice(0, 1))) {
    choice = VALID_CHOICES[1];
  } else if (choice.startsWith(VALID_CHOICES[2].slice(0, 2))) {
    choice = VALID_CHOICES[2];
  } else if (choice.startsWith(VALID_CHOICES[3].slice(0, 1))) {
    choice = VALID_CHOICES[3];
  } else if (choice.startsWith(VALID_CHOICES[4].slice(0, 2))) {
    choice = VALID_CHOICES[4];
  }
  return choice;
}

function getChoice() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question().toLowerCase();
  choice = predictChoice(choice);

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice.");
    choice = readline.question().toLowerCase();
    choice = predictChoice(choice);
  }
  return choice;
}

function playAgain() {
  prompt('Want to play again? (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt('Please enter "yes" or "no".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'y') {
    playerScore = 0;
    computerScore = 0;
    console.clear();
  }
}

while ((playerScore < WINNING_SCORE) && (computerScore < WINNING_SCORE)) {
  let choice = getChoice();
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  calculateScore(choice, computerChoice);
  displayWinner(choice, computerChoice);

  if (playerScore === WINNING_SCORE) {
    prompt('You are the Grand Winner!\n');
    playAgain();
  } else if (computerScore === WINNING_SCORE) {
    prompt('Computer is the Grand Winner!\n');
    playAgain();
  }
}