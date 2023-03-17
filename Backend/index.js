const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config();
const BookRouter = require("./routes/book");
const CategoryBookRouter = require("./routes/category_book");
const AuthorBookRouter = require("./routes/author_book")
const AuthRouter = require("./routes/author");
const CategoryRouter = require("./routes/category");
const userRoutes = require("./routes/user");
const loginRoutes = require("./routes/login");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const TOKEN_KEY = process.env.TOKEN_KEY || "Unknown user";

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

const server = express();
server.use(express.json());
server.use(cors());

server.use(["/book", "/Book"], BookRouter);
server.use("/categorybook", CategoryBookRouter);
server.use("/authorbook", AuthorBookRouter);
server.use(["/category", "/Category"], CategoryRouter);
server.use(["/author", "/Author"], AuthRouter);
server.use(["/user", "/User"], userRoutes);
server.use(["/login", "/Login"], loginRoutes);

mongoose.connect(DB_URL, (err) => {
  if (!err) {
    return console.log("DB connected");
  }
  console.log("not connected");
});

server.listen(PORT, (err) => {
  if (!err) {
    return console.log("server start");
  }
});
