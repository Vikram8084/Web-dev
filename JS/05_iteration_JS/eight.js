const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currentvalue) {
//     console.log(`accumulator: ${accumulator} and currentvalue: ${currentvalue}`);
//     return accumulator + currentvalue
// }, 0)

const myTotal = myNums.reduce( (accumulator, currentvalue) => accumulator + currentvalue, 0)

console.log(myTotal);

const shoppingCart = [
    {
    itemName: "js course",
    price: 2999
},
    {
    itemName: "py course",
    price: 999
},
    {
    itemName: "mobile dev course",
    price: 5999
},
    {
    itemName: "datascience",
    price: 12999
},
    

]

const priceToPay = shoppingCart.reduce( (acc, item) => (acc + item.price),0)
console.log(priceToPay);