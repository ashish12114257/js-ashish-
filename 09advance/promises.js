// promise creation 
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve() 
        
    }, 1000)
})

//promise consumption
promiseOne.then(function(){
    console.log('promise is consumed');
    
})

// we can also write promise in one line, no need to store in a variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve();
    },1000);
}).then(function(){
    console.log('Async task 2 is resolved');
    
})

// We are creating another promise 
// we can also pass data/array/function to resolve-- mainly we pass object to resolve 

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"ashish", email: "ashish@example.com"})
    },1000); 
})

promiseThree.then(function(user){
    console.log(user); 
})

// now we are creating another promise and giving condition also we use then(), and catch() too
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true; 
        if(!error){
            resolve({usrname:'ashishKumar', password:"123"})
        }else{
            reject('ERROR: Someting went wrong')
        }
    },1000); 
})

promiseFour.then((user) =>{
    console.log(user)
    return user.username
}).then((username) =>{
    console.log(username)
    
}).catch((error) =>{
    console.log(error); 
}).finally(() => (console.log("The promise is either resolved or rejected ")))


// now we are using async await-- matlab thoda der wait krta hai kam hone ka agar ho jata hai tab hi aage badhta hai warna error de deta hai, actually ismein hum catch handle nhi krte hai  
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true; 
        if(!error){
            resolve({usrname:'ashishKumar', password:"123"})
        }else{
            reject('ERROR: Js went wrong')
        }
    },1000); 
})

// async await is similar to .then .catch we can use anyone 
// another way 
async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response); 
    }
    catch(error){
        console.log(error); 
    }
}
consumePromiseFive(); 

// we can use either try 

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) =>{
    return response.json()
})
.then((data) =>{
    return console.log(data); 
})
.catch((error) => console.log(error))