// if

//if(condition){

//}

const isUserloggedIn = true
const temperature = 41

// if(temperature === 40){
//     console.log("less than 50");

// }
// else{

//     console.log("temperature is greater tan 50")
// }

// console.log("Execute")

//<, >, <=, ==, !=, ===

// const score = 200

// if(score > 100){
//     const power ="fly" // agar yaha var keyword use krenge to neeche error nhi aayega
//     console.log(`User power:  ${power}`);
// }

//console.log(`User power:  ${power}`); // ye error dega kyonki ye scope se bahar hai

//const balance = 1000

//if(balance>500) console.log("test"),console.log("test2");
//ye code run hoga lekin aise code nho krna hai


// if(balance < 500){
//     console.log("less than 500");
// }else if (balance < 750){
//     console.log("less than 750");

// }else if (balance < 900){
//     console.log("less than 900");

// }else{
//     console.log("less than 1200");
// }



const userLoggedIn = true
const debitCard =true
const loggedInFromGoogle = false
const loggedInFromEmail =true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");

}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}