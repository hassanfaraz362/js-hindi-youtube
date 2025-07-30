// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol,Bigint

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 32462666659282n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myobj = {
    name: "hitesh",
    age: 22,

}

const myFunction = function(){
    console.log("Hello world");
    
}


// Return typeof variables in JavaScript

// 1) Primitive Datatypes

// Number => number
// String => string
// Boolean => boolean
// null => object
// undefined => undefined
// Symbol => symbol
// BigInt => bigint

// 2) Non-primitive Datatypes

// Arrays => object
// Function => function
// Object => object

//++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap (Non-primitive)

let myyoutubechannel = "hiteshkhan"

let anothername = myyoutubechannel
anothername = "chaiaurcode"

console.log(myyoutubechannel);
console.log(anothername);

let userone = {
    email: "user@google.com",
    upi: "user@ybl"
}

let usertwo = userone

usertwo.email = "malang@google.com"

console.log(userone.email);
console.log(usertwo.email);


