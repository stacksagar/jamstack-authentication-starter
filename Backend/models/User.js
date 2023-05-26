const { DataTypes: types } = require("sequelize");
const sequelize = require("../database/connection");

const User = sequelize.define("User", {
  name: {
    type: types.STRING,
    allowNull: false,
  },

  email: {
    type: types.STRING,
    allowNull: false,
    unique: true,
  },

  phone: {
    type: types.STRING,
    allowNull: false,
  },

  password: {
    type: types.STRING,
    allowNull: false,
  },

  username: {
    type: types.STRING,
  },

  picture: {
    type: types.STRING,
  },

  nid: {
    type: types.STRING,
  },

  refresh_token: {
    type: types.STRING,
  },

  access_token: {
    type: types.STRING,
  },

  role: {
    type: types.ENUM(["user", "moderator", "admin"]),
    defaultValue: "user",
    allowNull: false,
  },

  disabled: {
    type: types.BOOLEAN,
  },

  isEmailVerified: {
    type: types.BOOLEAN,
  },
});

module.exports = User;
