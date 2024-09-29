const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
    username: {
        type:String,
        required:true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    previousmails:{
        type:[String],
        required:false
    },
    groceries:{
        type:[String],
        required:false
    },
    cart:{
        type:[String],
        required:false
    }
},{timestamps: true});

const User = mongoose.model('User', userSchema)
module.exports= User;