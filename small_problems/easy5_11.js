console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
// console.log(timeOfDay(61));
// console.log(timeOfDay(-1437));

// Problem
//  positive number, the time is after midnight
//  negative number, the time is before midnight

function timeOfDay(minutesTotal) {
  const MIN_PER_DAY = 1440;
  const MIN_PER_HOUR = 60;
  let hours;
  let minutes;

  if (Math.sign(minutesTotal) === 1) {
    hours = Number.parseInt(minutesTotal % MIN_PER_DAY / MIN_PER_HOUR, 10);
    minutes = minutesTotal % MIN_PER_DAY % MIN_PER_HOUR;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  }

  if (Math.sign(minutesTotal) === -1) {
    hours = 23 + Number.parseInt(minutesTotal % MIN_PER_DAY / MIN_PER_HOUR, 10);
    minutes = MIN_PER_HOUR + (minutesTotal % MIN_PER_DAY % MIN_PER_HOUR);

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  }

  return `00:00`;
}

