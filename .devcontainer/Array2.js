//Array2

const Marvel=["Thor","ironmen","Hulk"];
const DC=["superman","flash","batman"];
Marvel.push(DC);
// console.log(Marvel);
// console.log(DC);
console.log(Marvel[2]);

//Concat
Marvel.concat(DC);
console.log(Marvel);

// const allhero=Marvel.concat(DC);
// console.log(allhero);


const allnewhero=[...Marvel,...DC];
console.log(allnewhero);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realanotherarray= another_array.flat(Infinity);
console.log(realanotherarray);

console.log(Array.isArray("prabhat"));
console.log(Array.from("Prabhat"));
console.log(Array.from({name:"Prabhat"}))//important

let score=100;
let score2=200;
let score3=300;

console.log(Array.of(score,score2,score3));