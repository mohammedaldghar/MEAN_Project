const express = require('express');
const router = express.Router()
const BookModel = require('../models/book')

/* git all book */

router.get('/', (req, res) => {
    BookModel.find({}, (err, books) => {
        if (!err) return res.send(books)
        res.status(500).json(err)
    })
})

/* git book by id */

router.get('/:id', (req, res) => {
    const id = req.params.id                         //
    BookModel.find({ _id: id }, (err, book) => {
        if (!err) return res.json(book)
        res.status(500).json(err)
    })
})

/* add book  */

router.post('/', async (req, res) => {

    const books = await BookModel.find({});
    let count = 0;
    if (!books.length == 0) {
        count = books[books.length - 1].id
    }
    const newBook = {
        id: count + 1,
        ...req.body
    }
    await BookModel.create(newBook, (err, createdbook) => {
        if (!err) return res.json(createdbook)
        res.status(500).send(err)
    })
})

/* edit in book */

router.patch('/:id', (req, res) => {
    
    BookModel.findByIdAndUpdate(req.params.id,req.body, (err, book) => {
        if (!err) return res.send("edited successfuly")
        res.status(500).send(err)
    })
})

/* delete book */

router.delete('/:id', (req, res) => {

    BookModel.findOneAndRemove({ _id: req.params.id }, (err, book) => {
        if (!err) return res.send("deleted")
        res.status(500).send(err)
    })
})

/* delete all books */

router.delete('/', (req, res) => {
    BookModel.deleteMany({}, (err, books) => {
        if (!err) return res.send("deleted")
        res.status(500).send(err)
    })
})

module.exports = router