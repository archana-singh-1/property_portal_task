const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/detail')
.then(()=>{
    console.log("connect")
})
.catch(()=>{
    console.log("not connect")
})


const routingtaskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
console.log("Done")
const Register=new mongoose.model("register",routingtaskSchema)
module.exports=Register