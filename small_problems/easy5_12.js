console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

function afterMidnight(hoursMinutes) {
  hoursMinutes = hoursMinutes.split(':');
  let hours = 60 * (Number(hoursMinutes[0]));
  let minutes = Number(hoursMinutes[1]);
  if ((hours + minutes) === 1440) return 0;
  return hours + minutes;
}

function beforeMidnight(hoursMinutes) {
  let minutesAfterMidnight = afterMidnight(hoursMinutes);
  if (minutesAfterMidnight === 0) {
    return 0;
  }
  return 1440 - minutesAfterMidnight;
}