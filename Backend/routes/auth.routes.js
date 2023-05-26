const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");
const verifyJWT = require("../middleware/verifyJWT");
const minRoleRequired = require("../middleware/minRoleRequired");
const { roles } = require("../config/roles");

router.post("/signup", authController.signup);
router.post("/login", authController.signin);
router.get("/refresh", authController.refresh_token);
router.get("/logout", authController.logout);
router.get("/users", authController.users);
router.post("/reset-password", authController.reset_password);
router.put("/set-reset-password", authController.set_reset_password);

router.put("/change-password", verifyJWT, authController.change_password);

router.put(
  "/update-user/:id",
  verifyJWT,
  minRoleRequired(roles.moderator),
  authController.update_user
);

router.delete(
  "/delete-user",
  verifyJWT,
  minRoleRequired(roles.admin),
  authController.delete_user
);

module.exports = authRoutes = router;
