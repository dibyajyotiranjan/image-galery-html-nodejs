const express = require("express")
const router = express.Router();
const mongoose = require("mongoose")
const Sign = mongoose.model("sign")
const multer = require("multer")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/image/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = file.originalname
      cb(null, uniqueSuffix)
    }
  })
  
  var upload = multer({ storage: storage })

router.post("/signup",upload.single("sign"),(req,res)=>{
    const Signup = new Sign({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        photo:req.file.filename,
    })
    Signup.save()
    .then((e)=>{
        res.redirect("login.html")
    })
    .catch(err=>console.log(err))
});

router.post("/signin",(req,res)=>{
    const email=req.body.email;
    Sign.findOne({email:email})
    .then((e)=>{
        res.redirect("showpost.html")
    })
    .catch(err=>console.log(err))
})

module.exports = router