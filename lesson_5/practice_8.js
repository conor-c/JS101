let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(stringArray => {
  stringArray.forEach(stringElement => {
    stringElement.split('').forEach(character => {
      if ('aeiou'.includes(character)) {
        console.log(character);
      }
    });
  });
});

