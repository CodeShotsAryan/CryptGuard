const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    NoOfDocuments:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Document",
    },
    securityType:{
        type:String,
        required:true,
    }
})

const Profile = mongoose.model("Profile",profileSchema)

module.exports = Profile