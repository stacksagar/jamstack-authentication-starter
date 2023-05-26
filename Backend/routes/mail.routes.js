const express = require("express");
const Mail_controllers = require("../controller/Mail_controllers");
const router = express.Router();

router.post("/testing", Mail_controllers.testing);

module.exports = mailRoutes = router;
