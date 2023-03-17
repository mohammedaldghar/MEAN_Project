const express = require('express')
const router = express.Router()
const CategoryModel = require('../models/category')



router.get('/', (req, res) => {
  CategoryModel.find({}, (err, categories) => {
    if (!err) { return res.send(categories) }
    res.status(500).json(err)

  })//.populate('book')
})


router.get('/:id', (req, res) => {
  const id = req.params.id
  CategoryModel.find({ _id: id }, (err, category) => {
    if (!err) {

      return res.json(category)
    }
    res.status(500).json(err)

  })
})



router.post('/', async (req, res) => {
  const category = await CategoryModel.find({});
  for (categ of category) {
    if (categ.name == req.body.name) {
      return res.status(500).send("This category is already exist");
    }
  }
  let count = 0;
  if (!category.length == 0) {
    count = category[category.length - 1].id
  }
  let rate = req.body.rate;
  if (!rate) {
    rate = 0;
  }
  const newCategory = {
    id: count + 1,
    name: req.body.name,
    rate: rate
  }
  await CategoryModel.create(newCategory, (err, createCategory) => {
    if (!err) return res.json(createCategory)
    res.status(500).send(err)
  })
})


router.put('/:id', (req, res) => {
  const id = req.params.id
  const updates = req.body;
  usermodel.findByIdAndUpdate(id, updates, (err, user) => {
    if (!err) return res.json(user);
    res.status(500).send(err);
  });

})


router.delete('/:id', (req, res) => {
  const id = req.params.id
  CategoryModel.findByIdAndDelete({ _id: id }, (err, user) => {
    if (!err) return res.json(user);
    res.status(500).send(err);
  });

})
router.delete('/', (req, res) => {

  CategoryModel.deleteMany({}, (err) => {

    res.send("delete")
  })
})

module.exports = router