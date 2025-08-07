require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const uri = process.env.MONGODB_URI;

module.exports = function () {
  return mongoose.connect(uri, { useNewUrlParser: true });
};
