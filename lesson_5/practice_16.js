let arr = [['a', 1], ['b', 'two'], ['sea', {c: 3}], ['D', ['a', 'b', 'c']]];

let obj = Object.fromEntries(arr);
console.log(obj);

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// provided solution created a new obj and used .forEach
// to iterate and push through each key/value pair