const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

for(let i = 0; i < companies.length; i++){
  console.log(companies[i]);
}

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  forEach
companies.forEach( (company) => {
  console.log(company.name);
});

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  filter
// ================== 21 i więcej
let canDrink = [];
for(let i = 0; i< ages.length; i++){
  if(ages[i] >= 21){
    canDrink.push(ages[i]);
  }
}
console.log(canDrink);

const canD = ages.filter((age) => {
  if(age >= 21){
    return true;
  }
});

//albo jeszcze mniej pisania:
// const canD = ages.filter(age => age >= 21);
console.log(canD);

// ================= retail companies - categories
const reatailComp = companies.filter(company => company.category === 'Retail');
console.log(reatailComp);

// ================= get 80s companies
const eightisComp = companies.filter( company => (company.start >= 1980 && company.start < 1990));
console.log(eightisComp);
// ================= get comp that lasted 10y or more
const lasted10y = companies.filter(company => (company.end - company.start >= 10));
console.log(lasted10y);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  map
//array of company names
const compNames = companies.map( comp => comp.name);
console.log(compNames);

const testMap = companies.map( comp => `${comp.name} [${comp.start} - ${comp.end}]`);
console.log(testMap);

const agesSquare = ages.map( age => Math.sqrt(age));
const agesTimes2 = ages.map( age => age*2);
const twoMap = ages
      .map( age => Math.sqrt(age))
      .map( age => age*2);

console.log(agesSquare);
console.log(agesTimes2);
console.log(twoMap);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  sort
// const sotrComp = companies.sort((comp1, comp2) => comp1.start > comp2.start ? 1 : -1);
// console.log(sotrComp);

// const sortAges = ages.sort( (age1,age2) => age1 - age2);
// console.log(sortAges);

//const sortAges2 = ages.sort( (age1,age2) => age2 - age1);
// console.log(sortAges2);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  reduce

let ageSum = 0;
for(let i = 0; i < ages.length; i++){
  ageSum += ages[i];
}
console.log(ageSum);

const ageSum2 = ages.reduce( (total, age) => total + age, 0); // dobrze ??
console.log(ageSum2);

const totalYears = companies.reduce( (total, comp) => total + (comp.end - comp.start), 0);
console.log(totalYears);

//combine methods

const combine = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a,b) => a-b)
  .reduce((a,b) => a+b, 0);

  console.log(combine);