dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
dms(-1);   // -1°00'00"
dms(400);  // 400°00'00"
dms(-40);  // -40°00'00"
dms(-420); // 420°00'00"
// There are 60 minutes in a degree, and 60 seconds in a minute.

function dms(degreeFloat) {
  let degrees = Number(String(degreeFloat).split('.')[0]);
  let partialDegree = Number('.' + String(degreeFloat).split('.')[1]);
  let minutes = Number.parseInt(partialDegree * 60, 10);
  let seconds = Number.parseInt(('.' + String(partialDegree * 60).split('.')[1]) * 60, 10);
  let result = `${degrees}˚`;

  if (minutes) {
    result += `${String(minutes).padStart(2, '0')}'`;
  } else if (!minutes) {
    result += "00'";
  }

  if (seconds) {
    result += `${String(seconds).padStart(2, '0')}"`;
  } else if (!seconds) {
    result += '00"';
  }

  console.log(result);
}