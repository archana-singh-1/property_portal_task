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



const propertySchema=new mongoose.Schema({
    geo_location:{
        type:String,
        required:true
    },
    configuration:{
        type:String,
        required:true,
        unique:true
    },
    amenities:{
        type:String,
        required:true
    },
    availability:{
        type:String,
        required:true
    },
    prices:{
        type:String,
        required:true
    },
    photos:{
        type:String,
        required:true
    }
})
console.log("Done")
const detail=new mongoose.model("property_detail",propertySchema)
module.exports=detail