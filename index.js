const express = require("express");

const connection = require("./src/db/db");

const questionModel = require("./src/model/question");

questionModel.sync({ force: false }).then(() => {
  console.log("Tabela Questions ok.");
});

connection
  .authenticate()
  .then(() => {
    console.log("Banco de dados conectado.");
  })
  .catch((error) => {
    console.error("Erro ao conectar banco de dados.", error);
  });

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
  questionModel.findAll({ raw: true }).then((result) => {
    const listQuestions = result;
    res.render("index", { listQuestions });
  });
});
app.get("/question", (req, res) => {
  res.render("question");
});

app.post("/question", (req, res) => {
  const question = req.body;
  questionModel
    .create(question)
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => {
      console.log(error.parent);
    });
});
