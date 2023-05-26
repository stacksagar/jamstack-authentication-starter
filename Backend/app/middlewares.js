const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const corsOptions = require("../config/corsOptions");
const credentials = require("../middleware/credentials");

const middlewares = [
  morgan("dev"),
  credentials,
  cors(corsOptions),
  express.urlencoded({ extended: false }),
  express.json(),
  cookieParser(),
];

module.exports = middlewares;
