//Most Important
//SingleTon

//object literals

const mysym= Symbol("key1");//Important
const jsuser={
    name:"Prabhat",
    [mysym]:"mykey1",//Important
    age:21,
    location:"delhi",
    email:"Prabhat@gmail.com",
    isLoggedIn:false,
    lastloginDays:["monday","saturday"],
}
console.log(jsuser.name);
console.log(jsuser[mysym]);
console.log(typeof mysym);

jsuser.email="Prabhatkum@chatgpt.com";
// Object.freeze(jsuser);
jsuser.email="Prabhatkum@chat2gpt.com";
console.log(jsuser.email);

jsuser.greeting=function(){
    console.log("hello user");
}
console.log(jsuser.greeting());

jsuser.greeting2=function(){
    console.log(`hello user,${this.name}`);
}
console.log(jsuser.greeting2());