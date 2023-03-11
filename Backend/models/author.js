const mongoose=require('mongoose')

//var id = new mongoose.Types.ObjectId();     auth_ID:{type:Number,min:1,required:true},
const authSchema=new mongoose.Schema({
    auth_ID:{type:Number,min:1,required:true,unique:true},
    firstName :{type:String,minlength:3 ,maxlength:15,required:true},   
    lastName :{type:String,minlength:3 ,maxlength:15,required:true}, 
    photo:{type:String},
    DateOfBirth :{type:Date}
    })
    
    const authModel=mongoose.model('author',authSchema)
    module.exports=authModel