let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let colorsAndSizes = Object.values(obj).map(properties => {
  if (properties.type === 'fruit') {
    return properties.colors.map(color => {
      return color[0].toUpperCase() + color.substring(1);
    });
  } else {
    return properties.size.toUpperCase();
  }
});

console.log(colorsAndSizes);
console.log(obj);

// provided solution extracted out the capitalize task to a function