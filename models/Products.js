var mongoose = require("mongoose");
var db = require("../config");
var ProductsSchema = new mongoose.Schema(
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

var productsModal = mongoose.model("Products", ProductsSchema);

module.exports = productsModal;
