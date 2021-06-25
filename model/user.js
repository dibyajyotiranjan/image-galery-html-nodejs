const mongoose = require("mongoose");
const mSchema = mongoose.Schema({
    name:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true
    }
})
mongoose.model("user",mSchema)