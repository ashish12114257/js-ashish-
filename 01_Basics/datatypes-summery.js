//two types of data types 
//premitive(7)--call by value
// String, Number, Boolean, null, undefined, Symbol, Bigint

//Reference type or non premitive datatype
//Arrays, Objects, Functions, 

//javaScript is not strictly typed, it is dynamically typed language but typeScript is strictly typed language
const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail;

//how to use Symbol dataType
const id = Symbol("123")
const  anotherId = Symbol("123")
// console.log(id==anotherId);

//Bigint
const bigNumber = 45525865212556n

//Array
const heros = ["shaktiman", "naagraj","doga"]

//object
const myObj = {
    name: "Ashish",
    age: 23,
}

//function
const myFunction = function(){
    // console.log("hello Ashish"); 
}

//how to check datatype
// const const1 = 5522
// console.log(typeof score);
// console.log(myFunction)

//+++++++++++++++++++++++++++++++++++++
//stack (premitive), Heap(non-premitive)
//example
let myYoutubeName = "ashish kumar"
let anothername = myYoutubeName
anothername = "chaiaurcode"
console.log(myYoutubeName);
console.log(anothername);

let userOne = {
    email: "ashish@123",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "ashishkumar@123"
console.log(userOne.email);
console.log(userTwo.email);

