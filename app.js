const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDb = require('./db/connect');
const expressLayouts = require('express-ejs-layouts')
require('dotenv').config()

// middlewares

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(expressLayouts)
app.use(express.static('./public'))
app.set('view engine','ejs')
app.set('layout','./layouts/template')
app.use('/api/v1/tasks',tasks)

app.get('/',(req,res)=>{
    res.send('Task manager app');``
})

 

const start = async()=>{
    try {
        await connectDb(process.env.MONGO_URI)
        console.log("db started");
        app.listen(5000,console.log('server is running..'));
    } catch (error) {
        console.log(error);
    }

}  

 
 start()
