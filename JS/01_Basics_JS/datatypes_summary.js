// Primitive

// 7 types : String, Number, Boolean,Null, Undefined,Symbol,BigInt

const score = 100
const scoreValue =100.3

const isLoggedIn =false
const outsideTemp =null
let userEmail;

const id =Symbol('123')
const anotherId=Symbol('123')

console.log(id == anotherId);

const bigNumber =3432433455433333n


// Reference (Non primitive)

//Array, Objects,Function


const heros =["shaktiman","naagraj","doga"]
let myObj ={
    name:"vikram",
    age:21,
}


const myFunction =function(){
    console.log("Hello World");

}

console.log(typeof bigNumber);
console.log(typeof scoreValue);
console.log(typeof myFunction);

//********************************************************************************** 

//Stack (Primitive), Heap (Non-Primitive)

let myYoutubename="vikramdotcom"

let anothername =myYoutubename
anothername ="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo =userOne

userTwo.email ="vikram@google.com"

console.log(userOne.email);
console.log(userTwo.email);