const express = require("express");
const router = express.Router();
const user = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const TOKEN_KEY = process.env.TOKEN_KEY || "Dghar";

router.post("/", async (req, res) => {
  // const {email} = req.body;
  // const token = req.headers["token-value"];
  // if (!token) {
  //   return res.status(403).send("A token is required for login");
  // }
  // const decoded = jwt.verify(token, TOKEN_KEY);

  const logedUser = await user
    .findOne({ email: req.body.email })
    .populate("readingBooks")
    .populate("wantToReadBooks")
    .populate("readBooks");
  if (!logedUser) {
    return res.status(500).send("This Email is not exist");
  }

  if (await bcrypt.compare(req.body.password, logedUser.password)) {
    //const allBooks = [...logedUser.readingBooks,...logedUser.wantToReadBooks,...logedUser.readBooks];
    return res
      .status(200)
      .send({ message: "Welcome", token: logedUser.token, user: logedUser });
  } else {
    return res.status(500).send("Incorrect password");
  }
});

router.post("/admin", async (req, res) => {
  const { email } = req.body;
  const logedAdmin = await user.findOne({ email });
  if (!logedAdmin) {
    return res.status(500).send("This email is not exist");
  }
  if (
    (await bcrypt.compare(req.body.password, logedAdmin.password)) &&
    logedAdmin.isAdmin
  ) {
    return res.status(200).send("Welcome Admin :)");
  } else {
    return res
      .status(500)
      .send("Make sure that your password true Or you are not Admin :( ");
  }
});

module.exports = router;
