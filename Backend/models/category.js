const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({

id:{ type:Number , unique:true , required:true},
name:String 
})
const CategoryModel = mongoose.model('category',categorySchema) 

module.exports = CategoryModel




