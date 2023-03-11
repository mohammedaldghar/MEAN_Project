const express = require('express');
const router = express.Router()
const BookModel = require('../models/book')

router.get('/', (req, res) => {
    BookModel.find({}, (err, books) => {
        if (!err) return res.send(books)
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id                         //
    BookModel.find({ _id: id }, (err, book) => {
        if (!err) return res.json(book)
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {

    BookModel.create(req.body, (err, createdbook) => {
        if (!err) return res.json(createdbook)
        res.status(500).send(err)
    })
})

router.patch('/:id', (req, res) => {
    const checkId = req.params.id
    const bookToEdited = {
        ...req.body
    }
    BookModel.findByIdAndUpdate(checkId, bookToEdited, (err, book) => {
        if (!err) return res.send(bookToEdited)
        res.status(500).send(err)
    })
})

router.delete('/:id', (req, res) => {
    const checkId = req.params.id                        
    BookModel.remove({ _id: checkId }, (err, book) => {
        if (!err) return res.send("deleted")
        res.status(500).send(err)
    })
})

module.exports = router