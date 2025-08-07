require("dotenv").config(); // 항상 최상단에

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Person = require("./person-model");

mongoose.set("strictQuery", false);

const app = express();
app.use(bodyParser.json());

const mongodbUri = process.env.MONGODB_URI;

mongoose
  .connect(mongodbUri, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB 연결 실패:", err));

app.listen(3000, () => {
  console.log("Server started");
});
