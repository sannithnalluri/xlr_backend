const express = require('express');
const { login, signup } = require('../controller/authController');
const router = express.Router();
const authenticateToken = require("../middleware/jwtmiddleware");


// Import the authentication controller

router.post("/login",login);
router.post("/signup", signup);

router.get("/test",authenticateToken,(req,res)=>{
    res.send("authcaited");
})


module.exports = router;
