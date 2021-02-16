let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

function objectFromArray(array) {
  let valueKey = Object.entries(array);
  let object = {};

  valueKey.forEach(valueKey => {
    let [value, key] = valueKey;
    object[key] = value;
  });
  return object;
}

console.log(objectFromArray(flintstones));

// Could of used just a simple .forEach and taken advantage of the index param
// I guess I just wanted to use Array destructuring assignment!