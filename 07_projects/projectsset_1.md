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

## project 4 solution

```javascript
let randomnumber=parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput =document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')

const p = document.createElement('p')

let preGuess =[]
let numGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess=parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a valid number')
  }else if(guess<1){
    alert('please enter a valid number')
  }else if(guess>100){
    alert('please enter a num less than 100')
  }else{
    preGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game over.Random number was ${randomnumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomnumber){
    displayMessage(`you guessed it right`)
    endGame()
  }else if (guess < randomnumber){
    displayMessage(`Number is too low`)
  }else if (guess > randomnumber){
    displayMessage(`Number is too high`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  numGuess++;
  remaining.innerHTML =`${11-numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id='newGame'>Start new Game</h2>`;
  startover.appendChild(p)
  playGame = false
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomnumber=parseInt(Math.random() * 100 + 1);
    preGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled')
    startover.removeChild(p)

    playGame = true;
  })
}

```