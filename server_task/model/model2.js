
const mongoose = require("mongoose")
const propertySchema=new mongoose.Schema({
    geo_location:{
        type:String,
    },
    configuration:{
        type:String,
        unique:true
    },
    amenities:{
        type:String,
       
    },
    availability:{
        type:String,
        
    },
    prices:{
        type:String,
      
    },
    photos:{
        type:String,
       
    }
})
console.log("Done")
const detail=new mongoose.model("property_detail",propertySchema)
module.exports=detail





