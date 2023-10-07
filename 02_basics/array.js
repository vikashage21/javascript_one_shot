// learning arrays in js

const arr= [0,5,6,4];

console.log(arr[2])

const heros=['batman','superman','deadpool']

console.log(heros[2])

const country=new Array('pakistan','india','shri lanka');

console.log(country[0]);

console.log(country.length);

arr.push(6)

console.log(arr);
// method

// push() adding new values  from array 

//pop() removing last values from array 

// unshift()  inserting form first 

// shift()

// sclie() chop the data from array 

//splice() chop the data and return but it will change your original  data as well 

//join() convert array to string 
//.inculdes
//.indexof('value')





// let newArr=[{
//     name:"vikash",
//     class:"bca"
// }]

// newArr.push({name:"mohan",class:"iit"});
// console.log(newArr);

// newArr.unshift({
//     name:"gulshan",
//     class:"bba"
// })

// console.log(newArr)

// newArr.pop(newArr[2])

// newArr.shift()

// console.log(newArr)


// newArr.shift()

// console.log(newArr)
// let arrString= newArr[1]


// console.log( arrString)

// console.log(arrString.includes('vikash'))
// console.log(arrString);
// console.log(newArr)

// let newArr=[0,2,3]
// console.log(newArr.slice(0,2))
// console.log(newArr)
// console.log(newArr.splice(0,2))
// console.log(newArr); // the original data of array has been change .


// let arrNew=[{
//     name:'rohit'
// }]

// arrNew.push({
//     name:"sonali kumari"
// })
// console.log(arrNew[0].name.includes('rohit'))

// let sliceValue = arrNew.slice(0,1)
// console.log(sliceValue)

// console.log(arrNew)

// searching algo 


const album =[{
    artist:"yo yo honey shing",
    song:"bule eyes"
},
{
artist:"mc stan",
song:"giraffaar"
},{
artist:"raftaar",
song:"all balck"
},{
    artist:"badshaa",
    song:"noughty shaiyaa"
}]


function search (arr , word) {
    for (let i = 0; i < arr.length; i++) {
        let result= arr[i].artist.includes(word)
        
            if(result==true){
                console.log(arr[i])
                console.log(i);
                break;
            }else{
                console.log('error')
            }
        } 
}

search(album,'mc stan')

