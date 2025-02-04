const marvel_heros = ["thor", "captain America","ironman"]
const dc_heros = ["superman","flash0", "batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const all_heros = marvel_heros.concat(dc_heros)   // tow arrays are mersed properly
// console.log(all_heros);

// spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]     // using this we can merse more than two or many arrays , use this spread insted of other
// console.log(all_new_heros);

const anotherArray = [1, 2, 3, 4, [5, 8, 9,], 0, 10, [100,101, 20, [30,50,60],99,200], 500,700 ,900]
console.log(anotherArray.flat(Infinity)); // will spread the array 

console.log(Array.isArray("ASHISH"));
console.log(Array.from("ASHISH"));
console.log(Array.from({name: "ashish"}));

const score1 = 40
const score2 = 50
const score3 = 60
console.log(Array.of(score1, score2, score3)); 



