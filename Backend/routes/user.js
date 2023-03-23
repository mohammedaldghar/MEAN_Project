const express = require("express");
const router = express.Router();
const user = require("../models/user");
const book = require("../models/book");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const TOKEN_KEY = process.env.TOKEN_KEY || "Dghar";
//Add new user
router.post("/", async (req, res) => {
  const alluser = await user.find({});
  for (x of alluser) {
    if (x.email == req.body.email) {
      return res.status(500).send({ message: "This user is already exist" });
    }
  }
  let newId = 1;
  const users = await user.find({});
  if (users.length > 0) {
    for (let user of users) {
      newId = user.id + 1;
    }
  }

  // if (
  //   req.body.readingBooks.length > 0 ||
  //   req.body.wantToReadBooks.length > 0 || // check if there books or not when we add books to user
  //   req.body.readBooks.length > 0
  // ) {
    const books = await book.find({});
    if (books.length == 0) {
      return res
        .status(200)
        .send("Books is Empty You can't add books to this user");
    //}
  }
  const { email } = req.body;
  const token = jwt.sign({ email }, TOKEN_KEY);
  const newUser = {
    id: newId,
    token: token,
    ...req.body,
    isAdmin:false
  };
  encryptedpassword = await bcrypt.hash(newUser.password, 10);
  newUser.password = encryptedpassword;
  await user.create(newUser, (error, createdUser) => {
    if (!error) {
      return res.status(200).send("User has been added successfully");
    } else {
      console.log(error);
      return res.status(500).send("error in adding user");
    }
  });
});

//Delete all users
router.delete("/", (req, res) => {
  user.deleteMany({}, (error, user) => {
    res.status(200).send("All users deleted");
  });
});

//Delete user by id
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  user.findByIdAndDelete(id, (error) => {
    if (!error) {
      return res.status(200).send("User deleted successfully");
    } else {
      console.log(error);
      return;
    }
  });
});

//Edit user by id
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const modifiedUser = {
    ...req.body,
  };
  user.findByIdAndUpdate(id, modifiedUser, (error) => {
    if (!error) {
      return res.status(200).send("User updated successfully");
    } else {
      console.log(error);
      return;
    }
  });
});

// Get all users
router.get("/", (req, res) => {
  user.find({}, (error, user) => {
    if (!error) {
      return res.status(200).send(user);
    } else {
      console.log(error);
      return;
    }
  });
});

//Get Current reading Books
router.get("/:id/currentReading", (req, res) => {
  user.findById(req.params.id, (error, user) => {
    const data = {
      fullName: user.firstName + " " + user.lastName,
      books: user.readingBooks,
    };
    if (!error) {
      return res.status(200).send(data);
    } else {
      console.log(error);
      return;
    }
  });
});

//Get Want to read Books
router.get("/:id/wantToRead", (req, res) => {
  user.findById(req.params.id, (error, user) => {
    const data = {
      fullName: user.firstName + " " + user.lastName,
      books: user.wantToReadBooks,
    };
    if (!error) {
      return res.status(200).send(data);
    } else {
      console.log(error);
      return;
    }
  });
});

//Get read Books
router.get("/:id/read", (req, res) => {
  user.findById(req.params.id, (error, user) => {
    const data = {
      fullName: user.firstName + " " + user.lastName,
      books: user.readBooks,
    };
    if (!error) {
      return res.status(200).send(data);
    } else {
      console.log(error);
      return;
    }
  });
});

// adding book to user in want to read list
router.post("/:id/addWantToReadBook", async (req, res) => {
  const books = await book.find({});
  if (!books.length) {
    return res.status(500).send("You can't add book");
  }
  let newBook = req.body.book;
  const modifiedUser = await user.findById(req.params.id);
  modifiedUser.wantToReadBooks.addToSet(newBook);
  user.findByIdAndUpdate(req.params.id, modifiedUser, (error) => {
    if (!error) {
      return res.status(200).send("Book added successfully to user");
    } else {
      console.log(error);
      return;
    }
  });
});

// adding book to user in Currently Reading list
router.post("/:id/addCurrentlyReadingBook", async (req, res) => {
  const books = await book.find({});
  if (!books.length) {
    return res.status(500).send("You can't add book");
  }
  let newBook = req.body.book;
  const modifiedUser = await user.findById(req.params.id);
  modifiedUser.readingBooks.addToSet(newBook);
  user.findByIdAndUpdate(req.params.id, modifiedUser, (error) => {
    if (!error) {
      return res.status(200).send("Book added successfully to user");
    } else {
      console.log(error);
      return;
    }
  });
});

// adding book to user in Read Reading list
router.post("/:id/addReadBook", async (req, res) => {
  const books = await book.find({});
  if (!books.length) {
    return res.status(500).send("You can't add book");
  }
  let newBook = req.body.book;
  const modifiedUser = await user.findById(req.params.id);
  modifiedUser.readBooks.addToSet(newBook);
  user.findByIdAndUpdate(req.params.id, modifiedUser, (error) => {
    if (!error) {
      return res.status(200).send("Book added successfully to user");
    } else {
      console.log(error);
      return;
    }
  });
});

//Remove from currently reading list
router.delete("/:id/editCurrentlyReadingBook", async (req, res) => {
  const modifiedUser = await user.findById(req.params.id);
  if (!modifiedUser.readingBooks.length) {
    return res.status(500).send("Collection of books is Empty");
  }
  let index = modifiedUser.readingBooks.indexOf(req.body.book);
  modifiedUser.readingBooks.splice(index, 1);
  user.findByIdAndUpdate(req.params.id, modifiedUser, (error) => {
    if (!error) {
      return res.status(200).send("Book deleted");
    } else {
      console.log(error);
      return;
    }
  });
});

//Remove from read list
router.delete("/:id/editReadBook", async (req, res) => {
  const modifiedUser = await user.findById(req.params.id);
  if (!modifiedUser.readBooks.length) {
    return res.status(500).send("Collection of books is Empty");
  }
  let index = modifiedUser.readBooks.indexOf(req.body.book);
  modifiedUser.readBooks.splice(index, 1);
  user.findByIdAndUpdate(req.params.id, modifiedUser, (error) => {
    if (!error) {
      return res.status(200).send("Book deleted");
    } else {
      console.log(error);
      return;
    }
  });
});

//Remove from Want to read list
router.delete("/:id/editWantToReadBook", async (req, res) => {
  const modifiedUser = await user.findById(req.params.id);
  if (!modifiedUser.wantToReadBooks.length) {
    return res.status(500).send("Collection of books is Empty");
  }
  let index = modifiedUser.wantToReadBooks.indexOf(req.body.book);
  modifiedUser.wantToReadBooks.splice(index, 1);
  user.findByIdAndUpdate(req.params.id, modifiedUser, (error) => {
    if (!error) {
      return res.status(200).send("Book deleted");
    } else {
      console.log(error);
      return;
    }
  });
});
module.exports = router;
