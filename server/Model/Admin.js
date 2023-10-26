const mongoose =  require("mongoose");

const ShcemaAdmin = mongoose.Schema({
    username:String,
    password:String,
    isAdmin:Boolean,
})

module.exports =User= mongoose.model("admin",ShcemaAdmin)