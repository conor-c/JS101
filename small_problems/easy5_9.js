let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck', 'sUV'];

countOccurrences(vehicles);

// // console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

function countOccurrences(array) {
  let occurrences = {};

  for (let idx = 0; idx < array.length; idx++) {
    if (occurrences[array[idx].toLowerCase()]) {
      occurrences[array[idx].toLowerCase()] += 1;
    } else {
      occurrences[array[idx].toLowerCase()] = 1;
    }
  }

  for (let key in occurrences) {
    console.log(`${key} => ${occurrences[key]}`);
  }

}