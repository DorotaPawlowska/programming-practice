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

function addressMaker( city, state ){
  // const newAddress = {
  //   newCity: city,
  //   newState: state
  // };
  // const newAddress = { city: city, state: state };
  const newAddress = { city, state };

  console.log(newAddress);
}

// addressMaker('Austin','Texas');

function adrMaker(address){
  const { city, state } = address;

  // const newAddress = {
  //   city,
  //   state,
  //   country: 'United States'
  // };
  const newAddress = {
    ncity: city,
    nstate: state,
    country: 'United States'
  };

  // console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`);
  
  const { ncity, nstate, country } = newAddress;
  console.log(`${ncity} ${nstate} ${country}`);
  
}

// adrMaker({city: 'Austin', state: 'Texas'});

// ⌨️ For of loop (13:44)
let incomes = [62000, 67000, 75000];
let total = 0;

let flName = "Dylan what Israel";

// for( const income of incomes){
//   console.log(income);  
//   total += income;
// }

for( let income of incomes){
  income += 5000;
}

console.log(incomes);

// for( const letter of flName ){
//   console.log(letter);  
// }

// console.log(total);

// ⌨️ Spread operator (17:51) 

// ⌨️ Rest operator (20:57)

// ⌨️ Arrow Functions (23:02)

// ⌨️ Default Params (25:50)

// ⌨️ Array.includes() (27:44)

// ⌨️ Let & const (28:58)

// ⌨️ Export & import (32:53)

// ⌨️ String.padStart(), String.padEnd() (35:29)

// ⌨️ Classes (38:05)

// ⌨️ Trailing commas (49:59)

// ⌨️ Async/Await (51:27)

// ⌨️ Sets (1:01:19)

// ⌨️ What's Next (1:04:08)