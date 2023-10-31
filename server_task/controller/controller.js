const Register=require('../model/model.js')
const jwt=require("jsonwebtoken")
// const bcrypt=require("bcrypt")
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
  };


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

information = async(req,res)=>{
  try{
    const allinformation=await Register

  }catch{

  }
}
  
module.exports = { signup,login };