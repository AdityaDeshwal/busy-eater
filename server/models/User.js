const mongoose=require('mongoose');

const{Schema}=mongoose;
const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        requierd:true
    },
    email:{
        type:String,
        requierd:true
    },
    password:{
        type:String,
        requierd:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('user',UserSchema) 