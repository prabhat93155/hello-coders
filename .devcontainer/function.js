//Function


function sayMyName(){
console.log("P");
console.log("R");
console.log("A");
console.log("B");
console.log("H");
console.log("A");
console.log("T");
}
sayMyName();

// function addTwoNumber(number1,number2){
//     console.log(number1+number2)
// }
// const result=addTwoNumber(3,4);
// console.log("result",result);


// function addTwoNumber(number1,number2){
//    let result=number1+number2;
//    return result;
// }
// const result=addTwoNumber(3,4);
// console.log("result",result);


function addTwoNumber(number1,number2){
   
   return number1+number2;
}
const result=addTwoNumber(3,4);
// console.log("result",result);

function loginUserMesssage(username){
    if(username===undefined){
        console.log("Please enter a username");
        return ;
    }
     return `${username} just logged in`
}
console.log(loginUserMesssage("Prabhat"));
console.log(loginUserMesssage());