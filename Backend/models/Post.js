const { DataTypes: types } = require("sequelize");
const sequelize = require("../database/connection");
const getParseIntoJSON = require("../utils/databases/getParseIntoJSON");

const Post = sequelize.define("Post", {
  title: types.STRING,

  slug: types.STRING,

  content: types.STRING,
  thumbnail: types.STRING,
  status: {
    type: types.ENUM("published", "draft"),
    defaultValue: "published",
  },

  tags: {
    type: types.JSON,
    get: getParseIntoJSON("tags"),
  },

  comments: {
    type: types.JSON,
    get: getParseIntoJSON("comments"),
  },

  categories: {
    type: types.JSON,
    get: getParseIntoJSON("categories"),
  },
});

module.exports = Post;
