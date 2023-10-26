const mongoose =  require("mongoose");

const Schema = mongoose.Schema({
    post:String,
    image:String,
    create_at:{
        type:Date,
        default:Date.now(),
    }
})

module.exports =Post=  mongoose.model("posts",Schema)