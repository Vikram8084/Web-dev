// let a= 10
// const b = 20
// var c =30

//var c =300
let a = 300

if(true){
    let a= 10
    const b = 20
    //var c =30
    //c =30
    //console.log("Inner:" , a);

}

// for(let i = 0; i< Array.length;i++){
//     const element =array[i];
// }

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username ="hitesh"

    function two(){
        const website ="youtube"
        console.log(username);
    }
    //console.log(website);

    two()

}

//one()

if (true){
    const username ="hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        //console.log(username + website); // ye combine kar ke answer dega
    }
    //console.log(website);  //error aayega kyoki ye apne scope se bahar hai
}

//console.log(username); // yaha bhi error aayega kyonki ye bhi apne scope se bahar hai


// ++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num){
    return num + 1

}

//addone(5)


//addTwo(5) // yaha error dega kyonki yaha declare bhi kr chuke hai
const addTwo = function(num){
    return num + 2

}

