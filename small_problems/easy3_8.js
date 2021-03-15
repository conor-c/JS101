console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
console.log(getGrade(40, 50, 40));
// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'

function getGrade(gradeOne, gradeTwo, gradeThree) {
  let score = (gradeOne + gradeTwo + gradeThree) / 3;
  if (90 <= score) return 'A';
  if (80 <= score) return 'B';
  if (70 <= score) return 'C';
  if (60 <= score) return 'D';
  return 'F';
}
