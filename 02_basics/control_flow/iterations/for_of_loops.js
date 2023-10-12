// for of 

const arr =[1,2,3,4]


for (const val of arr) {
    console.log(val)
    
}

 const greeting ="hello world"
 for (const greet of greeting) {
    // console.log(`each char is ${greet}`)
 }



 // maps
 const map = new Map()

map.set('In','india')
map.set('fr','france');
// console.log(map)
for (const [key,value] of map) {
    console.log(key +':-' + value)
    
}

// const myOBject ={
//     name:'vikash',
//     userPassword:"vikash2555o"
// } 

// for (const [key,value] of myOBject) {

//     console.log(key, value)
    
// }
