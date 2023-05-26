const { DataTypes: types } = require("sequelize");
const sequelize = require("../database/connection");
const getParseIntoJSON = require("../utils/databases/getParseIntoJSON");

const Setting = sequelize.define("Setting", {
  client: {
    type: types.JSON,
    get: getParseIntoJSON("client"),
  },
  admin: {
    type: types.JSON,
    get: getParseIntoJSON("admin"),
  },
});

module.exports = Setting;
