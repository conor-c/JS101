function multiply(numbers, multiplyBy) {
  let multipliedArray = [];

  for (let idx = 0; idx < numbers.length; idx += 1) {
    multipliedArray.push(numbers[idx] * multiplyBy);
  }

  return multipliedArray;
}

let myNumbers = [1, 4, 3, 7, 2, 6];

console.log(multiply(myNumbers, 3));
