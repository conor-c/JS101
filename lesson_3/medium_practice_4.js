function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement); //returns length of the array
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}//will actually modify the original array

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement); //returns new array
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}//simly copies the buffer array and will not have persistant change on the original array

let buffer = ['test'];
console.log(addToRollingBuffer1(buffer, 2, 'blue1'));
console.log(buffer);


let test = ['green'];
console.log(addToRollingBuffer2(test, 2, 'red'));
console.log(test);

