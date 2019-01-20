// @flow

//variables
let name: string = "John Doe";
let age: number = 30;
let something: any = [1,2,3];
let users: string[] = ["John", "Sara"];
let ids: number[] = [1,2,3];
let hasKids: boolean;

//interface
let person: Person;

person = {
    name: 'John',
    age: 30,
    // hasKids: true
}

interface Person {
    name: string;
    age: number;
    hasKids?: boolean;
}

//functions
function greeting(name: string): string{
    return 'hello' + name;
}

console.log(greeting("Wes"));
// console.log(greeting(1));

function someFunction(value: string | number){
    return 'hello';
}

console.log(someFunction("Wes"));
console.log(someFunction(1));
// console.log(someFunction(true));

//utility types

type Suit = "Diamods" | "Clubs" | "Spades";

const clubs: Suit = 'Clubs';
const hearts: Suit = 'Hearts';