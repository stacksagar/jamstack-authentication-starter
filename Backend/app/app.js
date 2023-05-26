require("dotenv").config();
const express = require("express");
const app = express();
const { notFoundHandler, errorHandler } = require("./error");

const middlewares = require("./middlewares");
const v1Routes = require("./v1.routes");

app.use("", express.static("uploads"));
app.use(middlewares);

app.use("/api/v1", v1Routes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
