const turtle = {
    name: 'Bob',
    legs: 4,
    shell: true,
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
}

' Bad Code :shit: 💩'
function feed(animal) {
    return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`;
}

console.log(feed(turtle));

' Good Code :star: ⭐'
// destructuring helps shorten the code 
// by accessing an object's property directly
function feedTo({name, meal, diet}) {
    return `Feed ${name} ${meal} kilos of ${diet}`;
}

// OR

feedTo = (animal) => {
    const {name, meal, diet} = animal;
    return `Feed ${name} ${meal} kilos of ${diet}`;
}
console.log(feedTo(turtle));