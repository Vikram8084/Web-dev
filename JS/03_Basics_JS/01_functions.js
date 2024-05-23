// console.log("v");
// console.log("i");
// console.log("k");
// console.log("r");
// console.log("a");
// console.log("m");



function sayMyName(){ //syntax hai
console.log("v");
console.log("i");
console.log("k");
console.log("r");
console.log("a");
console.log("m");

}
//sayMyName   ->ye hai reference

//sayMyName()   ->isse function ka execution hota hai



// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);

// }

function addTwoNumbers(number1, number2){
   //let result =number1 + number2
   //return result
   return number1 + number2
}

addTwoNumbers(3,4)

//jab function mnate hai tab parameter lete hai
// jab function call krte hai tab argument dete hai

const result =addTwoNumbers(3,5)

console.log("Result:", result);


function loginUserMessage(username){
    //syntax of if else
    if(username === undefined){ //undefined ka matlab false hai (!username)
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in`

}

//console.log(loginUserMessage("vikram"));

console.log(loginUserMessage()) //argument pass nhi krenge to undefined aayega

console.log(loginUserMessage(""))

function calculateCartPrice(...num1){  //... rest operator  sare bind krta hai aur array form me data deta hai
    return num1

}
//console.log(calculateCartPrice(200, 300, 500))

function calculateCartP(value1, value2,...num1){
    return num1
}

//console.log(calculateCartP(200, 400, 500, 2000))

const user ={
    username: "vikram",
    price: 199

}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.calculateCartPrice}`);
}

//handleObject(user)

handleObject({
    username: "sam",
    price: 399
})


const myNewArray =[200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]

}

//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 1000]));
