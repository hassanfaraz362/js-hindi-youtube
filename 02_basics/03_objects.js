// Singleton
// object.create

// Object Literals

const mysym = Symbol("key1")


const JsUser = {
    name: "hassan",
    "full name": "hassan khan",
    [mysym]: "key1",
    age: 18,
    location: "jaipur",
    email: "hassan@gmail.com",
    isloggedin: false,
    lastlogindays: ["Monday", "saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);

JsUser.email = "hassanking@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "miku@gmail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");
    
}
JsUser.greetingtwo = function(){
    console.log(`hello js user,${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());