const myObject = {
    js: 'javascript',
    jav: 'java',
    cpp: 'c++',
    swift: 'swift by apple'
}

for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// so if we want to print key value in object then we have to use for in instead of for of 

const programming = ["js", "java", "rubby", "python"]
for( const key in programming){
    console.log(programming[key]);
    
}

// we can't use for in in map 
const map = new Map()
map.set('IN', "India")
map.set('USA', "united states of america")
map.set('FR', "france")
map.set('CH', "china")
map.set('IN', "India")

for(const key in map){
    // console.log(key);
}