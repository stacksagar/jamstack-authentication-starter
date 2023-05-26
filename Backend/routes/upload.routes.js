const express = require("express");
const uploadWithMulter = require("../middleware/uploadWithMulter");
const verifyJWT = require("../middleware/verifyJWT");
const router = express.Router();

router.post(
  "/single",
  verifyJWT,
  uploadWithMulter.single("file"),
  (req, res) => {
    res.status(201).json({ url: req.filelink });
  }
);

module.exports = uploadRoutes = router;
