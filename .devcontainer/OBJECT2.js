//Part 2 of Object

const tinder=new Object()//singleton object
tinder.id=123445
tinder.name="Prabhat"
tinder.isLoggedIn=false
console.log(tinder);

const regularUser={
    email:"some@gmail.com",
    fullname:{
       userfullname:{
        firstname:"prabhat",
        lastname:"Kumar",
       }
    }
}

console.log(regularUser.fullname.userfullname);

const obj={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
// const obj3={obj,obj2};
const obj3=Object.assign({},obj,obj2);
console.log(obj3);

const users=[
    {
    id:1,
    email:"Prabhat@gmail.com",
},
 {
    id:1,
    email:"Prabhat@gmail.com",
},
 {
    id:1,
    email:"Prabhat@gmail.com",
}
]
users[1].email;
console.log(tinder);

console.log(Object.keys(tinder));//Important
console.log(Object.values(tinder));
console.log(Object.entries(tinder));
console.log(tinder.hasOwnProperty('isLoggedIn'));