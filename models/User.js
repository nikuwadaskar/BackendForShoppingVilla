var mongoose = require("mongoose");
var db = require("../config");
let obj = mongoose.Schema({
  name: {
    type: String,
  }
},{_id:0})
var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    cart: [obj],
  },
  {
    timestamps: true,
  }
);

var userModel = mongoose.model("users", userSchema);

module.exports = userModel;
