// Promise that returns random number async-ly
const random = () => {
    return Promise.resolve(Math.random());
}

'Bad Promise code :shit: 💩'

// Try to retrieve 3 different numbers async-ly and add them at the end  
const sumRandomAsyncNums = () => {
    let first;
    let second;
    let third;

    return random()
        .then(v => {
            first = v;
            return random();
        })
        .then(v => {
            second = v;
            return random();
        })
        .then(v => {
            third = v;
            return first + second + third;
        })
}

'Good Promise code :star: ⭐'

const sumRandomAsyncNumsBetter = async() => {
    const first = await random();
    const second = await random();
    const third = await random();

    return first + second + third;

    // console.log(`Result ${first + second + third}`);
}

// Alternative
 const randos = Promise.all([
     random(),
     random(),
     random()
 ])

 // result 1
result1 = sumRandomAsyncNums();
result1.then(res => console.log('result1:', res));

// result 2
(async () => {
    res =  await sumRandomAsyncNumsBetter();
    console.log('result2:', res);
})();

// result 3
randos.then(
    res => console.log('result3:', res.reduce( (total,num) => 
    {return total+num;} 
    ))
);