const mongoose =  require("mongoose");
const NewsPostSchema = mongoose.Schema({
    NewsPostImage:String,
    create_at:{
        type:Date,
        default:Date.now(),
    }
})
module.exports =NewsPost= mongoose.model("NewsPost",NewsPostSchema)