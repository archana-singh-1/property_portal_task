const express=require("express")

const mongoose=require("mongoose")

const router=require('./router/router')
const app=express()

const cors = require('cors');
const path = require('path');
const multer = require('multer');

app.use(cors());
app.use(express.static("public"));
app.use(express.json())
app.use(cors());

app.use ("/",router)

app.listen(4000,()=>console.log('Listening to the port..'))