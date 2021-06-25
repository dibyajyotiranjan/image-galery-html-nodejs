const express = require("express")
const router = express.Router()
// const router = express.Router();
const mongoose= require("mongoose")
const Com = mongoose.model("user");

router.post("/p",(req,res)=>{
    const User = new Com({
        name:req.body.name,
        email:req.body.email
    })
    User.save()
    .then((e)=>{
        res.json(e)
    })
    .catch(err=>console.log(err))
})
router.get("/f",(req,res)=>{
    Com.find()
    .then((r)=>{
        res.json(r)
    })
})


// const multer= require("multer")
// const path = require("path")
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './public/uploads/')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = file.originalname
//       cb(null, uniqueSuffix)
//     }
//   })
  
//   var upload = multer({ storage: storage })
//   router.post("/post",upload.single("profile"),(req,res)=>{
//     const {ttt} = req.body;
//       if(req.session.email){
//         const Crp = new Ppost({
//           pic:req.file.filename,
//           postedBy:req.session.nme,
//           profilePic:req.session.photo,
//           text:ttt
//       })
//       Crp.save()
//       .then((e)=>{
//           if(e){
//               res.json(e)
//           }
//           else console.log("err")
//       })
//       .catch((err)=>{
//           console.log(err)
//       })
//       }
//       else{
//         res.redirect("/login")
//       }
    
     
//   })
//   router.get("/",(req,res)=>{
//       //const {pic}=req.body
//       console.log(req.session);
//       console.log(req.session.path)
//       const Image= Ppost.find();
//       //const lo=res.render("logout")
//       res.render("index",{si:Image,dd:req.session.nme,Pp:req.session.photo});
//       // if(req.session.email){
//       //   const Image= await Ppost.find()
//       // res.render("index",{si:Image,dd:req.session.nme,Pp:req.session.photo});
//       // }
//       // else{
//       //   res.redirect("/login")
//       // }
      
//   }
//  )


// router.put("/com",(req,res)=>{
//   console.log(eq.params.id)
//     const {ttt} = req.params.id;
//     let query = "dibya";
//     Ppost.findOneAndUpdate(query,{text:ttt},{upsert:true,new:true},(err,data)=>{
//       if(err){
//         console.log(err,"this is not working page");
//       }
//       else{
//         res.json(data);
//       }
//     })
//     .then((result)=>{
//       res.json(result)
//     })
//     .catch((err)=>{console.log(err)})
//   })

module.exports=router