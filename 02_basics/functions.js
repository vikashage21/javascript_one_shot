// learning functions in js


function  sayMyName(params) {
    console.log('hell0 vikash')
}
sayMyName()
// sayMyName-- reference 


// function addTwoNumber(num1,num2) {
//    console.log(num1+num2);
// }


function addTwoNumber(num1,num2) {
   let result = num1+num2;
   console.log(' reachable code'); 

   return result;
   console.log('not reachable code'); 
}


const result= addTwoNumber(2,4)

console.log('result:',result)



// addTwoNumber(3,3)


function username(username = "Random User") {
    if(!username){
        console.log('enter your valid name')
        return
    }
    return  `${username} just logged in `


    }

    console.log(username("vikash "))