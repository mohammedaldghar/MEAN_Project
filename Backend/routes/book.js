const express = require("express");
const router = express.Router();
const BookModel = require("../models/book");
const CategoryModel = require("../models/category");
const AuthorModel = require("../models/author");
const upload = require('../middleware/multer')

/* add book  */

router.post("/", upload.single('photo'), async (req, res) => {
  //console.log(req.file)
  const category = await CategoryModel.find({});
  if (!category.length == 0) {
    const author = await AuthorModel.find({});
    if (!author.length == 0) {
      const books = await BookModel.find({});
      let count = 0;
      if (!books.length == 0) {
        count = books[books.length - 1].id;
      }

      let rate = req.body.Rating;
      if (!rate) {
        rate = 0;
      }
      let cover;
      if (req.file) {
        cover = `http://localhost:5000/uploads/${req.file.filename}`
        console.log(cover);
      }
      const newBook = {
        id: count + 1,
        ...req.body,
        Rating: rate,
        photo: cover
      };
      await BookModel.create(newBook, (err, createdbook) => {
        if (!err) return res.json(createdbook);
        res.status(500).send(err);
      });
    } else {
      return res.send("there is no author");
    }
  } else {
    return res.send("there is no category");
  }
});

/* git all book */

router.get("/", (req, res) => {
  BookModel.find({}, (err, books) => {
    if (!err) return res.send(books);
    res.status(500).json(err);
  })
    .populate("AuthorId")
    .populate("CategoryId")
    .populate("Reviews.userId");
});
// ---------------------------------------- work popular
/* get popular book */



router.get("/popularBooks", (req, res) => {
  // BookModel.find({Rating:{$gte:4}}, (err, books) => {
  BookModel.find((err, books) => {
    if (!err) return res.send(books);
    res.status(500).json(err);
  }).sort({ Rating: -1 }).limit(5)
    .populate("AuthorId")
    .populate("CategoryId")
    .populate("Reviews.userId");
});
// ---------------------------------------- work popular

/* git book by id */

router.get("/:id", (req, res) => {
  BookModel.find({ _id: req.params.id }, (err, book) => {
    if (!err) return res.json(book);
    res.status(500).json(err);
  })
    .populate("AuthorId")
    .populate("CategoryId")
    .populate("Reviews.userId");
});







/* git book by category id */

router.get("/categorybook/:id", (req, res) => {
  BookModel.find({ CategoryId: req.params.id }, (err, book) => {
    if (!err) return res.json(book);
    res.status(500).json(err);
  })
    .populate("AuthorId")
    .populate("CategoryId")
    .populate("Reviews.userId");
});

/* git book by author id */

router.get("/authorbook/:id", (req, res) => {
  BookModel.find({ AuthorId: req.params.id }, (err, book) => {
    if (!err) return res.json(book);
    res.status(500).json(err);
  })
    .populate("AuthorId")
    .populate("CategoryId")
    .populate("Reviews.userId");
});



/* edit in book */

router.patch("/:id", (req, res) => {
  BookModel.findByIdAndUpdate(req.params.id, req.body, (err, book) => {
    if (!err) return res.send("edited successfuly");
    res.status(500).send(err);
  });
});

/* delete book */

router.delete("/:id", async (req, res) => {
  console.log(req.params.id)
  // const deletedBook = await BookModel.findByIdAndDelete(req.params.id)
  // if (deletedBook) {
  //   return res.send("deleted");
  // } else {
  //   res.status(500).send(err);
  // }
  try {
    const deletedBook = await BookModel.findByIdAndDelete(req.params.id);
    if (deletedBook) {
      return res.status(200).send({ Message: "Deleted Successfully" });
    } else {
      return res.status(404).send({ Message: "book is not Exist" });
    }
  } catch (error) {
    return res.status(500).json({ Message: "Error In Delete" });
  }
});

/* delete all books */

router.delete("/", (req, res) => {
  BookModel.deleteMany({}, (err, books) => {
    if (!err) return res.send("deleted");
    res.status(500).send(err);
  });
});

/* Add Comment */
router.post("/:id/comment", async (req, res) => {
  let comment = req.body;
  const modfiedBook = await BookModel.findById(req.params.id);
  modfiedBook.Reviews.push(comment);
  BookModel.findByIdAndUpdate(req.params.id, modfiedBook, (err) => {
    if (!err) {
      return res.status(200).send("Comment added successfully to Book");
    } else {
      console.log(err);
      return res.status(500).send("err");
    }
  });
});

module.exports = router;
