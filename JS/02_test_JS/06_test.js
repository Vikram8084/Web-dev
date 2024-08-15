//function can take another function as input
//this will confuse you(callback)

function sum(num1, num2, fnToCall){
    let result = num1 + num2;
    //return result;
    fnToCall(result);
}

function displayResult(data){
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data){
    console.log("Sum's result is : " + data);
}
//you are only allowed to call one function after this 
// how will you displayResult of a sum

const ans = sum(1, 2, displayResult);
//displayResult(ans);