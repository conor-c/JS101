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

function hitPlayer (deck, playerHand) { // SIDE EFFECT, MUTATES PLAYERHAND ARGUMENT
  let [ cardValue, cardSuit ] = randomCard(deck);
  playerHand[cardValue].push(cardSuit);
  return [cardValue, cardSuit];
}

function hitDealer (deck, dealerHand) { // SIDE EFFECT, MUTATES DEALERHAND ARGUMENT
  let [ cardValue, cardSuit ] = randomCard(deck);
  dealerHand[cardValue].push(cardSuit);
  return [cardValue, cardSuit];
}

function randomCard(deck) { // SIDE EFFECT, WILL MUTATE DECK ARGUMENT
  let availableCardValues = Object.keys(deck).filter(key => {
    return deck[key].length >= 1;
  });

  let randomCardValIdx = Math.floor(Math.random() * availableCardValues.length);
  let nameOfRandomKey = availableCardValues[randomCardValIdx];

  let randomCardSuitIdx = Math.floor(
    Math.random() * deck[nameOfRandomKey].length);
  let nameOfRandomSuit = String(deck[nameOfRandomKey]
    .splice(randomCardSuitIdx, 1));

  return [nameOfRandomKey, nameOfRandomSuit];
}

function handTotal(hand, total = 0) {
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

function logLineSpacer() {
  console.log('--------------------');
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

function getHitOrStay() {
  prompt('Would you like to hit or stay?');
  while (true) {
    prompt("Enter 'hit' or 'stay':");
    let answer = readline.question().toLowerCase();
    if (answer === 'hit') return true;
    if (answer === 'stay') return false;
    prompt(`Sorry "${answer}" is not a valid input.`);
  }
}

function dealAndLogStartingHands(deck, playerHand, dealerHand) { // Refactor
  let firstCardDealt = hitPlayer(deck, playerHand);
  prompt(`You're dealt: ${firstCardDealt[0]} of ${firstCardDealt[1]}.`);
  logLineSpacer();

  let facedownCard = hitDealer(deck, dealerHand);
  console.log('(Dealer is dealt a card facedown.)');
  logLineSpacer();

  let thirdCardDealt = hitPlayer(deck, playerHand);
  prompt(`You are dealt: ${thirdCardDealt[0]} of ${thirdCardDealt[1]}.`);
  logLineSpacer();

  let fourthCardDealt = hitDealer(deck, dealerHand);
  console.log(`(Dealer is dealt: ${fourthCardDealt[0]} of ${fourthCardDealt[1]}.)`);
  logLineSpacer();

  return facedownCard;
}

function busted(hand) {
  return handTotal(hand) > HIGHEST_SCORE;
}

function detectResults(playerHand, dealerHand) {
  let playerTotal = handTotal(playerHand);
  let dealerTotal = handTotal(dealerHand);
  let result = {};

  if (playerTotal > HIGHEST_SCORE ) {
    result.playerBust = true;
  } else if (dealerTotal > HIGHEST_SCORE) {
    result.dealerBust = true;
  } else if (playerTotal > dealerTotal) {
    result.playerWon = true;
  } else if (dealerTotal > playerTotal) {
    result.dealerWon = true;
  } else {
    result.tie = true;
  }
  return result;
}

function displayResults(playerHand, dealerHand) {
  let result = detectResults(playerHand, dealerHand);

  if (result.playerBust) {
    prompt('You busted. DEALER WINS.');
  }
  if (result.dealerBust) {
    prompt('Dealer busted. YOU WIN.');
  }
  if (result.playerWon) {
    prompt('You win!');
  }
  if (result.dealerWon) {
    prompt('Dealer wins!');
  }
  if (result.tie) {
    prompt("It's a tie.");
  }
}

while (true) { // MAIN GAME LOOP
  let deck = copyObj(FULL_DECK);
  let playerHand = copyObj(EMPTY_HAND);
  let dealerHand = copyObj(EMPTY_HAND);
  let playerTotal = 0;
  let dealerTotal = 0;

  console.log('Welcome to Twenty One!');
  let facedownCard = dealAndLogStartingHands(deck, playerHand, dealerHand);

  while (true) { // Player session loop
    playerTotal = handTotal(playerHand);
    prompt(`Your Total: ${playerTotal}`);

    if (playerTotal === HIGHEST_SCORE) {
      prompt("You've hit 21!");
      break;
    }

    if (busted(playerHand) || !getHitOrStay()) break;

    let cardDealt = hitPlayer(deck, playerHand);
    prompt(`You are dealt: ${cardDealt[0]} of ${cardDealt[1]}.`);
  }


  while (!busted(playerHand)) { // card reveal + loop (Won't start if player is bust)
    console.log(`Dealer reveals their facedown card to be: ${facedownCard[0]} of ${facedownCard[1]}`);
    console.log('Dealer begins to draw...');
    while (true) { // main dealer session loop
      dealerTotal = handTotal(dealerHand);
      let results = detectResults(playerHand, dealerHand);

      if (results.dealerWon) { // will hit until win or bust
        console.log(`Dealer has a total of ${dealerTotal} and has choosen to Stay.`);
        break;
      }
      if (results.dealerBust) break;

      let cardDealt = hitDealer(deck, dealerHand);
      console.log(`Dealer is dealt: ${cardDealt[0]} of ${cardDealt[1]}.`);
    }
    break;
  }

  displayResults(playerHand, dealerHand);

  prompt(`Final Scores:`);
  prompt(`You: ${playerTotal}`);
  console.log(`Dealer: ${dealerTotal}`);
  console.log(deck);

  if (!restart()) break;
  console.clear();
}
console.log('Thanks for playing Twenty One!');