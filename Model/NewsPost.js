import mongoose from "mongoose";
const NewsPostSchema = mongoose.Schema({
    NewsPostImage:String,
    create_at:{
        type:Date,
        default:Date.now(),
    }
})
export default mongoose.model("NewsPost",NewsPostSchema)