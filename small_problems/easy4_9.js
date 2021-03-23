// modify the function to exclude non letters

function wordSizes(string) {
  let resultObj = {};
  let wordLengths = string.split(' ').map(word => {
    let onlyLetters = word.split('').filter(character => {
      return 'abcdefghijklmnopqrstuvwxyz'.includes(character.toLowerCase());
    });
    return onlyLetters.join('').length;
  });

  if (string) {
    wordLengths.forEach(element => {
      if (!resultObj[element]) {
        resultObj[element] = 1;
      } else {
        resultObj[element] += 1;
      }
    });
  }

  console.log(resultObj);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}