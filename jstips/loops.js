const orders = [500, 30,99, 15, 223];

'Bad code :shit: 💩'

let total = 0;
const withTax = [];
const highValue = [];

console.log('Bad code');
for(i=0; i<orders.length; i++) {
    // Reduce
    total += orders[i];
    console.log('total:' + total);
    
    // Map
    withTax.push(orders[i] * 1.1);
    console.log('withTax:' + withTax);

    // Filter
    if(orders[i] > 100) {
        highValue.push(orders[i]);
    }
    console.log('highValue:', highValue);

}

'Good code :star: ⭐️'

// Reduce
const betterTotal = orders.reduce((acc, cur) => acc + cur);

// Map
const betterWithTax = orders.map(v => v * 1.1);

// Filter
const betterHighValue = orders.filter(v => v > 100);