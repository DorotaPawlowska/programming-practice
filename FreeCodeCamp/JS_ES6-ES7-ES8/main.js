// ⭐️ Course content ⭐️

// ⌨️ Template Literals (1:06)
let word1 = "Dylan";
let word2 = "Israel";

let num1 = 2;
let num2 = 3;

// old way
const fullName = word1 + ' ' + word2;
let example = 'hello \n' + 'world';

// new way
const fullName2 = `${word1} ${word2}`;
const sum = `${num1 + num2}`;
let example2 = `${word1}
hello
world
${word2}
`;

// console.log(fullName);
// console.log(fullName2);
// console.log(sum);
// console.log(example);
// console.log(example2);

// document.getElementById('example').innerText = example;
// document.getElementById('example2').innerText = example2;

// ⌨️ Destructuring Objects and Arrays (5:32)

const personalInformation = {
  firstName: 'Dylan',
  lastName: 'Israel',
  city: 'Austin',
  state: 'Texas',
  zipCode: 73301
};

// renaming 
const { firstName: fn, lastName: ln } = personalInformation;

// console.log(`${fn} ${ln}`);

let names = ['Dylan', 'Coding What', 'Israel'];
let [ firstName, middleName, lastName ] = ['Dylan', 'Coding What', 'Israel'];

lastName = 'Clements';

// console.log(firstName + ' ' + middleName + ' ' + lastName);

// ⌨️ Object Literal (9:42)





// ⌨️ For of loop (13:44)

// ⌨️ Spread operator (17:51) 

// ⌨️ Rest operator (20:57)

// ⌨️ Arrow Functions (23:02)

// ⌨️ Default Params (25:50)

// ⌨️ Array.includes() (27:44)

// ⌨️ Let & const (28:58)

// ⌨️ Export & import (32:53)

// ⌨️ String.padStrart(), String.padEnd() (35:29)

// ⌨️ Classes (38:05)

// ⌨️ Trailing commas (49:59)

// ⌨️ Async/Await (51:27)

// ⌨️ Sets (1:01:19)

// ⌨️ What's Next (1:04:08)
