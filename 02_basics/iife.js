 // Immediately invoked function expressions (iife)

 // gobal polutation se bacchne ke liye iife use hota hai .

(function chai(){
    // NAMED IIFE 
    
    console.log('welcome to my cafe , sir')
})(); // ---- com


((name)=>{
    console.log(` DB CONNETED SUCESSFULLY ${name}`);
})('vikash')