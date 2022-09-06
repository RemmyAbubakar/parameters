const express = require("express")
const postRouter = require("./routes/posts.route");

const app = express()


app.get("/", (req, res) => {
  res
    .status(200)
    .send("Welcome to my server. Please use /posts to get all posts");
});

app.use("/posts", postRouter);


app.listen(4000, () => {
    console.log("🚀Server up and running on port http://localhost:4000");
})