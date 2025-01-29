const name = "ashish kumar"
const repoCount = 50
// console.log(name + repoCount + " Value"); old style
//new way to write
console.log(`Helo my name is ${name} and my repo is ${repoCount}`);

const gameName = new String('ashishGame-hot-a-k-ptt');
// console.log(typeof gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt('6'));
console.log(gameName.indexOf('G'));

const newString = gameName.substring(0,6);
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); 
const newStringOne = "   ashish"
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "https://ashish.com/ashish%20kumar"
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));
console.log(gameName.split('-'));


