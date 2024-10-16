const express = require("express")
const app = express()
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const {interviewRouter} = require('./routes/interviewRoute')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(
  cors({
    origin:'http://localhost:5173',
    credentials:true
  })
)
  

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
        console.log('db connected');
    })
.catch((error)=>{
        console.log(error);
    })
app.use('/api',interviewRouter)

const PORT = process.env.PORT||8000 
const server = app.listen(PORT,()=>console.log(`Server is running on port: ${PORT}`))