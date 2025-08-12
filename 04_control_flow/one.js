// If

// const isuserloggedin = true
// const temperature = 50

// if (temperature < 50){
    // console.log("temp is less than 50");
    
// }else{
// console.log("not less than 50");
// }
// console.log("executed");


// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score<100){
    // let power = "fly"
    // console.log(`my power = ${power}`);
    
// }
// console.log(`my power = ${power}`);

// const balance = 1000

// if (balance <1000) console.log("test") , console.log("test2");
// if (balance < 500){
    // console.log('less 500');
    
// }else if (balance< 750){
    // console.log("less than 750");
    
// }
// else if(balance < 900){
    // console.log("less 900");
    
// }else{
    // console.log("less than 1200");
    
// }

const userloggedIn = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true

if (userloggedIn && debitcard){
    console.log("Allow user for shopping");
    
}

if (loggedinfromgoogle || loggedinfromemail){
    console.log("user logged in");
    
}
