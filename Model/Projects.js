import mongoose from "mongoose"

const Schema = mongoose.Schema(
    {id:Number,
    Introduct:{
        title:String,
        desc:String,
        tools:String,
        image:String
    },
     Overview:{
      title:[String],
      desc:[String],
     },
     Problem:{
      title:[String],
      desc:[String],
     },
     Solution:{
      title:[String],
      desc:[String],
     },
     Diagrams:{
      title:[String],
      desc:[String],
      images:[String],
     },
     Realization:{
      title:[String],
      desc:[String],
      images:[String],
     },
     create_at:{
        type:Date,
        default : Date.now(),
     }
    }
    )
export default mongoose.model("projects",Schema);