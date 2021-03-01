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
const ROUNDS_TO_WIN_MATCH = 5;
const DEALER_STAYS = 17;

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

function restart(roundOrMatch) {
  prompt(`Want to play another ${roundOrMatch}?`);
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

function displayRoundResults(playerTotal, dealerTotal) {
  let result = detectResults(playerTotal, dealerTotal);

  if (result.playerBust) {
    prompt('You busted. DEALER WINS.');
  } else if (result.dealerBust) {
    prompt('Dealer busted. YOU WIN.');
  } else if (result.playerWon) {
    prompt('You win!');
  } else if (result.dealerWon) {
    prompt('Dealer wins!');
  } else if (result.tie) {
    prompt("It's a tie.");
  }
}

function displayMatchStatus(playerWins, dealerWins) {
  prompt('Win 5 rounds to win the match!');
  prompt(`Player Rounds Won: ${playerWins}/${ROUNDS_TO_WIN_MATCH}`);
  prompt(`Dealer Rounds Won: ${dealerWins}/${ROUNDS_TO_WIN_MATCH}`);
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
  let card = selectRandomCardFrom(deck); // SELECTS RANDOM CARD FROM DECK
  removeCardFrom(card, deck); // SIDE EFFECT, WILL DELETE CARD FROM DECK
  addCardTo(card, hand); // SIDE EFFECT, WILL ADD CARD TO HAND
  return card; // RETURNS SELECTED CARD FOR USER DISPLAY
}

function detectMatchOver (playerWins, dealerWins) {
  if (playerWins === ROUNDS_TO_WIN_MATCH) {
    return 'PLAYER';
  } else if (dealerWins === ROUNDS_TO_WIN_MATCH) {
    return 'DEALER';
  }
  return null;
}

function displayMatchOver(playerWins, dealerWins) {
  let matchWinner = detectMatchOver(playerWins, dealerWins);

  if (matchWinner === 'PLAYER') {
    prompt(`You have won ${ROUNDS_TO_WIN_MATCH} rounds and have won the match!`);
  }
  if (matchWinner === 'DEALER') {
    prompt(`The dealer has won ${ROUNDS_TO_WIN_MATCH} rounds and has won the match.`);
  }
}

function displayGreetingMessage(playerWins, dealerWins) {
  if (playerWins === 0 && dealerWins === 0) { // IF FIRST ROUND IS A TIE, WILL ALSO DISPLAY THIS MESSAGE
    prompt(`The game is Twenty One. Win ${ROUNDS_TO_WIN_MATCH} rounds to win the match!`);
    lineSpace();
  } else {
    prompt(`Another round of Twenty One.`);
    prompt(`You've won ${playerWins}/${ROUNDS_TO_WIN_MATCH} rounds. Dealer has won ${dealerWins}/${ROUNDS_TO_WIN_MATCH} rounds.`);
    lineSpace();
  }
}

function displayCard(playerOrDealer, cardToDisplay) {
  prompt(`${playerOrDealer} is dealt: ${cardToDisplay[0]} of ${cardToDisplay[1]}.`);
}

while (true) {
  let playerWins = 0;
  let dealerWins = 0;

  while (true) { // MAIN GAME LOOP
    let deck = copyObj(FULL_DECK);
    let playerHand = copyObj(EMPTY_HAND);
    let dealerHand = copyObj(EMPTY_HAND);
    let playerTotal = handTotal(playerHand);
    let dealerTotal = handTotal(dealerHand);

    displayGreetingMessage(playerWins, dealerWins);

    let dealerSecretCard = dealCard(deck, dealerHand); // DEALER STARTING HAND
    prompt('The Dealer deals themselves a card facedown.');
    displayCard('Dealer', dealCard(deck, dealerHand));

    lineSpace();

    displayCard('Player', dealCard(deck, playerHand));
    displayCard('Player', dealCard(deck, playerHand));

    while (true) { // PLAYER SESSION LOOP
      playerTotal = handTotal(playerHand);
      prompt(`Your Total: ${playerTotal}`);

      if (playerTotal === HIGHEST_SCORE) {
        prompt(`You've hit ${HIGHEST_SCORE}!`);
      }
      if (busted(playerTotal) || !getHitOrStay()) break;

      displayCard('Player', dealCard(deck, playerHand));
      lineSpace();
    }


    while (true) {
      lineSpace();
      prompt(`Dealer reveals their facedown card to be: ${dealerSecretCard[0]} of ${dealerSecretCard[1]}`);

      if (busted(playerTotal)) {
        dealerTotal = handTotal(dealerHand); // so a total of 0 isn't shown on player bust condition
        break;
      }

      while (true) { // DEALER SESSION LOOP
        if (Object.values(dealerHand).length === 14) { // ONLY WANT TO DISPLAY ONCE PER ROUND(14 is empty hand + 2 cards)
          prompt('Dealer begins to draw...');
        }

        dealerTotal = handTotal(dealerHand);
        let results = detectResults(playerTotal, dealerTotal);

        if (busted(dealerTotal)) break;

        if (results.dealerWon || dealerTotal >= DEALER_STAYS) {
          prompt(`Dealer has a total of ${dealerTotal} and has choosen to Stay.`);
          break;
        }

        displayCard('Dealer', dealCard(deck, dealerHand));
      }
      break;
    }

    let results = detectResults(playerTotal, dealerTotal);
    if (results.playerWon || results.dealerBust) {
      playerWins += 1;
    } else if (results.dealerWon || results.playerBust) {
      dealerWins += 1;
    }

    lineSpace();
    displayRoundResults(playerTotal, dealerTotal, playerWins, dealerWins);
    lineSpace();

    prompt(`Final Scores:`);
    prompt(`You: ${playerTotal}`);
    prompt(`Dealer: ${dealerTotal}`);

    lineSpace();
    displayMatchStatus(playerWins, dealerWins);
    lineSpace();

    if (detectMatchOver(playerWins, dealerWins)) {
      displayMatchOver(playerWins, dealerWins);
      lineSpace();
      break;
    }

    if (!restart('round')) break;
    console.clear();
  }
  if (!restart('match')) break;
  console.clear();
}


console.log('Thanks for playing Twenty One!');