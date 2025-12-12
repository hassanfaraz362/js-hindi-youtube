# Projects related to DOM

## project link
[click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

``` javascript
console.log("hitesh")

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2

```javascript

const form=document.querySelector('form')
// this use case will give you empty value 
// const height=parseInt(document.querySelector('#height').value)


form.addEventListener('submit', function(e){
  e.preventDefault()

  const height =parseFloat(document.querySelector('#height').value)
  const weight=parseFloat(document.querySelector('#weight').value)
  const results=document.querySelector('#results')

  if(height==='' || height < 0 || isNaN(height)){
    results.innerHTML =`Please enter a valid height ${height}`
  }else if(weight=== '' || weight<0 || isNaN(weight)){
    results.innerHTML=`please enter a valid weight ${weight}`
  }else{
    const bmi = (weight/ ((height / 100)** 2)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if(bmi < 18.6){
      results.innerHTML= `under weight ${bmi}`
    }else if (bmi >= 18.6 && bmi< 24.9){
      results.innerHTML= `underweight ${bmi}`
    }else{
      results.innerHTML= `overweight ${bmi}`
    }
  }
})

```
## project 

```javascript
const clock=document.getElementById('clock')
// const clock=document.querySelector('#clock');

setInterval(function(){
  let date =new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
},1000)

```