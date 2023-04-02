const mongoose = require("mongoose");

var url =
  "mongodb+srv://Pass:Pass@one.qadhs56.mongodb.net/Users";
mongoose.connect(url);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;