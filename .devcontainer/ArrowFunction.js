// Arrow function with no parameters
const user = {
    name: "Prabhat",
    Price: "299",
    welcomeMessage: function () {
        console.log(`${this.name},Welcome to My Website`)
    }
}
user.welcomeMessage();
user.name = "sam";
user.welcomeMessage();

function one() {
    let username = "prabhat";
    console.log(this.username);
}
one();
// Arrow function with implicit this
const username = () => {
    let user = "prabhat"
    console.log(this)
}
username();

// Arrow function with explicit return
const college = (num1, num2) => {
    return num1 + num2;
}
console.log(college(10, 20));

// Arrow function with implicit return
const college1 = (num1, num2) => (num1 + num2);
console.log(college1(10, 20));