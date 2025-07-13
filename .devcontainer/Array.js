//array

const myArray = [1, 2, 3, 4, 5];
const myHero = ["Ironman", "Captain"];
console.log(myHero[1]);
console.log(myArray[0]);

const myarray2 = new Array(2, 3, 4, 5);
console.log(myarray2[3]);

//Array Method

myArray.push(6);
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.unshift(9);
console.log(myArray);

myArray.shift();
console.log(myArray);

console.log(myArray.includes(9));
console.log(myArray.includes(5));

console.log(myArray.indexOf(5));

const newArr=myArray.join();
console.log(myArray);
console.log( newArr);

//Slice or splice(Important)

console.log("A",myArray);
const myarr1=myArray.slice(1,3);
console.log(myarr1);
console.log("B",myArray);


const myarr2=myArray.splice(1,3);
console.log(myarr2);
console.log("C",myArray);

