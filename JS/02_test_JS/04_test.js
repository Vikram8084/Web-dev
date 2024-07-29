const allUsers = [{
    firstName: "harkirat",
    gender: "male"
}, {
    firstName: "vikram",
    gender: "male"

}, {
    firstName: "priya",
    gender: "female"
}]

for(let i =0; i<allUsers.length; i++){
    if(allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["firstName"])
    }
}
// [1, 2, 3] arr[i]
//[{[]}] => arr[i]["gender"]
