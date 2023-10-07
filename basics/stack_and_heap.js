// learning stack and heap in js


// stack(primitive), heap(non - primitive)

//stack -  copy data


let name="vikash kumar "
let anotherName=name;
anotherName="sunny deol";

console.log(name);
console.log(anotherName);

// heap memory reference type ----


let username={
    name:"vikash shamra",
    upi:"userib"
}
let  userName2=username;
userName2.name="sunny leaon";
 console.log(username);
 console.log(username.name);
 console.log(userName2.name);
