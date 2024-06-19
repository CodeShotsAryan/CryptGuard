const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    fullname:{
        type:String,
        required:true,
    },
    profilePictureURL:String,
})

const User = mongoose.model("User",userSchema)

module.exports = User