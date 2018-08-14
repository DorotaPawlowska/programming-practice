const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('hello i am a %s string', 'poop');

// Styled
console.log('%c i am some greate text', 'font-size: 50px; background: red; text-shadow: 10px 10px 0 blue');

// warning!
console.warn('oh no!');

// Error :|
console.error('shit');

// Info
console.info('shitex info not working');

// Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'that is wrong');
console.assert(1 === 2, 'that is wrong');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach(function (t) {
//        console.group(`${t.name}`);
    console.groupCollapsed(`${t.name}`);
    console.log(`this is ${t.name}`);
    console.log(`age: ${t.age}`);
    console.log(`age: ${t.age * 7}`);
    console.groupEnd(`${t.name}`);
});

// counting
console.count('wes');
console.count('wes');
console.count('wes');
console.count('wes');
console.count('steve');
console.count('steve');
console.count('steve');
console.count('steve');
console.count('steve');
console.count('steve');
console.count('wes');
console.count('wes');
console.count('wes');
console.count('wes');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
.then(data => {
    console.timeEnd('fetching data');
console.log(data);
});

// table
console.table(dogs);
