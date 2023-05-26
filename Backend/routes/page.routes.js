const express = require("express");
const Page_controllers = require("../controller/Page_controllers");
const minRoleRequired = require("../middleware/minRoleRequired");
const { roles } = require("../config/roles");
const verifyJWT = require("../middleware/verifyJWT");
const router = express.Router();

router.post("/", Page_controllers.create);
router.get("/", Page_controllers.read);
router.get("/:page_url_name", Page_controllers.readSinglePage);

router.put(
  "/",
  verifyJWT,
  minRoleRequired(roles.moderator),
  Page_controllers.update
);

router.delete(
  "/",
  verifyJWT,
  minRoleRequired(roles.admin),
  Page_controllers.delete
);

module.exports = pageRoutes = router;
