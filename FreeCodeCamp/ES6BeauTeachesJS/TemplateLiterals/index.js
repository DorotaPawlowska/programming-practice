// template literals
// multi-line strings
console.log(`string text line1
string text line2`);

//expression interpolation
let a = 5;
let b = 10;
console.log(`fifteen is ${a + b} and \nnot ${2 * a + b}`);

// tagged template literals
function tag(strings, ...values){
  console.log(strings);
  console.log(values);

  return "js nuggets"
}

tag`hello ${a+b} world ${a*b}`;
console.log(tag`hello ${a+b} world ${a*b}`);

function template(strings, ...keys){
  console.log(strings);
  console.log(keys);
  return (function(...values){
    let dict = values[values.length - 1] || {};
    let result = [strings[0]];
    keys.forEach(function(key, i){
      let value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
}

let t1Closure = template`${0}${1}${0}!`;
console.log(t1Closure('Y', 'A'));
let t2Closure = template`${0} ${'foo'}!`;
console.log(t2Closure('hello', {foo: 'World'}));
