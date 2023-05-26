const bcrypt = require("bcrypt");
const {
  create_access_token,
  create_refresh_token,
} = require("../../config/jwt");

const User = require("../../models/User");

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    const matched = await bcrypt.compare(password, user?.password || "empty");

    if (!user || !matched) throw new Error("Invalid Credentials!");

    const access_token = create_access_token({
      id: user.id,
      role: user?.role,
    });

    const refresh_token = create_refresh_token({
      id: user.id,
      role: user?.role,
    });

    user.refresh_token = refresh_token;
    await user.save();

    res.cookie("jwt", refresh_token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 90,
    });

    res.status(200).json({ access_token, user });
  } catch (error) {
    next(error);
  }
};
