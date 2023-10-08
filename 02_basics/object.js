// learning about objects in js;

const mySym= Symbol("key1")

let user={
    name:"vikash sharma",
    email:"vk220783@gmal.com",
    [mySym]:"mykey1",
    city:"bihar",
    isLogIN:true
}

console.log(user.name);
console.log(user["name"]) // its store the data like string ..

user.name="mohon"
console.log(user);

// Object.freeze(user) // now the object is freeze you can't change any data of object 
// user.name="rohit "
// console.log(user);

user.greeting= function () {
    console.log('hello Js user');
    
}

console.log(user.greeting())


user.greeting2= function () {
    console.log(`hello  Js user ${this.name}`);
    
}
console.log(user.greeting2())

console.log(user[mySym]);
console.log(user) // showing symbol key 

