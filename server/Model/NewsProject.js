const mongoose =  require("mongoose");
const NewsProjectSchema = mongoose.Schema({
    NewsProjectImage:String,
    create_at:{
        type:Date,
        default:Date.now(),
    }
})
module.exports =NewsProject= mongoose.model("NewsProject",NewsProjectSchema)