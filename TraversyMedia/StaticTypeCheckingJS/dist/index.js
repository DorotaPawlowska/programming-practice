let name = "John Doe";
let age = 30;
let something = [1, 2, 3];
let users = ["John", "Sara"];
let ids = [1, 2, 3];
let hasKids;

//interface
let person;

person = {
    name: 'John',
    age: 30
    // hasKids: true
};

//functions
function greeting(name) {
    return 'hello' + name;
}

console.log(greeting("Wes"));
// console.log(greeting(1));

function someFunction(value) {
    return 'hello';
}

console.log(someFunction("Wes"));
console.log(someFunction(1));
// console.log(someFunction(true));

//utility types

const clubs = 'Clubs';
const hearts = 'Hearts';