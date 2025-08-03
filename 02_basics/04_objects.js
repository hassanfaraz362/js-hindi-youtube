// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hassan",
            lastname: "khan"
        }

    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3:"a", 4: "b"}

// const obj3 = { obj1, obj2}
// const obj3 =Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        name: "ajmal",
        email: "h@gmail.com"
    },
    {

    },
    {

    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isloggedin"));


const course = {
    coursename: "js in hindi",
    price: 999,
    courseinstructor: "hitesh"
}

// course.courseinstructor

const {courseinstructor: instructor} = course

// console.log(courseinstructor);
console.log(instructor);

// {
    // "name": "hitesh",
    // "coursename": "js in hindi",
    // "price": "free"
// }

[
    {},
    {},
    {}
]
