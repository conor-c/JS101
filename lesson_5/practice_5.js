let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};
//Compute and display the total age of the male members of the family.

let totalAge = Object.values(munsters)
  .filter(obj => obj.gender === 'male')
  .map(obj => obj.age);

totalAge = totalAge.reduce((total, age) => total + age);
console.log(totalAge);