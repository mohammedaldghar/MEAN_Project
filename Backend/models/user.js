const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  id:{type:Number, required:true,unique:true},
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique:true,match: /.+@.+\.+/ },
  password: { type: String, required: true },
  token: String,
  photo:String,
  isAdmin: { type: Boolean, required: true },
  readingBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: "book"}],
  wantToReadBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: "book"}],
  readBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: "book"}],
});
const user = mongoose.model("user", userSchema);
module.exports = user;
