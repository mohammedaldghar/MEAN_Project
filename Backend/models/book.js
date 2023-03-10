const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({

    Name: { type: String, minlength: 4, require: true },
    photo: String,
    CategoryId: Number,
    AuthorId: Number
})

const BookModel = mongoose.model('book', bookSchema);
module.exports = BookModel;