// proxies!
// let p = new Proxy(target, handler);


// example 1
let handler = {
  get(target, key){
    return key in target ? target[key] : 37;
  }
};

let p = new Proxy({}, handler);
// let p ={};
p.a = 1;
p.b = undefined;

console.log(p.a, p.b);
console.log('c' in p, p.c);


// example 2
let validator = {
  set: function(obj, prop, value){
    if(prop === 'age'){
      if(typeof value !== 'number' || Number.isNaN(value)){
        console.log('Age must be a number');
      }
      if(value < 0){
        console.log('Age must be a positive number');
      }
    }
    obj[prop] = value;
    return true;
  }
};

let person = new Proxy({}, validator);
person.age = 'young';
console.log(person.age);
person.age = -30;
person.age = 30;
console.log(person.age);