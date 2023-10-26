const input = document.querySelector('input')

const btn = document.querySelector('button')
const listcontainer = document.querySelector('#list-container')

btn.addEventListener('click', function(e){

    if(input.value==''){
        alert('you must write something?')
    }
    else{
        const li = document.createElement('li')
    li.innerHTML=` &#9873 ${input.value}`
    listcontainer.appendChild(li)

    let span = document.createElement('span')
    span.id="cancel"
    li.className="notesData"
    span.innerHTML="&#9747"
    li.appendChild(span)
    }
    
input.value=''
saveData();
})


listcontainer.addEventListener('click', function (e){
    if (e.target.tagName=='SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
})


function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML)
}

function showList (){
    listcontainer.innerHTML = localStorage.getItem("data")
}
showList ()