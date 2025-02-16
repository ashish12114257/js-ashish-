# This is my project 

# Solution code 

# Project 1
``` javascript
console.log("ashish")

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( function (button){
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e);   
    console.log(e.target);  
    if(e.target.id === "grey"){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === "yellow"){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === "white"){
      body.style.backgroundColor = "white"
    }
    if(e.target.id === "blue"){
      body.style.backgroundColor = e.target.id; 
    }
    
  })
})
```

# Project 2

```javascript

const form = document.querySelector('form')

form.addEventListener( 'submit', function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value); 
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if(height === '' || height === isNaN(height) || height<=0){
    results.innerHTML = `please enter a valid height ${height}`;
  }
  else if(weight === '' || weight === isNaN(weight) || weight<=0){
    results.innerHTML = `please enter a valid weight ${weight}`;
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`
  }
})
```