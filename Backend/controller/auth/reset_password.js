const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const SendEmailWithCpanelCredential = require("../../email/SendEmailWithCpanelCredential");
const reset_password_html = require("../../email/templates/reset_password_html");

module.exports = async (req, res, next) => {
  try {
    const { email, set_password_link } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: "User not found!" });

    const access_token = jwt.sign({ email }, process.env.JWT_ACCESS_TOKEN, {
      expiresIn: "10m",
    });

    user.access_token = access_token;

    await user.save();

    const reset_link = `${set_password_link}?token=${access_token}`;

    const html = await reset_password_html({
      user_name: user.dataValues?.name,
      reset_link,
    });

    await SendEmailWithCpanelCredential(email, "Reset Your Password", html);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
