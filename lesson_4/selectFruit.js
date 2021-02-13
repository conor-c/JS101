let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(obj) {
  let isFruit = {};

  for (let produce in obj) {
    if (obj[produce] === 'Fruit') {
      isFruit[produce] = 'Fruit';
    }
  }
  return isFruit;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }