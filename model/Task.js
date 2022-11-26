const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name must be provided'],
        maxlength:[20,'name must be less than 20 char'],
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})


module.exports=mongoose.model('Task',TaskSchema);