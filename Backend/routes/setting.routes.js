const express = require("express");
const Setting_controllers = require("../controller/Setting_controllers");
const verifyJWT = require("../middleware/verifyJWT");
const minRoleRequired = require("../middleware/minRoleRequired");
const { roles } = require("../config/roles");
const router = express.Router();

router.post("/", Setting_controllers.create);
router.get("/", Setting_controllers.read);

router.put(
  "/",
  // verifyJWT,
  // minRoleRequired(roles.moderator),
  Setting_controllers.update
);

router.put(
  "/reset-unseen-exchange",
  verifyJWT,
  minRoleRequired(roles.moderator),
  Setting_controllers.reset_unseen_exchang
);

router.delete(
  "/",
  verifyJWT,
  minRoleRequired(roles.admin),
  Setting_controllers.delete
);

module.exports = uploadRoutes = router;
