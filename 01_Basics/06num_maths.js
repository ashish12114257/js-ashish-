const score = 400
console.log(score);
const balance = new Number(200);   //now we can easily convert it
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length)
// console.log(typeof balance.toString());

const ohterNumber = 123.565
// console.log(balance.toFixed(2));   //fixed the number after decimal
// console.log(ohterNumber.toPrecision(4));   //specifies the number of significant value
 
const hundred = 1000000
// console.log(hundred.toLocaleString('en-IN')); 


///++++++++++++++++Mathes+++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.2));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.max(4,5,6,95));
// console.log(Math.min(52,3,0,73));
// console.log(Math.sqrt(25));

console.log(Math.random());   //always gives random values between 0-1
console.log(Math.floor(Math.random()*10) +1);

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min + 1))+min);
