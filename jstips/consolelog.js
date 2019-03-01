const foo = {name: 'Tom', age:30, nervous:false}
const bar = {name: 'Dick', age:33, nervous:false}
const baz = {name: 'Harry', age:35, nervous:true}

'Bad Code :shit: 💩'
console.log(foo);

'Good Code :star: ⭐'

// styled console.log
console.log('%c My Friends', 'color: orange')   // works in browser's console 

// Computed property names
console.log({foo, bar, baz})

// display as table
console.table([foo, bar, baz])

// Play with time
console.time('looper')

let i = 0;
while(i < 1e6) { i++ }
console.timeEnd('looper')

// Stack Trace Logs
// ?: I dont know what is this for
// ?: Maybe for debugging?
const deleteMe = () => console.trace('bye bye databse')
deleteMe()
deleteMe()
