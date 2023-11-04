const Register=require('../model/model.js')
const PropertyDetail = require('../model/model2');

const jwt=require("jsonwebtoken")
// const bcrypt=require("bcrypt")
const express  = require('express')
// const app = express()
// const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const app = express();

app.use(cors());
app.use(express.static("public"));
signup= async(req,res)=>{
    try{

        const reactRegister=new Register({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        const result= await reactRegister.save();
        res.send({message:"signup sucssesfully",result:result})
        console.log(result);

    }catch(err){
        res.send({message:'Email id already exits!'})
        console.log('')
    }
}

login = async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;

      const result = await Register.findOne({ email: email });

      if (!result) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      if (result.password !== password) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const token = jwt.sign({ id: result._id }, "aayushisharma", { expiresIn: "8h" });

      res.status(200).json({ message: "Login successful", result: result, token: token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }


get_data =async(req,res)=>{
  try{
    const allData = await Register.find({})
    res.send({
      message:"All post",
      user:allData
    })
  }catch(err){
    res.send({
      message:"post data not found",
      error:err
    })
  }

}  





const post_property= async (req, res) => {
  try {
    
    const imageUrl = `http://localhost:4000/uploads/${req.file.filename}`;
    const image = new PropertyDetail({ 
      // url: imageUrl,
      geo_location: req.body.geo_location,
      configuration: req.body.configuration,
      amenities: req.body.amenities,
      availability: req.body.availability,
      prices: req.body.prices,
      photos: imageUrl, 
    });
    await image.save();
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.json({ success: false, error: err });
  }
};

get_property =async(req,res)=>{
  try{
    const allData = await PropertyDetail.find({})
    res.send({
      message:"All post",
      user:allData
    })
  }catch(err){
    res.send({
      message:"post data not found",
      error:err
    })
  }

}  








module.exports = { signup,login,get_data,post_property,get_property};











