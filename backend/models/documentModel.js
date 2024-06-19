const mongoose = require("mongoose")

const documentSchema = new mongoose.Schema({
    title: String,
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    file:{
        type: Buffer,
        required:true,
    },
    fileType:{
        type:String,
    },
    securityType:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile"
    }
})

const Document = mongoose.model("Document",documentSchema)

module.exports = Document