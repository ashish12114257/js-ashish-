// reduce function 
// const myNums = [0,1,2,3]
// const myTotal = myNums.reduce( function(accumulator, currentValue){
//     console.log(`accumulato: ${accumulator} and currentValue: ${currentValue}`);
    
//     return accumulator+currentValue
// }, 0)       // 0 will be initial value here as we know accumulator is empty so it takes initial value for the first time
// console.log(myTotal);


// using arrow function

const myNums = [0,1,2,3,4]
const myTotal = myNums.reduce( (accumulator, currentValue) => accumulator+currentValue, 3)      
// console.log(myTotal);

// using reduce in shopping cart

const shoppingCart = [
    {itemName: "java course", price: 2500, sheller: "apna college"},
    {itemName: "py course", price: 1500, sheller: "college wallah"},
    {itemName: "javaScript course", price: 3500, sheller: "chai aur code"}
]
const priceToPay = shoppingCart.reduce( (accu, item) => (accu+item.price), 0)
console.log(priceToPay);
