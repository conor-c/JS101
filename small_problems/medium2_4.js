/*  PROBLEM
Given a year past 1752, return the number of friday the thirteenths
*/

/* INPUT
a year greater than 1752
*/

/* Output
number of friday the thirteenths
*/

/*  Rules
a friday the thirteenth will occur when a month begins on a sunday
*/

/* Questions

*/

// EXAMPLES/ TEST CASES
console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

/* DATA STRUCTURE

*/

/* ALGORITHM
1.
*/

// CODE

// function fridayThe13ths(year) {
//   let yearCode = Math.trunc((String(year).slice(-2)) / 4)
//                   + Number((String(year).slice(-2)));
//   yearCode %= 7;

//   let monthCodes = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
//   let centuryCode = getCenturyCode(year);
//   let leapYearCode = getLeapYearCode(year);

//   let dayOf13th = monthCodes.map((month, idx) => {
//     let day = (yearCode + month + centuryCode + 13 - leapYearCode) % 7;
//     if (leapYearCode && (idx === 0 || idx === 1)) {
//       day -= 1;
//     }
//     return day;
//   });

//   return dayOf13th.filter(day => day === 5).length;
// }

// function getCenturyCode(year) { // could refactor to deal with all centuries
//   let century = Number(String(year).slice(0, 2));
//   switch (century) {
//     case 17:
//       return 4;
//     case 18:
//       return 2;
//     case 19:
//       return 0;
//     case 20:
//       return 6;
//     case 21:
//       return 4;
//     case 22:
//       return 2;
//     case 23:
//       return 0;
//   }
// }

// function getLeapYearCode(year) {
//   if (year % 4 === 0) {
//     if ((year % 100 === 0) && (year % 400 === 0)) return 1;
//     if (year % 100 === 0) return 0;
//     return 1;
//   }
//   return 0;
// }

function fridayThe13ths(year) {
  let all13ths = [];
  for (let month = 0; month < 12; month += 1) {
    all13ths.push(new Date(year, month, 13));
  }
  return all13ths.filter(day => day.getDay() === 5).length;
}