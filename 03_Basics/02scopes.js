// scopes 

// let a = 500
// const b = 5
var c = 300

if(true){  
let a = 500
const b = 5
var c = 3
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "ashish kumar"
    function two(){
        website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "ashking"
    if(username === "ashking"){
        const website = "youtube"
        // console.log(`username is ${username} and website is ${website}`); 
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++++++++ Interesting ++++++++++++++++++
// Two type of declaration of a function 
// one is normal one the the other is called expression 


// console.log(addOne(5));     // can be accessed from top bottom of the functon 
function addOne(num){
    return num+1
}
// console.log(addOne(5));


// console.log(addTwo(5));   // this is called expression which can be accessed from bottom 
const addTwo = function(num){
    return num+2
}
console.log(addTwo(5));
