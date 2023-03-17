const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({

    id: { type: Number, unique: true, required: true, autoIncrement: true },
    name: { type: String, unique: true, required: true },
    Rating: { type: Number, max: 5 }
})
const CategoryModel = mongoose.model('category', categorySchema)

module.exports = CategoryModel
