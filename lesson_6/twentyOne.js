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

function selectRandomCardFrom(deck) {
  let availableCardValues = Object.keys(deck).filter(key => {
    return deck[key].length >= 1;
  });

  let randomCardValIdx = Math.floor(Math.random() * availableCardValues.length);
  let nameOfRandomKey = availableCardValues[randomCardValIdx];

  let randomCardSuitIdx = Math.floor(
    Math.random() * deck[nameOfRandomKey].length);
  let nameOfRandomSuit = String(deck[nameOfRandomKey]
    .slice(randomCardSuitIdx, randomCardSuitIdx + 1));

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

function lineSpace() {
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

function busted(total) {
  return total > HIGHEST_SCORE;
}

function detectResults(playerTotal, dealerTotal) {
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

function displayResults(playerTotal, dealerTotal) {
  let result = detectResults(playerTotal, dealerTotal);

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

function removeCardFrom(card, deck) { // SIDE EFFECT REMOVES ARG CARD FROM ARG DECK
  let [ cardValue, cardSuit ] = card;
  deck[cardValue].splice(deck[cardValue].indexOf(cardSuit), 1);
}

function addCardTo(card, hand) { // SIDE EFFECT ADDS ARG CARD TO ARG HAND
  let [ cardValue, cardSuit ] = card;
  hand[cardValue].push(cardSuit);
}

function dealCard(deck, hand) {
  let card = selectRandomCardFrom(deck); // DRAWS RANDOM CARD FROM DECK
  removeCardFrom(card, deck); // SIDE EFFECT, WILL DELETE CARD FROM DECK
  addCardTo(card, hand); // SIDE EFFECT, WILL ADD CARD TO HAND
  return card;
}

while (true) { // MAIN GAME LOOP
  let deck = copyObj(FULL_DECK);
  let playerHand = copyObj(EMPTY_HAND);
  let dealerHand = copyObj(EMPTY_HAND);
  let playerTotal = handTotal(playerHand);
  let dealerTotal = handTotal(dealerHand);

  prompt('Welcome to Twenty One!');
  lineSpace();
  // DEALER STARTING HAND
  let dealerSecretCard = dealCard(deck, dealerHand);
  let dealerCard2 = dealCard(deck, dealerHand);
  prompt('The dealer deals themselves a card facedown.');
  prompt(`The dealer draws: ${dealerCard2[0]} of ${dealerCard2[1]}`);
  lineSpace();
  // PLAYER STARTING HAND
  let playerCard1 = dealCard(deck, playerHand);
  let playerCard2 = dealCard(deck, playerHand);
  prompt(`You are dealt: ${playerCard1[0]} of ${playerCard1[1]}`);
  prompt(`You are dealt: ${playerCard2[0]} of ${playerCard2[1]}`);


  while (true) { // Player session loop
    playerTotal = handTotal(playerHand);
    prompt(`Your Total: ${playerTotal}`);

    if (playerTotal === HIGHEST_SCORE) {
      prompt(`You've hit ${HIGHEST_SCORE}!`);
      break;
    }

    if (busted(playerTotal) || !getHitOrStay()) break;

    let cardDealt = dealCard(deck, playerHand);
    prompt(`You are dealt: ${cardDealt[0]} of ${cardDealt[1]}.`);
    lineSpace();
  }


  while (true) { // card reveal + loop (Won't start if player is bust)
    lineSpace();
    prompt(`Dealer reveals their facedown card to be: ${dealerSecretCard[0]} of ${dealerSecretCard[1]}`);
    if (busted(playerTotal)) {
      dealerTotal = handTotal(dealerHand);
      break;
    }
    prompt('Dealer begins to draw...');
    while (true) { // main dealer session loop
      dealerTotal = handTotal(dealerHand);
      let results = detectResults(playerTotal, dealerTotal);

      if (results.dealerWon) { // will hit until win or bust
        prompt(`Dealer has a total of ${dealerTotal} and has choosen to Stay.`);
        break;
      }

      if (results.dealerBust) break;

      let cardDealt = dealCard(deck, dealerHand);
      prompt(`Dealer is dealt: ${cardDealt[0]} of ${cardDealt[1]}.`);
    }
    break;
  }

  lineSpace();
  displayResults(playerTotal, dealerTotal);
  lineSpace();

  prompt(`Final Scores:`);
  prompt(`You: ${playerTotal}`);
  prompt(`Dealer: ${dealerTotal}`);

  if (!restart()) break;
  console.clear();
}

console.log('Thanks for playing Twenty One!');