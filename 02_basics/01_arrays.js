// array

const myArr = [0,1,2,3,4,5]
const myHeros = ["shakhtiman", "naagraj"]

const newarr = new Array(1,2,3,4)
console.log(myArr[0]);

// Array Methods

// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf());

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);


// Slice, Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
