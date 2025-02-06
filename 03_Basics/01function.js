// function

function sayMyName(){
    console.log("s");
    console.log("g");
    console.log("h");
    console.log("r");
    console.log("m");
}
// sayMyName();

// addition of two numbers

// function addTwoNumber(number1, number2){
//     console.log(number1+number2)
// }
// addTwoNumber(2, 5);      //it is only printing

// function addTwoNumber(number1, number2){
//     // let result = number1 + number2
//     // return result 
//     return number1+ number2
// }
// const result = addTwoNumber(5, 6);
// console.log(result);


function loginUserMessage(userName="sam"){
    if(!userName){
        // console.log("enter the user first");
    }
    return `${userName} is just logged in`
}
// console.log(loginUserMessage("Ashish"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1
    
}
// console.log(calculateCartPrice(200, 500, 600, 70, 10));

// passing object and array to the function 

const user = {
    username: "ahsish",
    price: 556
}

function handleObject(anyobject){
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 756
})

const myArray = [200,300,400,600]

function returnSecondElement(getArray){
    return getArray
}
// console.log(returnSecondElement(myArray[2]));
console.log(returnSecondElement([700,800,900,0,5]));

