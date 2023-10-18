function addLanguage(language) {
    const ul = document.querySelector('ul')
    const li =document.createElement('li')
    const textNode= document.createTextNode=language;
    li.textContent=textNode;
    ul.appendChild(li)
}

addLanguage('ruby');

// replaceWith()
// outerHTML()
// remove()