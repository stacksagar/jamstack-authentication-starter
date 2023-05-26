const express = require("express");
const Post_controllers = require("../controller/Post_controllers");
const verifyJWT = require("../middleware/verifyJWT");
const minRoleRequired = require("../middleware/minRoleRequired");
const { roles } = require("../config/roles");
const router = express.Router();

router.post("/", Post_controllers.create);
router.get("/", Post_controllers.read);
router.get("/:slug", Post_controllers.readSinglePost);

router.put(
  "/",
  verifyJWT,
  minRoleRequired(roles.moderator),
  Post_controllers.update
);

router.delete(
  "/",
  verifyJWT,
  minRoleRequired(roles.admin),
  Post_controllers.delete
);

module.exports = postRoutes = router;
