// for of loop 

// ["", "", ""] 
// [{}, {}, {}] 

const arr = [1,2,3,4,5]
for(const val of arr){
    // console.log(val);   
}

const greeting = "Hello world this is ashish"
for( const i of greeting ){
    // console.log(`Each char of greeting is ${i}`);
    
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "united states of america")
map.set('FR', "france")
map.set('CH', "china")
map.set('IN', "India")
// console.log(map); 

for(const [key, value] of map){
    // console.log(`key is ${key} and value is ${value}`);
}

// so can we use for of on an object..... no we can't
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for(const [key, value] of myObject){
    // console.log(key, value);
}