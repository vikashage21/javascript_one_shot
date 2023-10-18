
const container= document.querySelector('.container')
setInterval(() => {
    const date = new Date()
 const hours= date.getHours()
      const min= date.getMinutes()
     const sec= date.getSeconds()
     const textNode=`${hours} : ${min } :  ${sec}`
   container.innerHTML= textNode;

    
}, (1000));



