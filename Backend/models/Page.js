const { DataTypes: types } = require("sequelize");
const sequelize = require("../database/connection");

const Page = sequelize.define("Page", {
  name: {
    type: types.STRING,
    allowNull: false,
    unique: true,
  },

  thumbnail: types.STRING,

  heading: types.STRING,

  content: {
    type: types.TEXT,
    allowNull: false,
  },

  status: {
    type: types.ENUM("published", "draft"),
    defaultValue: "published",
  },
});

module.exports = Page;
