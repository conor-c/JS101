// Problem
// - Create a function that takes an array and an object as arguments
// - The array will contain 2 or more elements that when combined
//   will produce a person's name.
// - The object will contain two keys:
//   "title" & "occupation", and the appropriate values
// - Return a greeting that uses the persons full name and mentions their title
// Input:
// 1. Array containing two or more elements of a persons name
// 2. Object containing a title and occupation
// Output:
// 1. A string greeting the person and mentioning their title and occupation
// Explicit Rules:
// 1. Mention the persons concatenated name, and title and occupation
// 2. The array will contain two or more elements of their name
// 3. The object will will contain two keys, their title and occupation
// Implicit Rules:
// 1. The return should NOT be a console.log
// 2. The greeting should make logical sense
// 3. The title should preceed the occupation
// 4. Name and title/occupation should be capitalized
// Questions:
// 1. Will the array always contain at least one element?
// 2. What should be done when a title needs a grammatical change?
// 3. What should be done if a title is ommited?
// 4. Will the name always be in order?

// Examples/ Test Cases
// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

// Data Structure
// - A variable to store the persons properly capitalized/concatenated name
// - A variable to store the persons properly capitalized/concatenated
//   title/occupation

// Algorithm
// 1. Initalize a variable fullName
// 2. Initalize a variable fullJobName
// 3. While the name array still has elements inside it
//    3a. Shift the first element off the array, capitalize the first letter,
//        and push it the the fullName variable. Add a space between elements
// 4. Capitalize and push the job object key 'title' to fullJob
//    4a. Capitalize and push the job object key 'occupation' to fullJob
//        add a space between elements
// 5. (remove extraneous space with reduceright)
// Code

function greetPerson(nameArray, jobObject) {
  let fullName = '';
  let fullJob = '';
  let jobValues = Object.values(jobObject);

  for (let idx = 0; idx < nameArray.length; idx += 1) {
    fullName += nameArray[idx][0].toUpperCase() +
                nameArray[idx].substring(1) + ' ';
  }
  fullName = fullName.trimRight();

  for (let idx = 0; idx < jobValues.length; idx += 1) {
    fullJob += jobValues[idx][0].toUpperCase() +
    jobValues[idx].substring(1) + ' ';
  }
  fullJob = fullJob.trimRight();

  // Another way to do it :
  // let fullJob = jobObject.title[0].toUpperCase() +
  //               jobObject.title.substring(1) +
  //               ' ' +
  //               jobObject.occupation[0].toUpperCase() +
  //               jobObject.occupation.substring(1);

  return `Hello, ${fullName}! Nice to have a ${fullJob} around.`;
}

console.log(
  greetPerson(['bob', 'q', 'smith'], {title: 'master', occupation: 'plumber'})
);