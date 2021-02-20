let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
// return a new array with same structure
//with the subarrays ordered alphabetically or numerically as appropriate
// in ascending order

let serializedArr = JSON.stringify(arr); // deep copies so sort doesn't effect arr
let newArray = JSON.parse(serializedArr);

newArray = newArray.map(subArray => {
  return subArray.sort() // sorts all same case strings properly
    .sort((a, b) => {
      if (typeof a === 'string' && typeof b === 'string') { // fixes case of 'B' being in front of 'a' for first letter
        return a.toUpperCase().charCodeAt() - b.toUpperCase().charCodeAt();
      } else if (typeof a === 'number' && typeof b === 'number') { // fixes number sort
        return a - b;
      }
      return 0; // <- probably the worst artifact of this solution
    });
});


// My solution is a little harder to read
// but it deals with Uppercase letters not always being placed in front
// also insures that all elements are the same type before sorting
console.log(newArray);
//console.log(arr);