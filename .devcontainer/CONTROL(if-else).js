

// if else
temprature = 25;
if (temprature === 10) {
    console.log("It's hot outside!");

} else {
    console.log("It's not too hot outside.");
}
//<,>,<=,>=,==,!=,===,!==


// if else with multiple conditions
const score = 200;
if (score > 100) {
    console.log("You win a prize!");
} else if (score > 50) {
    console.log("You win a consolation prize!");
}
//// if else with multiple conditions and logical operators
const balance = 1000;
if (balance >= 1000) {
    console.log("You are eligible for a loan.");
} else if (balance >= 500) {
    console.log("You are eligible for a small loan.");
} else {
    console.log("You are not eligible for a loan.");
}

// if else with logical operators
const userisLoggedIn = true;
const debitCardBalance = true;
const userisLoggedInwithgoogle=false;
const userisLoggedInwithfacebook=true;
if (userisLoggedIn && debitCardBalance) {
    console.log("You can make a purchase.");
}else if (userisLoggedIn && !debitCardBalance) {
    console.log("You need to add funds to your debit card.");
} else {
    console.log("Please log in to make a purchase.");
}

// if else with logical operators and multiple conditions
if (userisLoggedInwithgoogle || userisLoggedInwithfacebook) {
    console.log("You are logged in with Google or Facebook.");
}else if (userisLoggedInwithgoogle && userisLoggedInwithfacebook) {
    console.log("You are logged in with both Google and Facebook.");
} else {
    console.log("You are not logged in with Google or Facebook.");
}

