require('./src/config/db.config')
const express =require('express')
const bodyParser = require("body-parser");
const router=require('./src')
const app=express()

app.use(bodyParser.json());
app.use('/api/v1',router)

app.listen(3000,()=>{
    console.log('server starts at 3000')
})
