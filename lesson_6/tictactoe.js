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

function displayBoard(board) {
  console.clear();
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

function initalizeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function joinOr(arr, delimiter = ', ', joinWord = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return String(arr[0]);
    case 2:
      return arr.join(` ${joinWord} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) + delimiter + joinWord + ' ' + arr[arr.length - 1];
  }
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;
    prompt("Sorry, that's not a valid choice.");
  }
  board[square] = HUMAN_MARKER;
}

function findRisk(winCombo, board, marker) { // marker will refer to player or human moves that have been played
  let comboState = winCombo.map(square => board[square]); // assigns the current values of the given winCombo line

  if (comboState.filter(val => val === marker).length === 2) { // checking if the winning line already has two of a specific marker
    let comboFinisher = winCombo.find(square => { // checking if the remaining square is empty
      return board[square] === INITIAL_MARKER; // if true, comboFinisher is assigned that value, assigned undefined otherwise
    });
    if (comboFinisher) return comboFinisher;
  }
  return null; // if the last square in winCombo isn't empty
}

function offenceAttempt(board) {
  for (let line = 0; line < WIN_CONDITIONS.length; line++) {
    let winCombo = WIN_CONDITIONS[line];
    let logicalChoice = findRisk(winCombo, board, COMPUTER_MARKER);
    if (logicalChoice) return logicalChoice;
  }
  return null;
}

function defenceAttempt(board) {
  for (let line = 0; line < WIN_CONDITIONS.length; line++) {
    let winCombo = WIN_CONDITIONS[line];
    let logicalChoice = findRisk(winCombo, board, HUMAN_MARKER); //
    if (logicalChoice) return logicalChoice;
  }
  return null;
}

function computerChoosesSquare(board) {
  let logicalChoice = offenceAttempt(board);

  if (!logicalChoice) { // if no winning move is available, look for game saving moves
    logicalChoice = defenceAttempt(board);
  }

  if (!logicalChoice) { // if no winning move, and no game saving move is available, pick center tile if empty
    if (board[5] === INITIAL_MARKER) {
      logicalChoice = 5;
    }
  }

  if (!logicalChoice) { // if neither a winning, or a game saving move is available, and center is taken, randomly move
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
    objWithScore.player += 1;
  } else if (winner === 'Computer') {
    objWithScore.computer += 1;
  }
}

function initalizeScore() {
  let score = {
    player: 0,
    computer: 0,
  };
  return score;
}

function getWhoMovesFirst () {
  prompt('A new match of Tic-Tac-Toe will begin.');

  while (true) {
    prompt('Would you like to move first? (y/n)');
    let firstMove = readline.question().toLowerCase();
    switch (firstMove) {
      case 'y':
        return 'Player';
      case 'n':
        return 'Computer';
      default:
        prompt('Not a valid entry.');
    }
  }
}

function restartGame() {
  prompt('Want to play another match? (y/n):');
  while (true) {
    let answer = readline.question().toLowerCase();
    if (answer === 'y') return true;
    if (answer === 'n') return false;
    prompt('Not a valid input.');
  }
}

function turnTaker (board, currentPlayer) {
  switch (currentPlayer) {
    case 'Player':
      displayBoard(board);
      playerChoosesSquare(board);
      break;
    case 'Computer':
      computerChoosesSquare(board);
      break;
  }
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === 'Player' ? 'Computer' : 'Player';
}

function updateAndDisplayGameResults(board, score) {
  displayBoard(board);
  if (someoneWon(board)) {
    let winner = detectWinner(board);
    addScore(winner, score);          // MODIFIES THE SCORE OBJECT ARGUEMENT BEING PASSED IN
    prompt(`${winner} won this game!`);
    prompt(`Current Player Score: ${score.player}/${SCORE_TO_WIN}`);
    prompt(`Current Computer Score: ${score.computer}/${SCORE_TO_WIN}`);
  } else {
    prompt("It's a tie!");
    prompt(`Current Player Score: ${score.player}/${SCORE_TO_WIN}`);
    prompt(`Current Computer Score: ${score.computer}/${SCORE_TO_WIN}`);
  }
}

function getConcedeAnswer() {
  prompt("Type 'q' to give up the match early.");
  prompt("Enter anything else to continue the match:");
  let answer = readline.question().toLowerCase();
  return answer;
}

while (true) { //new match / running loop
  let score = initalizeScore(); // creates a fresh score
  const whoMovesFirst = getWhoMovesFirst(); // declared here so we can ask again on match restart

  while (true) { // match loop
    let board = initalizeBoard(); // creates a fresh board
    let currentPlayer = whoMovesFirst;

    while (true) { // game session loop
      turnTaker(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    updateAndDisplayGameResults(board, score); // consider refacoring function, too many side effects

    if (score.player === SCORE_TO_WIN) {
      prompt(`You have won ${SCORE_TO_WIN} games and have won the match!`);
      break;
    } else if (score.computer === SCORE_TO_WIN) {
      prompt(`Sorry, the computer has won ${SCORE_TO_WIN} games and has won the match.`);
      break;
    }

    let matchForfeit = getConcedeAnswer();
    if (matchForfeit === 'q') break;
  }


  if (!restartGame()) break;
}
prompt('Thanks for playing Tic-Tac-Toe!');