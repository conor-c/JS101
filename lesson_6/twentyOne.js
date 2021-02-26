const readline = require('readline-sync');
const FULL_DECK = {
  2: ['hearts', 'diamonds', 'clubs', 'spades'],
  3: ['hearts', 'diamonds', 'clubs', 'spades'],
  4: ['hearts', 'diamonds', 'clubs', 'spades'],
  5: ['hearts', 'diamonds', 'clubs', 'spades'],
  6: ['hearts', 'diamonds', 'clubs', 'spades'],
  7: ['hearts', 'diamonds', 'clubs', 'spades'],
  8: ['hearts', 'diamonds', 'clubs', 'spades'],
  9: ['hearts', 'diamonds', 'clubs', 'spades'],
  10: ['hearts', 'diamonds', 'clubs', 'spades'],
  jack: ['hearts', 'diamonds', 'clubs', 'spades'],
  queen: ['hearts', 'diamonds', 'clubs', 'spades'],
  king: ['hearts', 'diamonds', 'clubs', 'spades'],
  ace: ['hearts', 'diamonds', 'clubs', 'spades'],
};
const EMPTY_HAND = {
  2: [], 3: [], 4: [],
  5: [], 6: [], 7: [],
  8: [], 9: [], 10: [],
  jack: [], queen: [],
  king: [], ace: [],
};
const HIGHEST_SCORE = 21;

function copyObj(obj) {
  let serializedObj = JSON.stringify(obj);
  let copiedObj = JSON.parse(serializedObj);
  return copiedObj;
}

function prompt(str) {
  return console.log(`=> ${str}`);
}

function hitPlayer (deck, playerHand) {
  let [ cardValue, cardSuit ] = randomCard(deck);
  return playerHand[cardValue].push(cardSuit); // adds the card to the playerHand
}

function hitDealer (deck, dealerHand) {
  let [ cardValue, cardSuit ] = randomCard(deck);
  return dealerHand[cardValue].push(cardSuit); // adds the card to the dealerHand
}

function randomCard(deck) { // SIDE EFFECT, WILL MUTATE DECK OBJECT
  let availableCardValues = Object.keys(deck).filter(key => { // all deck keys that still have arrays with suits in them
    return deck[key].length >= 1;
  });

  let randomCardValIdx = Math.floor(Math.random() * availableCardValues.length); // index of a random card value that still has suits in array
  let nameOfRandomKey = availableCardValues[randomCardValIdx]; // string value of deck key (CARD VALUE AKA 'JACK' ETC)

  let randomCardSuitIdx = Math.floor(
    Math.random() * deck[nameOfRandomKey].length); // idx of random card suit 0 through length of array

  let nameOfRandomSuit = String(deck[nameOfRandomKey]
    .splice(randomCardSuitIdx, 1)); // name of card suit 'hearts' 'spades' etc

  return [nameOfRandomKey, nameOfRandomSuit];
}

function handTotal(hand, total = 0) { // exams hand and adds up the total
  let currentCards = Object.keys(hand).filter(card => {
    return hand[card].length >= 1;
  });

  currentCards.forEach(card => {
    let numOfCards = hand[card].length;
    let isNum = parseInt(card, 10);

    if (isNum) total += isNum * numOfCards; // doesn't run if key can't be parsed to number (truthy)
    if (card !== 'ace' && !isNum) total += 10 * numOfCards;
    if (card === 'ace') total = calculateAce(total, numOfCards);
  });

  return total;
}

function calculateAce(total, numOfAce) {
  switch (numOfAce) {
    case 1:
      total = (total <= 10) ? total + 11 : total + 1;
      break;
    case 2:
      total = (total <= 9) ? total + 12 : total + 2;
      break;
    case 3:
      total = (total <= 8) ? total + 13 : total + 3;
      break;
    case 4:
      total = (total <= 7) ? total + 14 : total + 4;
      break;
  }
  return total;
}

function restart() {
  prompt('Want to play another game?');
  while (true) {
    prompt(`Enter 'y' for yes, or 'n' for no:`);
    let answer = readline.question().toLowerCase();
    if (answer === 'y') return true;
    if (answer === 'n') return false;
    prompt(`Sorry, "${answer}" is not a valid input.`);
  }
}

// function getHitOrStay(total) {
//   if (total)
// }

while (true) { // MAIN GAME LOOP
  let deck = copyObj(FULL_DECK);
  let playerHand = copyObj(EMPTY_HAND);
  let dealerHand = copyObj(EMPTY_HAND);
  let playerStayTotal = 0;
  let dealerStayTotal = 0;

  while (true) { // Player hit or stay
    let playerTotal = handTotal(playerHand);
    playerStayTotal = playerTotal;
    prompt(`Total: ${playerTotal}`);

    if (playerTotal === HIGHEST_SCORE) {
      prompt("You've hit 21!");
      break;
    } else if (playerTotal > HIGHEST_SCORE) {
      prompt("You've busted.");
      prompt("Dealer wins.");
      break;
    }
    prompt('hit or stay?');
    let answer = readline.question();
    if (answer === 'stay') break;
    hitPlayer(deck, playerHand);
  }

  while (true) { // Dealer session loop
    if (playerStayTotal > 21) break;
    let dealerTotal = handTotal(dealerHand);
    dealerStayTotal = dealerTotal;

    if (dealerTotal > playerStayTotal && dealerTotal <= HIGHEST_SCORE) {
      prompt(`Dealer has a total of ${dealerTotal} and has choosen to Stay.`);
      if (dealerStayTotal > playerStayTotal) {
        prompt(`Dealer has won with a score of ${dealerStayTotal} to your ${playerStayTotal}.`);
      }
      break;
    } else if (dealerTotal > HIGHEST_SCORE) {
      prompt(`Dealer has busted with a total of: ${dealerTotal}`);
      prompt(`You win!`);
      break;
    }
    hitDealer(deck, dealerHand);
  }

  // prompt(`Final Scores:`);
  // prompt(`You: ${playerStayTotal}`);
  // prompt(`Dealer: ${dealerStayTotal}`);


  if (!restart()) break;
}
prompt('Thanks for playing Twenty One!');