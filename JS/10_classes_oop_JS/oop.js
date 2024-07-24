const user = {
    username: "vikram",
    loginCount: 8,
    signedIn: true,


    getUserDetails: function(){
        //console.log("got user details from database");
        //console.log(`username: ${this.username}`)
        //console.log(this);
    }
}

//console.log(user.username)

//console.log(user.getUserDetails());
//console.log(this)





function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this//nhi bhi likhenge to v implicitily use hoga

}

const userOne =new User("Vikram", 12,true);
const userTwo =new User("Hitesh",22, true);
console.log(userOne);
console.log(userTwo);