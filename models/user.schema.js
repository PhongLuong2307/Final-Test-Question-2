const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  token: {
    type: String,
    require: true
  }
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
