const name = 'Geralt';
let gold = 100;
// const gold;

// let name = 'Vesemir';
// console.log(name);

// gold++;

const signs = ["Quen", "Igni", "Aard"]; 
//referencja do adresu tablicy 
// stałość referencji
signs[1] = "Yrden";
// console.log(signs[1]);

const women = ["Ciri", "Triss", "Yennefer"];

// signs = women;

signs[2] = women[0];
console.log(signs[2]);

signs.push("Aksji");
console.log(signs);

const witcher = {
    name: "Geralt",
    gold: 100
};

// witcher = {
//     name: "Lambert",
//     gold: 400
// };

// const guy = {
//     name: "Krawawy Baron",
//     gold: 1500
// }

// witcher = guy;

witcher.name = "Eskel";

console.log(witcher);

