const { post_property } = require("../controller/controller");
const express = require('express');

const router = express.Router();

router.post('/post_property', post_property);

module.exports = router;
