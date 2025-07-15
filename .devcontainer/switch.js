
const month = 3;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  default:
    console.log("Invalid month");
    break;
}


const userEmail = "Prabhat";
if (userEmail) {
  console.log("Email is present");
} else {
  console.log("Email is not present");
}

// falsey values
//false,0,"",null,undefined,NaN,-0,BigInt 0n;

//truthy values
// "0", " ", [], {}, true, BigInt 1n, -1,'false', 'true', '1', 'null', 'undefined', 'NaN'

// Check if a variable is truthy or falsy
if (userEmail.length === 0) {
  console.log("Email is present");
} else {
  console.log("Email is not present");
}



// Check if an object is empty
const emptyOnject = {};
if (Object.keys(emptyOnject).length === 0) {
  console.log("Object is empty");
} else {
  console.log("Object is not empty");
}


//nullish coalescing operator

let val1;
val1 = 5 ?? 10; // Output: 5
val1 = null ?? 10; // Output: 10
val1 = undefined ?? 10; // Output: 10
val1 = 0 ?? 10; // Output: 0
val1 = "" ?? 10; // Output: ""
val1 = false ?? 10; // Output: false
console.log(val1); // Output: Default Value




//ternary operator
//condition ? expressionIfTrue : expressionIfFalse
const age = 18; 
const canVote = age >= 18 ? "You can vote" : "You cannot vote";
console.log(canVote); // Output: You can vote