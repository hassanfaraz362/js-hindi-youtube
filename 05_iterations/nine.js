const mynums = [1,2,3]

// const mytotal = mynums.reduce(function(acc, curval) {
    // console.log(`acc: ${acc} and curval: ${curval}`);
    // return acc + curval
// }, 0)

const myTotal = mynums.reduce( (acc,curval) => acc + curval, 0)

console.log(myTotal);


const shoppingcart = [
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"py course",
        price: 999
    },
    {
        itemName:"mob dev course",
        price: 5999
    },
    {
        itemName:"data science course",
        price: 12999
    },

]

const pricetopay = shoppingcart.reduce((acc, item) => acc + item.price, 0)

console.log(pricetopay);
