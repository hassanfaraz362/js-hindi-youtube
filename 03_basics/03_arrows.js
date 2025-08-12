const user = {
    username: "hitesh",
    price: 999,

    welcomemesssage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}
// user.welcomemesssage()
// user.username = "sam"
// user.welcomemesssage

// console.log(this);

// function chai(){
    // let username = "hitesh"
    // console.log(this.username);   
// }

// chai()

//const chai = function(){
    // let username = "hitesh"
    // console.log(this.username);   
// }


const chai = () => {
    let username = "hitesh"
    console.log(this.username);   
}

// chai()

// const addtwo = (num1, num2) => {
    // return num1 + num2
// }

// const addtwo = (num1, num2) =>  num1 + num2

// const addtwo = (num1, num2) =>  (num1 + num2)


const addtwo = (num1, num2) =>  {{username: "hitesh"}}


console.log(addtwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

