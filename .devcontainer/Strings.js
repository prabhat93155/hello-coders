const name=" prabhat "
const score=30

console.log(`My name is ${name} My score is ${score}`);

const game=new String('  Prabhat Kumar  ');
console.log(game[0]);
console.log(game.__proto__);

console.log(game.length);
console.log(game.toLowerCase());
console.log(game.toLocaleUpperCase());
console.log(game.charAt(5));
console.log(game.indexOf('t'));

const NewString=game.substring(0,4);
console.log(NewString);

const anotherstring=game.slice(-12,4);
console.log(anotherstring);

const newStringone="  Prabhat  ";
console.log(newStringone.trim());

const url = "http://prabhat.com";
console.log(url.replace("pabhat", "Prabhat Kumar")); 
console.log(url.includes("prabhat"));

console.log(game.split("_"));
