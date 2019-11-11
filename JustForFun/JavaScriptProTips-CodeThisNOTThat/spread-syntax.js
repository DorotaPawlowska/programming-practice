const pikachu = { name: 'Pikachu' };
const stats = { hp: 40, attack: 60, defense: 45 };

'bad object code'

pikachu['hp'] = stats.hp;
pikachu['attack'] = stats.attack;
pikachu['defense'] = stats.defense;

const lvl0 = Object.assign(pikachu, stats);
const lvl1 = Object.assign(pikachu, { hp: 45 });

'good object code'

const lvl2 = {...pikachu, ...stats};
const lvl3 = {...pikachu, hp: 45 };

//arrays
let pokemon = [ 'Arbok', 'Raichu', 'Sandshrew '];

'bad array code'

pokemon.push('Bulbasaur');
pokemon.push('Metapod');
pokemon.push('Weedle');

'good array code'

pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle']; // push
pokemon = ['Bulbasaur', 'Metapod', 'Weedle', ...pokemon, ]; // unshift - end coma is good
