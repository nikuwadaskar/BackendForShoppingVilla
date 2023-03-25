var mongoose = require("mongoose");
var db = require("../config");
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
  },
  {
    timestamps: true,
  }
);

var userModel = mongoose.model("users", userSchema);

module.exports = userModel;
