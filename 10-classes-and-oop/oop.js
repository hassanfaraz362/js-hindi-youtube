const user ={
    username : "hitesh",
    logincount :8,
    signedIn :true,

getUserDetails: function(){
    // console.log("Get user details from database");
    console.log(`Username: ${this.username}`)
    console.log(this)
}

}
// console.log(user.username)
console.log(user.getUserDetails)
console.log(this);



function User(username,loginCount, isloggedin){
    this.username = username
    this.loginCount = loginCount
    this.isloggedin = isloggedin

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }

    // return this
}


// when we use new keyword new empty object is created called instance
const userone = new user('hitesh, 12, true') // 
const usertwo = new user("chaiaurcode,11, false")
console.log(userone.constructor);
// console.log(usertwo);
