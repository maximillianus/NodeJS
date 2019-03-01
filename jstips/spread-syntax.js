// Objects

const pikachu = {name: 'Pikachu'};
const stats = {hp: 40, attack: 60, defense: 45};

'Bad Code :shit'

// simply redefine everything
// bad because lengthy, verbose, and modifying the object property itself

pikachu['hp'] = stats.hp;
pikachu['attack'] = stats.attack;
pikachu['defense'] = stats.defense;

// OR

const lvl0 = Object.assign(pikachu ,stats);
const lvl1 = Object.assign(pikachu ,{hp: 45});

'Good Code :smile'

// new object = { ...object1, ...object2}
// new object = { ...object, ...newProperty}
const lvl10 = { ...pikachu, ...stats};
const lvl11 = { ...pikachu, hp: 45};

// Applicable to array too. When adding el into array
let pokemon = ['Charmander', 'Bulbasaur', 'Squirtle']

// Pushing el
pokemon = [ ...pokemon, 'Arbok', 'Raichu', 'Sandshrew'];

// Shifting el
pokemon = ['Arbok', 'Raichu', 'Sandshrew', ...pokemon];
console.log(pokemon);


// Inserting el

pokemon = ['Arbok', 'Raichu', ...pokemon, 'Sandshrew'];