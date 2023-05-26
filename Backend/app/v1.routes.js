const router = require("express").Router();

const authRoutes = require("../routes/auth.routes");
const mailRoutes = require("../routes/mail.routes");
const pageRoutes = require("../routes/page.routes");
const postRoutes = require("../routes/post.routes");
const settingRoutes = require("../routes/setting.routes");
const uploadRoutes = require("../routes/upload.routes");

router.get("/health", (_req, res) => {
  res.status(200).json({ message: "ok", success: true });
});

router.use("/auth", authRoutes);
router.use("/mail", mailRoutes);
router.use("/page", pageRoutes);
router.use("/post", postRoutes);
router.use("/settings", settingRoutes);
router.use("/upload", uploadRoutes);

module.exports = v1Routes = router;
