const myNumber=[1,2,3,4,5,6,7,8,9,10]
// const newNum= myNumber.map((num)=> num+10)

// chaining of methods 

const newNum= myNumber.map((num)=> num+10).map((num)=>num+1).filter((num)=> num>=20)

console.log(newNum);

// {
//     return
// }

