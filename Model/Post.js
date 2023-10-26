import mongoose from "mongoose";

const Schema = mongoose.Schema({
    post:String,
    image:String,
    create_at:{
        type:Date,
        default:Date.now(),
    }
})

export default mongoose.model("posts",Schema)