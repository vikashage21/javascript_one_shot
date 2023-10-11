// if
// if(condition){

// }
// < , > , = , == , <= , >= , === !=, !==


// switch condition in js

const month ="march"
switch ("march") {
    case "jan":
        console.log('janurary')
        break;
case "feb":
    console.log('feb')
    break;
    case "march":
        console.log('march')
        break;
    default:
        console.log('default')
        break;
}


// falsy values 

// false , 0 , -0, BigInt 0n, "",null,undefined,NaN

// truthy values

//"0",'false'," ",[],{},function(){}






const userEmail="vikash@gmail.com"


if(userEmail){
    console.log("got user email")
}else{
    console.log('dont have user email');

}


const emptyObj={
 name:"vikash"
}
if (Object.keys(emptyObj).length===0){
    console.log("object is empty")
}



const objKey= Object.keys(emptyObj)
console.log(emptyObj)



// nullish coalescing operator (??): null undefined
 let val1;
 // val1=5??10;
 val1= null ?? 10;
 console.log(val1)

// terniary operator


//  condition ? true : false 

const iceTeaPrice =100
iceTeaPrice >= 80 ? console.log('less than 80') : console.log('more than 80')