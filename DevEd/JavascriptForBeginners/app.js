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

const name1 = "Dev Ed1";
const text2 = "inny przykład";

function upperCase(text){
    console.log(text.toUpperCase());
}

upperCase(name1);

function adder(num1, num2){
    console.log(num1 + num2);
}

// adder(3,4);

const upperCaseES5 = (text) => {
    console.log(text.toUpperCase());
}

upperCaseES5(text2);

// console.log(name1); // global scoope
// console.log(name2); // local scoope in function upperCase()