const express = require('express');
const router = express.Router()
const BookModel = require('../models/book')

router.get('/:id', async (req, res) => {

    BookModel.find({ AuthorId: req.params.id }, (err, book) => {
        if (!err) return res.json(book)
        res.status(500).json(err)
    })
})

module.exports = router