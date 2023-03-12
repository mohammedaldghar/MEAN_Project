const express = require("express");
const router = express.Router();
const CategoryModel = require("../models/category");

router.get("/", (req, res) => {
  CategoryModel.find({}, (err, categories) => {
    if (!err) {
      return res.send(categories);
    }
    res.status(500).json(err);
  }); //.populate('book')
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  CategoryModel.find({ _id: id }, (err, category) => {
    if (!err) {
      return res.json(category);
    }
    res.status(500).json(err);
  });
});

router.post("/", (req, res) => {
  const category = {
    ...req.body,
  };
  CategoryModel.create(category, (err, createCategory) => {
    if (!err) return res.json(createCategory);
    res.status(500).send(err);
  });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  usermodel.findByIdAndUpdate(id, updates, (err, user) => {
    if (!err) return res.json(user);
    res.status(500).send(err);
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  CategoryModel.findByIdAndDelete({ _id: id }, (err, user) => {
    if (!err) return res.json(user);
    res.status(500).send(err);
  });
});
router.delete("/", (req, res) => {
  CategoryModel.deleteMany({}, (err) => {
    res.send("delete");
  });
});

module.exports = router;
