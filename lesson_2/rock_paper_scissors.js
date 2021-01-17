const readline = require('readline-sync');
const WINNING_SCORE = 5;
const WINNING_MOVES = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock']
};
const VALID_CHOICES = Object.keys(WINNING_MOVES);
let playerScore = 0;
let computerScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function calculateScore(choice, computerChoice) {
  if (WINNING_MOVES[choice].includes(computerChoice)) {
    playerScore += 1;
  } else if (WINNING_MOVES[computerChoice].includes(choice)) {
    computerScore += 1;
  }
}

function displayWinner(choice, computerChoice) {
  prompt(`You picked ${choice}, the computer picked ${computerChoice}.`);

  if (WINNING_MOVES[choice].includes(computerChoice)) {
    prompt(`You win! You've won ${playerScore}/${WINNING_SCORE} times!`);
  } else if (WINNING_MOVES[computerChoice].includes(choice)) {
    prompt(`Computer Wins! Computer has won ${computerScore}/${WINNING_SCORE} times!`);
  } else {
    prompt("It's a Tie!");
  }
}

function autoFillChoice(choice) {
  VALID_CHOICES.forEach(validChoice => {
    if (validChoice.startsWith(choice) && choice !== '') {
      choice = validChoice;
    }
  });
  return choice;
}

function spockOrScissorsCheck (choice) {
  while (choice === 's') {
    prompt('Did you mean "sp" for Spock? Or "sc" for Scissors? Or something else?');
    choice = readline.question().toLowerCase().trimStart();
  }
  return choice;
}

function getChoice() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question().toLowerCase().trimStart();
  choice = spockOrScissorsCheck(choice);
  choice = autoFillChoice(choice);

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice.");
    choice = readline.question().toLowerCase();
    choice = spockOrScissorsCheck(choice);
    choice = autoFillChoice(choice);
  }
  return choice;
}

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  return computerChoice;
}

function playAgain() {
  prompt('Want to play again? (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt('Please enter "yes" or "no".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'y') {
    resetGameScore();
  }
}

function resetGameScore() {
  playerScore = 0;
  computerScore = 0;
  console.clear();
}

while ((playerScore < WINNING_SCORE) && (computerScore < WINNING_SCORE)) {
  let choice = getChoice();
  let computerChoice = getComputerChoice();

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