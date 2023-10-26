

// fetching the data form server




const url ="https://type.fit/api/quotes"



fetch(url).then((response)=>{
    return response.json()
}).then((data)=>{
    
    const quotes = document.querySelector("#quotes")
 const button = document.querySelector('#next')
   
 let random = Math.floor(Math.random()*data.length)

    quotes.innerHTML=`
    ${data[random].text} :- AUTHOR ${data[random].author}

    `

    button.addEventListener('click', function(e){

        random = Math.floor(Math.random()*data.length)
       quotes.innerHTML=`
    ${data[random+1].text} :- AUTHOR ${data[random+1].author}

    ` 
    })
    











}).catch((error)=>{
    console.log(error)
})

