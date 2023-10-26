import mongoose from "mongoose"

const ShcemaAdmin = mongoose.Schema({
    username:String,
    password:String,
    isAdmin:Boolean,
})

export default mongoose.model("admin",ShcemaAdmin)