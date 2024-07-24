const user ={
    username: "vikram",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, WElcome to website`)
        console.log(this);

    }


}
//  user.welcomeMessage()
//  user.username ="sam"
//  user.welcomeMessage()

//console.log(this);//empty aata hai

// function chai(){
//     let username = "vikram"
//     console.log(this);

// }

// chai()


// const chai = function(){
//     let username = "vikram"
//     console.log(this.username); //undefined aayega

// }

//chai()

const chai = () => {
    let username = "vikram"
    //console.log(this.username);
    console.log(this);

}

//chai()

// const addTwo = (num1, num2) =>{
//     return num1 + num2

// }

// const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "vikram"})

console.log(addTwo(3, 4));

const myArray =[2, 3, 4, 5]