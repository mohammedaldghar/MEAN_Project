const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({

    id: { type: Number, unique: true, required: true },
    Name: { type: String, minlength: 4, required: true },
    photo: { type: String },
    CategoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    AuthorId: { type: mongoose.Schema.Types.ObjectId, ref: "author", required: true },
    Rating: { type: Number, max: 5 }
})

const BookModel = mongoose.model('book', bookSchema);
module.exports = BookModel;