// Problem
//  Given a string consisting of words separated by spaces
//  return an object that shows the number of different sized words
//  a word is any collection of non space characters

// algorithm
//  1. Initialize an empty object
//  2. Split the provided string argument into an array from the spaces
//    Where each element is a word
//  3. Replace the elements with their length number
//  4. For each new length, add the key name of the length, and increase
//    the value by one


function wordSizes(string) {
  let resultObj = {};
  let wordLengths = string.split(' ').map(word => word.length);

  if (string) {
    wordLengths.forEach(element => {
      if (!resultObj[element]) {
        resultObj[element] = 1;
      } else {
        resultObj[element] += 1;
      }
    });
  }

  return resultObj;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}