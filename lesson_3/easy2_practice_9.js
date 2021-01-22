let title = "Flintstone Family Members";
let padNumber = Math.floor((40 - title.length) / 2);

title = title.padStart((padNumber + title.length));
console.log(title);
//40 / 2 = pad on both side
//factor in title.length
//40 - title.length / 2 = pad on both side + title.length = padStart arg
