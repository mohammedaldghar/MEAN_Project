const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({

    id: { type: Number, unique: true, required: true },
    Name: { type: String, minlength: 4, required: true },
    photo: { type: String, default:'http://localhost:5000/uploads/background-lighted.jpg' },
    CategoryId: { type: mongoose.Schema.Types.ObjectId, ref: "category", required: true },
    AuthorId: { type: mongoose.Schema.Types.ObjectId, ref: "author", required: true },
    Rating: { type: Number, max: 5 },
    Reviews: [{
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        Comment:String
    }]
})

const BookModel = mongoose.model('book', bookSchema);
module.exports = BookModel;