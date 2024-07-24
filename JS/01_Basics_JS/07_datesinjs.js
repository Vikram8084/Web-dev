// Dates 

let myDate =new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate);


//let myCreatedDate =new Date(2024, 0, 24);
//let myCreatedDate =new Date(2024, 0, 22, 5, 3)
let myCreatedDate =new Date("2024-01-24")
//console.log(myCreatedDate.toDateString());// months 0 se start hota hai javascript me
//console.log(myCreatedDate.toLocaleString());

//timestamp is used for polling to find which one give the answer fastest

let myTimeStamp =Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now());// the time is in millisecond so to convert it into second we have to divide by 1000
console.log(Math.floor(Date.now()/1000));

let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()}vand the time `

newDate.toLocaleString('default',{
    weekday:"long"
    
})