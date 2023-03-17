const express = require('express');
const router = express.Router()
const BookModel = require('../models/book')
const CategoryModel = require('../models/category')
const AuthorModel = require('../models/author')

/* git all book */

router.get('/', (req, res) => {
    BookModel.find({}, (err, books) => {
        if (!err) return res.send(books)
        res.status(500).json(err)
    })
})

/* git book by id */

router.get('/:id', (req, res) => {
    BookModel.find({ _id: req.params.id }, (err, book) => {
        if (!err) return res.json(book)
        res.status(500).json(err)
    })
})

/* git book by category id */

router.get('/categorybook/:id', (req, res) => {

    BookModel.find({ CategoryId: req.params.id }, (err, book) => {
        if (!err) return res.json(book)
        res.status(500).json(err)
    })
})

/* git book by author id */

router.get('/authorbook/:id', (req, res) => {

    BookModel.find({ AuthorId: req.params.id }, (err, book) => {
        if (!err) return res.json(book)
        res.status(500).json(err)
    })
})

/* add book  */

router.post('/', async (req, res) => {
    const category = await CategoryModel.find({});
    if (!category.length == 0) {
        const author = await AuthorModel.find({});
        if (!author.length == 0) {
            const books = await BookModel.find({});
            let count = 0;
            if (!books.length == 0) {
                count = books[books.length - 1].id
            }
            let rate = req.body.Rating;
            console.log(rate)
            if (!rate) {
                rate = 0;
            }
            const newBook = {
                id: count + 1,
                ...req.body,
                Rating: rate
            }
            await BookModel.create(newBook, (err, createdbook) => {
                if (!err) return res.json(createdbook)
                res.status(500).send(err)
            })
        } else {
            return res.send("there is no author");
        }
    } else {
        return res.send("there is no category");
    }
})

/* edit in book */

router.patch('/:id', (req, res) => {

    BookModel.findByIdAndUpdate(req.params.id, req.body, (err, book) => {
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