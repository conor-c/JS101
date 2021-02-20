let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

//(Name) is a (age)-year-old (male or female).

for (const name in munsters) {
  let capitalizedName = name.slice(0, 1).toUpperCase() + name.substring(1);
  console.log(`${capitalizedName} is a ${munsters[name].age}-year-old ${munsters[name].gender}.`);
}