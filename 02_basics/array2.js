// learning more about arrays

let heros=['batman','superman','spiderman'];

let dcHeroes=['flash','ironman','antman'];

// methods

// array.push()
// array.concat()
//...
//array.flat()
// Array.isArray('value')
//Array.from('value)
// Array.of('set of elements')


// heros.push(dcHeroes);// it will insert the data inside the array a new array;

console.log(heros) 
// let all_heroes = heros.concat(dcHeroes); // we have asgin a new variables 

// console.log(all_heroes)

let all_heroes=[...heros,...dcHeroes];
console.log(all_heroes)

let arrNew=[1,2,3,[2,3,4],5,6,7,[5,69,4]]
let userable_arr=arrNew.flat(Infinity);
console.log(userable_arr)

let score1=100
let score2=200
let score3=300;

console.log(Array.of(score1,score2,score3)) // return new value.. 
