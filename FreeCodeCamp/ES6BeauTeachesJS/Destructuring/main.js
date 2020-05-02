/* jdsdcsdc  -> Shift + Alt + a
kkkkkk */

/* destructuring */

// assign variables from objects
var voxel = { x: 3.6, y: 7.4, z: 6.54};
// var x = voxel.x; // x = 3.6
// var y = voxel.y; // y = 7.4
// var z = voxel.z; // z = 6.54

const{ x, y, z } = voxel;
console.log(x);
const{ x: a, y: b, z: c } = voxel;
console.log(b);

// assing variables from nested objects
const nest = {
  start: { x: 5, y: 6 },
  end: {x: 6, y: -9 }
};

const { start: {x: startX, y: startY}} = nest;
console.log(startX);

// assign variables from arrays
const [q,,,,r] = [1,2,3,4,5];
console.log(q,r);

// rest operator to reassign array elements
const [d, s, ...res] = [1,2,3,4,5];
console.log(d,s);
console.log(res);

//pass an object as a function's parameters
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with this variables
}

const profileUpdate2 = ({ name, age, nationality, location }) => {
  // do something with this variables
}

const profileUpdate3 = ({ name, age }) => {
  // do something with this variables
}