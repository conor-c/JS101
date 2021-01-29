// Problem
// - Get Length and Width in Meters from user
// - Log the area of the room to the console in both square meters, and feet
// Note 1 square meter == 10.7639 square feet
//
// Inputs: Length and Width of room in Meters
// Outputs: Area of room in square meters and square feet
//
// Explicit Requirements:
// - Log both square meters and feet
// - Use readlineSync.prompt to collect user input
// Implicit Requirements:
// - Must clarify on return which number is meters and which is feet
// Questions:
// - How do you calculate area? (L * W)
// - How do we use readlineSync.prompt
// -- How does .prompt differ from previously used .question


// Examples/ Test Cases
// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

// Data Structure
// - A collection of some sort to store and manipulate the data
// - Likely an object for clarity on property names

// Algorithm
// 1. Get & store length of room in meters
// 2. Get & store width of room in meters
// 3. Multiply length by width to get square meters
// 4. Convert square meters to square feet
// 5. Return results from 3 and 4

// Code
const readline = require('readline-sync');

function getUserInput() {
  const roomSize = {};

  console.log('Enter the length of the room in meters:');
  roomSize['length'] = readline.prompt();
  console.log('Enter the width of the room in meters:');
  roomSize['width'] = readline.prompt();

  return roomSize;
}

function calculateArea() {
  let roomSize = getUserInput();
  const roomArea = {};

  roomArea['squareMeters'] = roomSize.length * roomSize.width;
  roomArea['squareFeet'] = roomArea.squareMeters * 10.7639;

  return roomArea;
}

function displayResult() {
  let roomArea = calculateArea();

  console.log(`The area of the room is ${roomArea.squareMeters} square meters.`);
  console.log(`(${roomArea.squareFeet} square feet)`);
}

displayResult();
