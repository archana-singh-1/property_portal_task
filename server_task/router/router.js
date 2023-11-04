const { post_property } = require("../controller/controller");
const express = require('express');
const multer=require("multer");
const path = require("path");
const router = express.Router();

router.post("/registerpost",signup)
router.post("/loginpost",login)
router.get("/get_data",get_data)



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

router.post('/post_property',upload.single("photo"), post_property);


module.exports = router;




module.exports = router;