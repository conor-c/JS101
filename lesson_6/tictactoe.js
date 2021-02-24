const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const SCORE_TO_WIN = 5;
const WIN_CONDITIONS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [7, 5, 3],
];

function prompt(string) {
  console.log(`=> ${string}`);
}

function displayBoard(board) { // expects an obj with 1-9 as keys and values as either O or X or ' '
  // console.clear();
  prompt(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initalizeBoard() { // creates an object with 1-9 as keys, and ' ' as values
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function joinOr(arr, delimiter = ', ', joinWord = 'or') { //possible refactor to switch statement
  let copyOfArr = [...arr];
  if (copyOfArr.length === 0) return '';
  if (copyOfArr.length === 1) return String(copyOfArr[0]);
  if (copyOfArr.length > 1) {
    if (copyOfArr.length === 2) return copyOfArr.join(` ${joinWord} `);
    let lastElem = copyOfArr.pop();
    return copyOfArr.join(delimiter) + delimiter + joinWord + ' ' + lastElem;
  }
  return copyOfArr;
}

function emptySquares(board) { // returns an array of unused possible moves
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) { // expects an object with 1-9 keys
  let square; // so we can use square outside the loop

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }
  board[square] = HUMAN_MARKER;
}

function findRisk(winCombo, board, marker) {
  let comboState = winCombo.map(square => board[square]); // assigns the current values of the winCombo line

  if (comboState.filter(val => val === marker).length === 2) {
    let comboFinisher = winCombo.find(square => {
      return board[square] === INITIAL_MARKER;
    });
    if (comboFinisher !== undefined) {
      return comboFinisher;
    }
  }
  return null; //if the last square in winCombo isn't empty, return null
}

function offenceAttempt(board) {
  for (let line = 0; line < WIN_CONDITIONS.length; line++) { // offence attempt
    let winCombo = WIN_CONDITIONS[line]; // an array of keys that together, win
    let logicalChoice = findRisk(winCombo, board, COMPUTER_MARKER); //
    if (logicalChoice) return logicalChoice;
  }
  return null;
}

function defenceAttempt(board) {
  for (let line = 0; line < WIN_CONDITIONS.length; line++) { // defence attempt
    let winCombo = WIN_CONDITIONS[line]; // an array of keys that together, win
    let logicalChoice = findRisk(winCombo, board, HUMAN_MARKER); //
    if (logicalChoice) return logicalChoice;
  }
  return null;
}

function computerChoosesSquare(board) { // computer won't make another move if if are satisfied
  let logicalChoice = offenceAttempt(board); // declare so it's outside of for loop scope

  if (!logicalChoice) { // if no winning move is available, look for game saving moves
    logicalChoice = defenceAttempt(board);
  }

  if (!logicalChoice) { // if no winning move, and no defending move is available, pick center tile
    if (board[5] !== HUMAN_MARKER) {
      logicalChoice = 5;
    }
  }

  if (!logicalChoice) { // if neither a winning, or a game saving move is available, randomly move
    let randomIdx = Math.floor(Math.random() * emptySquares(board).length);
    logicalChoice = emptySquares(board)[randomIdx];
  }

  board[logicalChoice] = COMPUTER_MARKER;
}


function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board); // if it's a string(name), returns true, otherwise it's null, returns false
}

function detectWinner(board) {
  for (let line = 0; line < WIN_CONDITIONS.length; line++) {
    let [ square1, square2, square3 ] = WIN_CONDITIONS[line];

    if (
      board[square1] === HUMAN_MARKER &&
      board[square2] === HUMAN_MARKER &&
      board[square3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[square1] === COMPUTER_MARKER &&
      board[square2] === COMPUTER_MARKER &&
      board[square3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

function addScore(winner, objWithScore) {
  if (winner === 'Player') {
    objWithScore.playerScore += 1;
  } else if (winner === 'Computer') {
    objWithScore.computerScore += 1;
  }
}

function initalizeScore() {
  let score = {
    playerScore: 0,
    computerScore: 0,
  };
  return score;
}

while (true) {
  let score = initalizeScore(); // creates a fresh score

  while (true) { // main game loop
    let board = initalizeBoard(); // creates a fresh board

    while (true) { // game session loop
      displayBoard(board);

      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;

      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board); // displays winning board-state

    if (someoneWon(board)) { // declares end of game results
      let winner = detectWinner(board);
      addScore(winner, score);
      prompt(`${winner} won this game!`);
      prompt(`Current Player Score: ${score.playerScore}/${SCORE_TO_WIN}`);
      prompt(`Current Computer Score: ${score.computerScore}/${SCORE_TO_WIN}`);
    } else {
      prompt("It's a tie!");
      prompt(`Current Player Score: ${score.playerScore}/${SCORE_TO_WIN}`);
      prompt(`Current Computer Score: ${score.computerScore}/${SCORE_TO_WIN}`);
    }

    if (score.playerScore === 5) {
      prompt(`You have won ${SCORE_TO_WIN} games and have won the match!`);
      break;
    } else if (score.computerScore === 5) {
      prompt(`Sorry, the computer has won ${SCORE_TO_WIN} games and has won the match.`);
      break;
    }

    prompt("Type 'q' to give up the match early.");
    prompt("Enter anything else to continue the match:");
    let answer = readline.question().toLowerCase();
    if (answer === 'q') break;
  }

  prompt('Want to play another match?(y or n)');
  let answer = readline.question().toLowerCase()[0]; //string lowercase, first character (Yasdgg) returns 'y'
  if (answer !== 'y') break; //if answer isn't y, end loop
}
prompt('Thanks for playing Tic-Tac-Toe!'); // end of program
