// const Register=require('../model/model.js')
// const jwt=require("jsonwebtoken")
// // const bcrypt=require("bcrypt")
// signup= async(req,res)=>{
//     try{

//         const reactRegister=new Register({
//             name:req.body.name,
//             email:req.body.email,
//             password:req.body.password
//         })
//         const result= await reactRegister.save();
//         res.send({message:"signup sucssesfully",result:result})
//         console.log(result);

//     }catch(err){
//         res.send({message:'Email id already exits!'})
//         console.log('')
//     }
// }

// login = async (req, res) => {
//     try {
//       const email = req.body.email;
//       const password = req.body.password;

//       const result = await Register.findOne({ email: email });

//       if (!result) {
//         return res.status(401).json({ message: "Invalid email or password" });
//       }

//       if (result.password !== password) {
//         return res.status(401).json({ message: "Invalid email or password" });
//       }

//       const token = jwt.sign({ id: result._id }, "aayushisharma", { expiresIn: "8h" });

//       res.status(200).json({ message: "Login successful", result: result, token: token });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: "Internal server error" });
//     }
//   };


// get_data =async(req,res)=>{
//   try{
//     const allData = await Register.find({})
//     res.send({
//       message:"All post",
//       user:allData
//     })
//   }catch(err){
//     res.send({
//       message:"post data not found",
//       error:err
//     })
//   }

// }  


// post_property = async(req, res) => {
//   try {
//       const data = {
//         geo_location:req.body.geo_location,
//         configuration:req.body.configuration,
//         amenities:req.body.amenities,
//         availability:req.body.availability,
//         prices:req.body.prices,
//         photos:req.body.photos
//       }
//       console.log(data);

//       const insertData = await Register.insertMany(data)
//       res.json({
//           message: 'New post Added',
//           data: insertData
//       })
//   } catch (err) {
//       console.log(err);
//       res.json({
//           message: 'post is not inserted sucessfully',
//           error: err

//       })
//   }
// }

//Try

// const Register = require('../model/model.js')
// const jwt = require("jsonwebtoken")
// const cors = require("cors")
// const { express } = require('express')
// const app = express()

// const path = request("path")
// app.use(cors())
// app.use(express.static("puclic"));


// signup = async (req, res) => {
//   try {

//     const reactRegister = new Register({
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password
//     })
//     const result = await reactRegister.save();
//     res.send({ message: "signup sucssesfully", result: result })
//     console.log(result);

//   } catch (err) {
//     res.send({ message: 'Email id already exits!' })
//     console.log('')
//   }
// }

// login = async (req, res) => {
//   try {
//     const email = req.body.email;
//     const password = req.body.password;

//     const result = await Register.findOne({ email: email });

//     if (!result) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     if (result.password !== password) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     const token = jwt.sign({ id: result._id }, "aayushisharma", { expiresIn: "8h" });

//     res.status(200).json({ message: "Login successful", result: result, token: token });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };


// get_data = async (req, res) => {
//   try {
//     const allData = await Register.find({})
//     res.send({
//       message: "All post",
//       user: allData
//     })
//   } catch (err) {
//     res.send({
//       message: "post data not found",
//       error: err
//     })
//   }

// }



const Register = require('../model/model.js');
const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const app = express();

app.use(cors());
app.use(express.static("public"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({ storage });

const post_property= async (req, res) => {
  try {
    upload.single("photo")
    const imageUrl = `http://localhost:4000/uploads/${file.filename}`;
    const image = new Register({ 
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
module.exports = { post_property };
