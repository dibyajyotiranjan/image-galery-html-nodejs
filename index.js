const express = require("express");
const mongoose = require("mongoose")
const app = express();
const bodyparser = require("body-parser");
const port = process.env.PORT || 3000;
require("./model/user");
require("./model/Sign")
require("./model/Post")
app.use(bodyparser.json())
app.use(express.static('public'))
app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(require("./routes/user"))
app.use(require("./routes/Sign"))
app.use(require("./routes/Post"))

mongoose.connect("mongodb+srv://dibya:dibya@cluster0.c6ojt.mongodb.net/dibya",{ useNewUrlParser: true,useUnifiedTopology: true })
.then(e=>console.log("mongo connect"));

app.get("/",(req,res)=>{
return res.redirect("showpost.html");
});
app.get("/login",(req,res)=>{
    return res.redirect("login.html");
    });
    app.get("/po",(req,res)=>{
        return res.redirect("post.html");
        });
app.listen(port,()=>{
    console.log("conn");
})