const useremail = []

if (useremail){
    console.log("got user email");
}else{
    console.log("dont have user email");
}

// falsy value

// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// "0", "false", " ", [], {}, function(){}

// if (useremail.length === 0){
    // console.log("array is empty");
// }

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
    
}

// Nullish Coalescing operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? undefined
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 12




console.log(val1);

// Ternary Operator

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log
("more than 80");
