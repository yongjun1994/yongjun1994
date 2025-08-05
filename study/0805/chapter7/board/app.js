const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const postService = require("./services/post-service");

const mongodbConnection = require("./configs/mongodb-connection");

app.engine(
  "handlebars", 
  handlebars.create({
    helpers: require("./configs/hendlebars-helpers"),
  }).engine
);
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("home", { title: "테스트 게시판" });
});

app.get("/write", (req, res) => {
  res.render("write", { title: "테스트 게시판" });
});

app.post("/write", async (req, res) => {
  const post = req.body;

  const result = await postService.writePost(collection, post);
  res.redirect(`/detail/${result.insertedId}`);
});

app.get("/detail/:id", (req, res) => {
  const id = req.params.id;

  const post = {
    title: "상세 페이지 예시 제목",
    content: "이것은 게시글 상세 내용입니다.",
    id: id
  };

  res.render("detail", { post });
});

let collection;

app.listen(3000, async () => {
  console.log("Server started");
  const MongoClient = await mongodbConnection();

  collection = MongoClient.db().collection("post");
  console.log("MongoDB connected");
});
