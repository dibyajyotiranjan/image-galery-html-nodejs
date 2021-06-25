const express = require("express")
const router = express.Router();
const mongoose = require("mongoose")
const Post = mongoose.model("post")
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

router.post("/post",upload.single("post"),(req,res)=>{
    
    const Signup = new Post({
        pic:req.file.filename,
        text:req.body.text
    })
    Signup.save()
    .then((e)=>{
        res.redirect("showpost.html")
    })
    .catch(err=>console.log(err))
})
router.get("/userpost",(req,res)=>{
    Post.find()
    .then(y=>res.json(y))
})
module.exports = router