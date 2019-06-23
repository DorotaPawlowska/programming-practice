// 1 = 00000001
// 2 = 00000010
// R = 00000011 = 3
// R = 00000000 = 0



// write, read, execute
// 00000010, 00000100, 00000001

console.log(1 | 2); // bitwise OR | czyli lub
console.log(1 & 2); // bitwise AND | czyli i

// ========================================================

const readPermission = 4;
const wriePermission = 2;
const executePermission = 1;
let myPermission = 0;

myPermission = myPermission | readPermission | wriePermission;
console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes':'no';

console.log(message);
