// Initialize a deck
// Deal two cards to player and dealer
//  - Only show one card from dealers hand
// Players turn: Hit or stay
//  - Repeat until player busts (dealer win) or stays
// Dealers turn: Hit or stay
//  - Repeat until total hand combo is >= 17 or dealer bust (player wins)
// if no busts, compare card totals an declare winner

// Deck:
// Suits: hearts, diamonds, clubs, spades
// 13 values: 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace
// 52 cards total

// cards 2-10 are worth face value
// Jack, Queen, King, are worth 10
// Ace can be 1 or 11

// if hand contains ace and it's value being 11 does not exceed a total of 21
//  - Ace is worth 11
// else if hand contains ace and it's value being 11 exceeds a total of 21
//  - Ace is worth 1

// DATA STRUCTURE:
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
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
  10: [],
  jack: [],
  queen: [],
  king: [],
  ace: [],
};

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

function hitPlayer (deck, playerHand) {
  let [ cardValue, cardSuit ] = randomCard(deck);
  return playerHand[cardValue].push(cardSuit); // adds the card to the playerHand
}

function hitDealer (deck, dealerHand) {
  let [ cardValue, cardSuit ] = randomCard(deck);
  return dealerHand[cardValue].push(cardSuit); // adds the card to the dealerHand
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

function prompt(str) {
  return console.log(`=> ${str}`);
}

function copyObj(obj) {
  let serializedObj = JSON.stringify(obj);
  let copiedObj = JSON.parse(serializedObj);
  return copiedObj;
}

while (true) {
  let deck = copyObj(FULL_DECK);
  let playerHand = copyObj(EMPTY_HAND);
  let dealerHand = copyObj(EMPTY_HAND);

  while (true) {
    prompt(`Total: ${handTotal(playerHand)}`);
    prompt('hit or stay?');
    let answer = readline.question();
    if (answer === 'stay') break;
    hitPlayer(deck, playerHand);
  }
  console.log(playerHand);
  console.log(deck);
  break;
}
console.log(FULL_DECK);


// hitPlayer(deck, playerHand);
// hitPlayer(deck, playerHand);
// console.log(handTotal(playerHand));
// console.log(playerHand);
// console.log(deck);


