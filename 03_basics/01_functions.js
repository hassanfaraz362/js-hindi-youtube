function saymyname(){
// console.log("h");
// console.log("a");
// console.log("s");
// console.log("s");
// console.log("a");
// console.log("n");
}

// saymyname()

// function addthenumber(num1, num2) {
    // console.log(num1 + num2);  
// }

function addthenumber(num1, num2){

    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addthenumber(3, 5)

// console.log("Result", result)


function loginuserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginuserMessage("hitesh"));
// console.log(loginuserMessage("hassan"));

function calculatecartprice(val1, val2, ...numb1){
    return numb1
}

// console.log(calculatecartprice(200, 500, 300, 500));

const user = {
    username: "hassan",
    price: 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user)
handleobject({
    username: "sam",
    price: 399
})

const mynewarray = [200, 400, 100, 600]

function returnsecondvalue(getArray){
    return getArray[1]
}

// console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([200, 400, 100, 600]));
