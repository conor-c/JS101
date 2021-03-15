const READLINE = require(`readline-sync`);
const STORIES = {
  hilarious: (usrWords) => `Do you ${usrWords.verb} your ${usrWords.adjective} ${usrWords.noun} ${usrWords.adverb}? That's hilarious!`,
  sad: (usrWords) => `When you were on a ${usrWords.verb} you accidentally lost your ${usrWords.adjective} ${usrWords.noun} because you went ${usrWords.adverb}.`,
  adventure: (usrWords) => `There was once a brave ${usrWords.adjective} ${usrWords.noun} who conquered evil by ${usrWords.verb} ${usrWords.adverb}!`
};

function getWords() {
  let noun = READLINE.question('Enter a noun: ');
  let verb = READLINE.question('Enter a verb: ');
  let adjective = READLINE.question('Enter an adjective: ');
  let adverb = READLINE.question('Enter an adverb: ');
  return { noun: noun, verb: verb, adjective: adjective, adverb: adverb };
}

function displayMadlib() {
  let randomStory = Object.keys(STORIES)[Math
    .floor(Math.random() * Object.keys(STORIES).length)];

  return STORIES[randomStory](getWords());
}

console.log(displayMadlib());
