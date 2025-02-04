// Singleton 
// object.create

const mySym = Symbol("mykey1") 

const jsUser = {
    name: "Ashish",
    "full name": "Ashish kumar",
    [mySym]: "mykey2",
    age: 25,
    location: "Jalandhar",
    email: "ashish@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "wednesday"]

    
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "kr3164ashish@gmail.com"
// console.log(jsUser.email);

// Object.freeze(jsUser);
jsUser.email = "mekumar@gmail.com"
// console.log(jsUser.email);

jsUser.myfunction=function(){
    console.log("hello this is ashish");
}

// jsUser.myfunction();
console.log(jsUser.myfunction());
