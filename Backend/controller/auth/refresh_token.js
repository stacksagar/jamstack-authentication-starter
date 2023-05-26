const jwt = require("jsonwebtoken");
const { create_access_token } = require("../../config/jwt");
const User = require("../../models/User");

module.exports = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.sendStatus(204);

  const refresh_token = cookies.jwt;
  const user = await User.findOne({ where: { refresh_token } });

  if (!user) return res.sendStatus(403);

  jwt.verify(refresh_token, process.env.JWT_REFRESH_TOKEN, (error, decoded) => {
    if (error || user?.id !== decoded?.id) return res.sendStatus(403);

    const access_token = create_access_token({ id: user.id, role: user?.role });
    res.json({ user, access_token });
  });
};
