const { signup } = require("../controller/controller");
const express=require('express')

var router=express.Router();

router.post('/registerpost',signup)

router.post('/loginpost',login)

router.get('/getdata',get_data)




module.exports=router