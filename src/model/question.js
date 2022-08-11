const { DataTypes } = require("sequelize");
const connection = require("../db/db");

const question = connection.define("questions", {
  title: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = question;
