// arrow functions

// syntax
// (param1, param2) => { statement }
// (param1, param2) => expression
// (param1, param2) => { return expression; }

// (singleParam) => { statement}
// singleParam => { statement }

// () => { statement }
// () => expression
// () => { return expression; }

// (param1, param2, param3) => expression


// normal function
const multiplay1 = function(x,y){
  return x * y;
};

// arrow function
const multiplay2 = (x,y) => {return x * y};
// or
const multiplay3 = (x,y) => x*y;

console.log(multiplay1(2,3));
console.log(multiplay2(2,3));
console.log(multiplay3(2,3));


//example
const materials = [
  'hydrofil',
  'heliu',
  'lithum',
  'beryl'
];

let materialsLenght1 = materials.map(function(material){
  return material.length;
});

let materialsLenght2 = materials.map((material) => {
  return material.length;
});

let materialsLenght3 = materials.map( material => material.length );

console.log(materialsLenght1);
console.log(materialsLenght2);
console.log(materialsLenght3);

// no binding of 'this'
function Person(){
  this.age = 0;

  let inter = setInterval(() => {
    console.log(++this.age);
    if(this.age === 7) clearInterval(inter);
  }, 100);
}

let p = new Person();
// console.log(object);


// returning object literals
let func = () => ({ foo: 1});

// no line breaks
// let funct = ()
//           => 1;