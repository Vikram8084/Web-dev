// for loop

for (let i= 0; i< 10 ; i++) {
    const element = i;
    if(element == 5){
        //console.log("5 is the best number");
    }

    //console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value:  ${i}`);

    for (let j = 0; j <= 10; j++) {

        //console.log(`Inner loop value: ${j} And Inner loop ${i}`);

        //console.log(i + '*' + j  + '=' + j*i);
    
        
    }

    
}

let myArray =["flash", "batman", "superman" ]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

for (let index = 1; index <= 20; index++) {
    //const element = array[index];
    if(index == 5){
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${index}`);

    
}

//  continue

for (let index = 1; index <= 20; index++) {
    //const element = array[index];
    if(index == 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);

    
}