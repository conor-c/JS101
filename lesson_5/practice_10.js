let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let newArr = arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort((a , b) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      }
      return 0;
    });
  } // end of string case
  return subArr.slice().sort((a, b) => b - a); // number sort
});

// would of made more sense to deal with number sort at the start
//console.log(arr);
console.log(newArr);