const name = "vikash";
const repotCount =50
console.log(name + repotCount +  "value")


// mordern way to declear the string 

// string methods

// toUpperCase()
//tolowwerCase()
//charAt()
//indexOf()
// slice
// trim()
// replace()
//includes()
//split()


let url ="www.vikashsharma.com"

console.log(`hello my name is ${name} and my repo count is ${repotCount}`);

const gameName = new String ('vikash');

console.log(gameName[0])
console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));
const newName=gameName.substring(0,4);
console.log(newName)
console.log(gameName.slice(0,-4));// we can asign negtivie value inside slice .

const newString = "    vikash   ";
console.log(newString)

console.log(newString.trim())
console.log(url.replace('.','_'));
console.log(url.includes('.com'));
console.log(url.split('.'));
console.log(url.search('w')) // search for first value and if the value do'nt match then its return -1
// The code below creates an HTML string and then replaces the document's body with it:
console.log(gameName.fontcolor("red"))