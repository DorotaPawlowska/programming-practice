// var a = "test";
// var b = "test2";

// console.log(a);
// console.log(b);

// function testVar(){
//   var a = 30;
//   if(true){
//     var a = 50;
//     console.log(' var in' + a);
//   }
//   console.log('out' + a);
// }

// testVar();

// function testLet(){
//   let a = 30;
//   if(true){
//     let a = 50;
//     console.log(' let in' + a);
//   }
//   console.log('out' + a);
// }

// testLet();

// for(var i = 0; i < 10; i++){
//   console.log(i);
// }
// console.log(i);

// for(let i = 0; i < 10; i++){
//   console.log(i);
// }
// console.log(i);

// ============================================================

// const colors = [];
// colors.push('red');
// colors.push('blue');

// // colors = "green";

// console.log(colors);

//  ============================================

// class User{
//   constructor(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   static countUsers(){
//     console.log('there are 50 users');
//   }

//   register(){
//     console.log(this.username + ' is now registered');
//   }
// }

// let bob = new User('bob', 'bob@email.com', '123456');
// bob.register()
// User.countUsers();

// class Member extends User{
//   constructor(username, email, password, memberPackage){
//     super(username, email, password);
//     this.memberPackage = memberPackage;
//   }

//   getPackage(){
//     console.log(this.username + ' is subscribed to the ' + this.memberPackage + ' package');
//   }
// }

// let mike = new Member('mike', 'mike@email.com', '0987765', 'standard');
// mike.getPackage();
// mike.register();

// let name = 'john';
// function makeUppercase(word){
//   return word.toUpperCase();
// }

//================================================================================

// let template = `
// <h1>${makeUppercase('hello')}, ${name}</h1>
// <p>template in  JavaScript</p>`;

// document.getElementById('template').innerHTML = template;

// ===========================================================================

// let theString = "hello i love javascript";

// startsWith();
// endsWith();
// includes();

// console.log(theString.startsWith('hello'));
// console.log(theString.endsWith('script'));
// console.log(theString.includes('love'));

//hex
// console.log(0xff);
//binary
// console.log(0b101011);
//octal
// console.log(0o543);

// console.log(Number.isFinite(5));
// console.log(Number.isNaN(NaN));
// console.log(Number.isInteger(3));

//===============================================================================

// function greet($greeting = 'hello world'){
//   console.log($greeting)
// }

// greet();

// // === next topic == ===

// let args1 = [1,2,3];
// let args2 = [4,5,6];

// function test(){
//   console.log(args1+','+args2);
// }

// test.apply(null, args1);
// test(...args1, ...args2);

//=================================================================================

// let myArray = [11, 13, 44, 66, 98];
// let mySet = new Set(myArray);

// mySet.add('100');
// mySet.add({a:1, b:2});
// mySet.delete(44);
// mySet.clear();
// mySet.add('100');
// mySet.add(44);
// mySet.add({a:1, b:2});

// console.log(mySet);
// console.log(mySet.size);
// console.log('------------------========----------------');

// mySet.forEach(function(val){
//   console.log(val);
// });

// let myMap = new Map([['a1','hello'],['b2','goodby']]);
// myMap.set('c3','foo');
// myMap.delete('a1');

// console.log(myMap);
// console.log(myMap.size);

// let carWeakSet = new WeakSet();
// let car1 = {
//   make: 'Honda',
//   model: 'Civic'
// }
// carWeakSet.add(car1);

// let car2 = {
//   make: 'Toyota',
//   model: 'Camry'
// }
// carWeakSet.add(car2);

// carWeakSet.delete(car1);
// console.log(carWeakSet);

// // ------ ==== ------
// let car2WeakMap = new WeakMap();
// let key1 = {
//   id: 1
// }

// let car3 = {
//   make: 'Honda',
//   model: 'Civic'
// }

// let key2 = {
//   id: 2
// }

// let car4 = {
//   make: 'Jeep',
//   model: 'Civic'
// }

// car2WeakMap.set(key1, car3);
// car2WeakMap.set(key2, car4);

// car2WeakMap.delete(key1);
// console.log(car2WeakMap);

// =================================================

function Prefixer(prefix){
  this.prefix = prefix;
}

// Prefixer.prototype.prefixArray = function(arr){
//   let that = this;
//   return arr.map(function(x){
//     console.log(that.prefix + x);
//   });
// }

Prefixer.prototype.prefixArray = function(arr){
  return arr.map(x => {
    console.log(this.prefix + x);
  });
}

let pre = new Prefixer('hello ');
pre.prefixArray(['brad', 'jeff']);

let add = function(a,b){
  let sum = a + b;
  console.log(sum);
  return false;
}

let add2 = (a,b) => {
  let sum = a + b;
  console.log(sum);
  return false;
}

add(21,2);
add2(12,2);