require('dotenv').config()

const exprees = require ('express')


const app = exprees()


const port = process.env.PORT

const path = require('path')

const staticPath = path.join(__dirname,'../public') 


app.use(exprees.static(staticPath))


app.get('/',(req,res)=>{
    res.send('hello world')
})


app.listen(port,()=>{

    console.log(`listening on port ${port}`)
})