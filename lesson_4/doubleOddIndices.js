function doubleOddIndices(numbers) {
  let index = 0;
  let doubledArray = [];

  while (index < numbers.length) {
    if (index % 2 === 0) {
      doubledArray.push(numbers[index]);
    } else {
      doubledArray.push((numbers[index] * 2));
    }
    index += 1;
  }
  return doubledArray;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddIndices(myNumbers));