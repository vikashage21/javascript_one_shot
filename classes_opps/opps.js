// const user={
// username:"vikash",
// loginCount:8,
// signedIN:true,
// getUserDetails: function (){
//     // console.log('got user details for database')
//     // console.log(this.signedIN)
//     console.log(this)
// }


// }
// // console.log(user.getUserDetails())

// console.log(user.username)


function user (userName, loginCount, isloggedIn){
this.userName=userName
this.loginCount=loginCount
this.isloggedIn=isloggedIn
return this

}

const userOne= new user('vikash ',12,true)
const userTwo= new user('hitesh ',12,true)

console.log(userOne
    )
console.log(userTwo)
