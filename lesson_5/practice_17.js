function createUUID () {
  const CHARSET = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b',
    'c', 'd', 'e', 'f'];
  let uuid = '';

  for (let idx = 0; idx < 32; idx += 1) {
    let randomIdx = Math.floor(Math.random() * CHARSET.length);
    uuid += CHARSET[randomIdx];
  }

  uuid = uuid.substring(0, 8) + '-'
         + uuid.substring(8, 12) + '-'
         + uuid.substring(12, 16) + '-'
         + uuid.substring(16, 20) + '-'
         + uuid.substring(20);

  return uuid;
}

console.log(createUUID());

// provided solution used a sections array and a .forEach
// this the ability to change the uuid section length easier
// it used a clever if statement to insert the '-'
// aswell as utalized the index parameter of the .forEach
// provided below :

// function generateUUID() {
//   let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8,
//9, 'a', 'b', 'c', 'd', 'e', 'f'];
//   let sections = [8, 4, 4, 4, 12];

//   let uuid = '';
//   sections.forEach((section, sectionIndex) => {
//     for (let index = 1; index <= section; index++) {
//       let randomIndex = Math.floor(Math.random() * characters.length);
//       uuid += characters[randomIndex];
//     }

//     if (sectionIndex < sections.length - 1) {
//       uuid += '-';
//     }
//   });

//   return uuid;
// }
