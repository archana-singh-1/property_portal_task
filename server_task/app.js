const express=require("express")

const mongoose=require("mongoose")

const router=require('./router/router')
const cors = require('cors');


const app=express()

app.use(express.json())
app.use(cors());

app.use ("/",router)

app.listen(4000,()=>console.log('Listening to the port..'))