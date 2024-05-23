// singleton
//object.create

//object literals

const mySym =Symbol("key1")


const Jsuser = {
    name: "vikram",
    "full name": "vikram kumar",
    [mySym]: "mykey1", //important
    age: 18,
    location: "Bihar",
    email: "vikram@google.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]

    
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser.mySym);
console.log(typeof Jsuser.mySym);
console.log(Jsuser[mySym]);

Jsuser.email ="vikki@gmail.com"
//Object.freeze(Jsuser)
Jsuser.email ="vikrambgs@gmail.com"
console.log(Jsuser);

Jsuser.greeting =function(){
    console.log("Hello Js User");

}
Jsuser.greetingTwo =function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

