//Date

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.getHours());
console.log(myDate.getMonth());
console.log(myDate.getFullYear());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

// let myCreateDate = new Date(2023,0,23);

// let myCreateDate = new Date(2023,0,23,5,3);
// console.log(myCreateDate.toLocaleString());


let myCreateDate = new Date("2023-01-14");
console.log(myCreateDate.toLocaleString());

let myTimeStamp= Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
    
})