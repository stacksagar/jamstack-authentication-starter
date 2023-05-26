const User = require("../../models/User");
module.exports = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);
  const refresh_token = cookies?.jwt;

  const user = await User.findOne({ where: { refresh_token } });

  if (user) {
    user.refresh_token = "";
    await user.save();
  }

  res.clearCookie("jwt", { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 90 });
  return res.sendStatus(204);
};
