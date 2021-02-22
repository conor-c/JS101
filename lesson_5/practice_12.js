let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// must use combo of methods including filter
// return a new array identical in structure
// but only containing numbers that are multiples of 3

let transformedArr = arr.map(subArr => {
  return subArr.filter(num => num % 3 === 0);
});

console.log(transformedArr);
console.log(arr);