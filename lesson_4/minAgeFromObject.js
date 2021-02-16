let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// function findSmallestAge(objectOfAges) {
//   let ages = Object.values(objectOfAges);
//   let currentAge = ages[0];

//   ages.forEach(age => {
//     if (age < currentAge) {
//       currentAge = age;
//     }
//   });
//   return currentAge;
// }

// console.log(findSmallestAge(ages));

// The provided solution is a lot simplier.
let agesArr = Object.values(ages);
Math.min(...agesArr);
