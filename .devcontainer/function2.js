//Function 2

// function calculateAddCart(...num1){
//   return num1;
// }
// calculateAddCart(2);
// console.log(calculateAddCart(200,300,400));

function calculateAddCart(val1,val2,...num1){
  return num1;
}
calculateAddCart(2);
console.log(calculateAddCart(200,300,400));


const user={
    username:"prabhat",
    Price:199,
}
function handleObject(anyObject){
        console.log(`user name is ${anyObject.username} Price is${anyObject.Price}`);
}
handleObject(user);