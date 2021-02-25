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
let deck = {
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

let playerHand = {
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

let dealerHand = {
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

function randomCard(deck) { // SIDE EFFECT, EDITS THE DECK OBJECT
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

function hitPlayer (deck) {
  let [ cardValue, cardSuit ] = randomCard(deck);
  playerHand[cardValue].push(cardSuit); // adds the card to the playerHand
  console.log(`You are dealt the "${cardValue} of ${cardSuit}".`);
}


hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
hitPlayer(deck);
console.log(playerHand);
console.log(deck);
