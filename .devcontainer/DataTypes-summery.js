//Primitive
//7 Types : string,Number,Bollean,Null,undefined,Symbol,BigInt

const score=100;
const scoreview=100.3;

const isLoggedIn=false;
const outsideTemp=null;
let userEmail;
console.log(isLoggedIn);
console.log(outsideTemp);

const id =Symbol('123');
const anotherId=Symbol('123');
console.log(id === anotherId);

const bigNUmber=35236277182727261n;


//Reference Type 
//  non-Prmitive type : Array,Objects,Functions

const hero = ["Ironman","naagra","doga"]
let myobj={
    name:"Prabhat",
    age:21,
}

const myFunction=function(){
    console.log("hello Prabhat");
}

console.log(typeof bigNumber);

console.log(typeof myFunction);