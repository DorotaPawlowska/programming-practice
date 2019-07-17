// ⭐️ Course content ⭐️

// #############################  ⌨️ Template Literals (1:06)

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

// #############################  ⌨️ Destructuring Objects and Arrays (5:32)

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

// #############################  ⌨️ Object Literal (9:42)

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

// #############################  ⌨️ For of loop (13:44)

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

// console.log(incomes);

// for( const letter of flName ){
//   console.log(letter);  
// }

// console.log(total);

// #############################  ⌨️ Spread operator (17:51) 

let examp1 = [1,2,3,4,5,6];
let examp2 = [...examp1];
examp2.push(true);

let examp3 = {
  frName: 'Dylan'
};

let examp4 = {
  ...examp3
}

// console.log(examp1);
// console.log(examp2);
// console.log(examp3);
// console.log(examp4);

// #############################  ⌨️ Rest operator (20:57)

function addOld(nums){
  console.log(arguments);
}

function addRest(...nums){
  console.log(nums);
}

// addOld(4,5,6,78,1);
// addRest(4,5,6,78,1);

// #############################  ⌨️ Arrow Functions (23:02)

function addArr(...nums){

  let total = nums.reduce(function(x,y){
    return x+y;
  });

  let total2 = nums.reduce((x,y) => x+y);

  console.log(total);
  console.log(total2);
}

// addArr(4,5,7,8,12);

// #############################  ⌨️ Default Params (25:50)

function addParam(numArray = []){
  let total = 0;
  numArray.forEach((element) => {
    total += element;
  });
  console.log(total);  
}

// addParam();

// #############################  ⌨️ Array.includes() (27:44)

let numArray2 = [1,2,3,4,5];

// console.log(numArray2.indexOf(0));
// console.log(numArray2.includes(0));
// console.log(numArray2.includes(2));

// #############################  ⌨️ Let & const (28:58)

if(false){
  var exam = 5;
}

if(false){
  let exam = 5;
}

// console.log(exam);

var exam2;

if(false){
  exam2 = 5;
}

const exam3 = 5;
const exam4 = [];
const exam5 = {};
// exam3 = 10;

exam4.push(5);
// exam4 = 3;

exam5.firstName = 'Dylan';

// console.log(exam3);
// console.log(exam4);
// console.log(exam5);

// #############################  ⌨️ Export & import (32:53)

{/* <script type="module" src="main.js"></script> */}

import { data } from './example.js';
let updateData = data;

updateData.push(5);
// console.log(updateData);

// #############################  ⌨️ String.padStart(), String.padEnd() (35:29)

let ex = 'Dylan';

// console.log(ex.padStart(10, 'a'));
// console.log(ex.padEnd(10, 'a'));

let ex2 = 'YouTube.com/CodingTutorials360';

// console.log(ex2.padStart(100)); // dodaje pust znaki do tekstu
// console.log(ex2.padEnd(1)); // ignoruje to ograniczenie

// #############################  ⌨️ Classes (38:05)

import { Animal, Cat } from './animal.js';

let cat = new Animal('Cat', 4);
let catC = new Cat('Cat', 4);

// cat.legs = 3;
// cat.makeNoise();
// cat.makeNoise('Meow');

// catC.makeNoise();
// console.log(catC.metaData);

// console.log(cat.type);
// console.log(cat.legs);
// console.log(cat.metaData); // getter 

// console.log(Animal.return10()); // static method !!!

// #############################  ⌨️ Trailing commas (49:59)

function adder(param1,){
  const ex = {
    name: 'Dylan',
  };

  console.log(ex);
}

adder(2);

// #############################  ⌨️ Async/Await (51:27)

// #############################  ⌨️ Sets (1:01:19)

// #############################  ⌨️ What's Next (1:04:08)
