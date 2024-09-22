const express = require("express")
const app = express()
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
        console.log('db connected');
    })
.catch((error)=>{
        console.log(error);
    })

const PORT = process.env.PORT||8000 
const server = app.listen(PORT,()=>console.log(`Server is running on port: ${PORT}`))