const bcrypt = require("bcrypt");

const {
  create_access_token,
  create_refresh_token,
} = require("../../config/jwt");

const User = require("../../models/User");

const SendEmailWithCpanelCredential = require("../../email/SendEmailWithCpanelCredential");
const account_created_html = require("../../email/templates/account_created_html");
const { roles } = require("../../config/roles");

module.exports = async (req, res, next) => {
  try {
    const { name, email, password, phone } = req.body;

    const exist = await User.findOne({ where: { email } });
    if (exist) throw new Error("This email is already in use!");

    const hash = await bcrypt.hash(password, 9);

    const user = await User.create({
      name,
      email,
      password: hash,
      phone,
      role: roles.user,
    });

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

    const html = await account_created_html(user.dataValues?.name);
    SendEmailWithCpanelCredential(
      user.dataValues?.email,
      "Your account has been created!",
      html
    );

    res.status(201).json({ access_token, user });
  } catch (error) {
    next(error);
  }
};
