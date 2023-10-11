const user={
    username:"vikash",
    price:199,
    welcomeMessage:function(){
         console.log(`${this.username} , welcome to website`)
    }
}



user.welcomeMessage()


function chai(){
 let username="vikash";
 console.log(this.username)
 // it is only work in object ..

}
chai()



const addTwo = (num1,num2)=> (num1+num2)
 console.log(addTwo(2,3))