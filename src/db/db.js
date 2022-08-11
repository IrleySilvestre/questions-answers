const { Sequelize } = require("sequelize");
const connection = new Sequelize("question-answere", "user", "12345678", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
