// learning promises



const promisesOne = new Promise(function (resolve, reject) {
  // do an async task
  //Db calls , cryptography, network
  setTimeout(() => {
    console.log("asyn task is complete");
    resolve();
  }, 1000);
});

promisesOne.then(function () {
  console.log("promse consumed");
});




new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("aysnc task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("aysc 2 resolved");
});




const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({
      username: "vikash",
      email: "ghohdo@gmail.com",
    });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});



const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({
        username: "vikash",
        password: "123",
      });
    } else {
      reject("ERROR:something went worng");
    }
  }, 1000);
});


promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  }).finally(()=> console.log('the promise is either resolve or rejected'))


  // async function 


  async function getalUser(){
 
 try {
    const response= await  fetch('https://api.github.com/users/vikashage21')
 const data = await response.json()
 console.log(data)
 } catch (error) {

    console.log('E:', error )
    
 }
  }
  getalUser()


  //  fetch

  const url ='https://api.github.com/users/vikashage21'
  fetch(url).then((response)=>{
    return response.json()
  }).then((data)=>{
console.log()
  }).catch((error)=>{
    console.log('E:',error)
  })