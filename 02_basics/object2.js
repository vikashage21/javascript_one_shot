// learning more about objects .


let obj2={
1:'a'
}
let obj3={
2:'b'
}
let obj4={
    3:'b'
    }

    let all_obj=Object.assign({},obj2,obj3,obj4) // targeted object and source object 
    console.log(all_obj)
    console.log(Object.keys(obj2))
    console.log(Object.values(obj2))
    console.log(Object.entries(obj2))
    console.log(obj2.hasOwnProperty('email'))


    const user={

        name:'vikash',
        phone:555555
    }

    // destructuring of object 
    
const {name}=user;  // {name: username}=user; 
console.log(name)