let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let serializedArr = JSON.stringify(arr);
let parsedArr = JSON.parse(serializedArr);

let newArr = parsedArr.map(subObj => {
  for (const prop in subObj) {
    subObj[prop] += 1;
  }
  return subObj;
});

console.log(newArr);
console.log(arr);

// would of been better to return a new object each map iteration
// this works fine as long as we are only adding onto values
// Below is given answer:

// arr.map(obj => {
//   let incrementedObj = {};

//   for (let key in obj) {
//     incrementedObj[key] = obj[key] + 1;
//   }

//   return incrementedObj;
// });
