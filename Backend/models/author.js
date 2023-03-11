const mongoose=require('mongoose')


const authSchema=new mongoose.Schema({
    firstName :{type:String,minlength:3 ,maxlength:15,required:true},   
    lastName :{type:String,minlength:3 ,maxlength:15,required:true}, 
    DateOfBirth :{type:Date}
    })
    
    const authModel=mongoose.model('author',authSchema)
    module.exports=authModel