const orders = [ 500, 30, 99, 15, 223 ];

'bad loop code'

let total = 0;
const withTax = [];
const highValue = [];

for(let i = 0; i < orders.length; i++){
  // reduce
  total += orders[i];
  // map
  withTax.push(orders[i] * 1.1);
  // filter
  if(orders[i] > 100){
    highValue.push(orders[i]);
  }
}
console.log( total, withTax, highValue);

'good loop code'

const tot = orders.reduce((acc, cur) => acc + cur);
const withT = orders.map( v => v * 1.1);
const highV = orders.filter( v => v > 100);

console.log( tot, withT, highV);
