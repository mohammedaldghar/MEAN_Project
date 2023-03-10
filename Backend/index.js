const express = require('express'); 
const mongoose = require('mongoose');
require('dotenv').config()

const PORT = process.env.PORT 
const DB_URL = process.env.DB_URL 

const server = express()
server.use(express.json())


const AuthRouter=require('./routes/author');

server.use(['/author','/Author'],AuthRouter)







mongoose.connect(DB_URL, (err) => {
    if (!err) {
        return console.log("db connected")
    }
    console.log("not connected")
})

server.listen(PORT, (err) => {                                    
    if (!err) {
        return console.log("server start")
    }
}) 