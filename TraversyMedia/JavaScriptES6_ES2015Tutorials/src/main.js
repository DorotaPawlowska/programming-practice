// var a = "test";
// var b = "test2";

// console.log(a);
// console.log(b);

function testVar(){
  var a = 30;
  if(true){
    var a = 50;
    console.log(' var in' + a);
  }
  console.log('out' + a);
}

testVar();

function testLet(){
  let a = 30;
  if(true){
    let a = 50;
    console.log(' let in' + a);
  }
  console.log('out' + a);
}

testLet();

// for(var i = 0; i < 10; i++){
//   console.log(i);
// }
// console.log(i);

// for(let i = 0; i < 10; i++){
//   console.log(i);
// }
// console.log(i);

// --------------------------------------------
const colors = [];
colors.push('red');
colors.push('blue');

// colors = "green";

console.log(colors);

