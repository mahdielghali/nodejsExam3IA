var mongoose = require("mongoose")

var MessageSchema=mongoose.Schema

var Messages=new MessageSchema({
    pseudo:String,
    content:String,
    likes:Number
})

module.exports= mongoose.model("Messages",Messages)