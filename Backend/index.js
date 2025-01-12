const express = require("express");
const fs = require('fs')
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config();
const BookRouter = require("./routes/book");
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

const imagesDir = "uploads";
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir);
}
server.use(`/${imagesDir}`, express.static(imagesDir));

server.use(["/book", "/Book"], BookRouter);
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
    return console.log("server is listenning at port: "+PORT);
  }
});
