import mongoose from "mongoose";
const NewsProjectSchema = mongoose.Schema({
    NewsProjectImage:String,
    create_at:{
        type:Date,
        default:Date.now(),
    }
})
export default mongoose.model("NewsProject",NewsProjectSchema)