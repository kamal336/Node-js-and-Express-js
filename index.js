// by this we can access or import all
const s1 = require('./local-module');

console.log('My name is', s1.getName());
console.log('My wife is ', s1.getWife());
console.log('My age is', s1.myAge());
console.log('My results is',s1.cgpa);

// by this we can access or import certain Element or function or variable
let {getName, getWife, myCountry} = require('./local-module');

console.log(getName());
console.log(getWife());
// console.log(myCountry());

