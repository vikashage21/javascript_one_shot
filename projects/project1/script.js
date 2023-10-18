// inzaling the value 

const greyBox=document.querySelector('.grey')
const whiteBox=document.querySelector('.white')
const blueBox=document.querySelector('.blue')
const yellowBox=document.querySelector('.yellow')

// inzaling the color value

const color=["grey","white","blue","yellow"]

// event 

greyBox.onclick=()=> (document.body.style.backgroundColor=color[0] )
whiteBox.onclick=()=> (document.body.style.backgroundColor=color[1] )
blueBox.onclick=()=> (document.body.style.backgroundColor=color[2] )
yellowBox.onclick=()=> (document.body.style.backgroundColor=color[3] )
