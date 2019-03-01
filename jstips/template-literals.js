const horse = {
    name: 'Topher',
    size: 'large',
    skills: ['jousting', 'racing'],
    age: 7
}

' Bad Code :shit'
let bio = horse.name + 'is a' + horse.size;


' Good Code :shit'
const {name, size, skills} = horse;
bio = `${name} is a ${size} skilled in ${skills.join(' & ')}`;

console.log(bio);

//OR

// Weird magic below
function horseAge(str, age) {
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`;
}

const bio2 = horseAge`This horse is ${horse.age}`;