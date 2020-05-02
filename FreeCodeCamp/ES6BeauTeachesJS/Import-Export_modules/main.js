
// import part of a module

// import { square, diag } from "./mods/lib";
import * as lib from "./mods/lib.js";
// import { blablabla as bla } from "./somewhere";
import name from "./mods/lib.js";
// main.js

// console.log(square(11));
// console.log(diag(4,3));

console.log(lib.square(11));
console.log(lib.diag(4,3));

console.log(name());