const express = require("express");

const app = express();
const port = 3001;

// Configura EJS
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/question", (req, res) => {
  res.render("question");
});
