// JS ES5
// console.log('hey dev ed');

// var life = 100; // lifebar in the game NUMBER
// life = life - 10; // 90
// life = life - 10; // 80
// life = life / 2;

// var name = "Dev Ed"; // simple STRING

// var checkout = false; // BOOLEAN

// var box; // UNDEFINED

// var box1 = null; // NULL

//  OBJECT SYMBOL

// console.log(life + ' ' + box);

// JS ES6

// const life2 = 100;
// life2 = 50; // big no no
// const life2 = 30; // big no no

// let life3 = 100;
// life3 = 50;
// life3 = life3 - 10;

// console.log(life3);

// const name1 = "Dev Ed1";
// const text2 = "inny przykład";

// function upperCase(text){
//     console.log(text.toUpperCase());
// }

// upperCase(name1);

// function adder(num1, num2){
//     console.log(num1 + num2);
// }

// adder(3,4);

// const upperCaseES5 = (text) => {
//     console.log(text.toUpperCase());
// }

// upperCaseES5(text2);

// console.log(name1); // global scoope
// console.log(name2); // local scoope in function upperCase()

// const name = 'Dorin';
// console.log(typeof name);
// const myAge = 24;
// console.log(typeof myAge);
// const yourAge = 21;
// console.log(myAge + yourAge);

// console.log('hello' + ' ' + 'my name is' + ' ' + name + ' ' + 'and i have' + ' ' + myAge +  ' ' + 'years.' );
// console.log('hello it\'s me Ed');
// console.log("hello it's me Ed");
// console.log(`hello it's me aggain`);
// console.log(`hello it's me ${name} and i have only ${myAge}`);

// console.log(typeof (name + myAge));
// console.log(typeof (myAge + name));

const age = 16;
const dice1 = 6;
const dice2 = 3;

if(age > 18){
    console.log('you are good to go!');
} else if(age < 15){
    console.log('wow you are really young')
} else {
    console.log('you are not old enough');
}

if(dice1 === 6 && dice2 === 6){
    console.log('you rolled a double');
} else if(dice1 === 6 || dice2 === 6) {
    console.log('you didnt');
} else {
    console.log('no no no');
}