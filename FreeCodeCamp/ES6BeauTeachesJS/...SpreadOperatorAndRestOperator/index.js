// spread operator | rest operator

// spread OP:
// add the elements of an existing array into a new array
let certsToAdd = ['lorem ipsum', 'dolor'];
let certifications = ['resWeb', ...certsToAdd, 'data vis', 'apis cośtam', 'quality cośtam'];
console.log(certifications);

// pass elements of an array as arguments to a function
function addThreeNumbers(x,y,z){
  console.log(x+y+z);
}

let args = [0,1,2,3]; // czwarty element jest ignorowany przez funkcję
addThreeNumbers(...args);

// copy arrays
let arr = [1,2,3];
let arr2 = [...arr]; // like arr.slice()
arr2.push(4);
console.log(arr);
console.log(arr2);

// concatenate arrays
let arr3 = [0,1,2];
let arr4 = [3,4,5];
arr5 = arr3.concat(arr4); // <- tak albo ...(spread OP)
console.log(arr5);
arr3 = [ ...arr3, "coś", ...arr4];
console.log(arr3);

// rest OP: condense multiple elements into an array
function multiply(multiplier, ...theArgs){
  return theArgs.map(function(element){
    return multiplier * element;
  });
}

let arr7 = multiply(2,1,2,3);
console.log(arr7);