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
      return res.status(500).send({ message: "This category is already exist" });
    }
  }
  let count = 0;
  if (!category.length == 0) {
    count = category[category.length - 1].id
  }
  let rate = req.body.Rating;
  if (!rate) {
    rate = 0;
  }
  const newCategory = {
    id: count + 1,
    ...req.body,
    Rating: rate
  }
  const added = await CategoryModel.create(newCategory);
  if (added) {
    return res.status(201).send({ message: "success" })
  } else {
    return res.status(500).send({ message: "faild" })
  }
})


router.put("/:id", (req, res) => {
  CategoryModel.findByIdAndUpdate(req.params.id, req.body, (err, category) => {
    if (!err) return res.send("edited successfuly");
    res.status(500).send(err);
  });
});


router.delete('/:id', (req, res) => {
  const id = req.params.id
  CategoryModel.findByIdAndDelete({ _id: id }, (err, user) => {
    if (!err) return res.json(user);
    res.status(500).send(err);
  });

})
router.delete('/', (req, res) => {

  CategoryModel.deleteMany({}, (err) => {

    res.send("deleted")
  })
})

module.exports = router