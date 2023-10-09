// learning more about functions in js


function calculateCartPrice(...price) {
return price
}


console.log(calculateCartPrice(455,456,555))





const user={
    username:"vikash",
    price:199
}

// handling object in function


function  handelObjects(anyObject) {
    console.log(` user is ${anyObject.username} and you have pay ${anyObject.price}`)
}
// handelObjects(user)



handelObjects({
    username:"mohan ",
    price:555
})

let myNewArray=[445,55,55]

function  ReturnSecondValule(arr) {
    return arr[1]
    
}

console.log(ReturnSecondValule(myNewArray))
