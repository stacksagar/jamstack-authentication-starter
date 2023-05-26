const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
 
const User = require("../../models/User");

module.exports = async (req, res, next) => {
  try {
    const { token, new_password } = req.body;

    jwt.verify(token, process.env.JWT_ACCESS_TOKEN, async (error, decoded) => {
      if (error) return next("Session Expired or Invalid Link!");

      const user = await User.findOne({ where: { email: decoded?.email } });
      if (!user) return res.sendStatus(404);

      const hash = await bcrypt.hash(new_password, 9);
      user.access_token = "";
      user.password = hash;
      await user.save();

      res.sendStatus(204);
    });
  } catch (error) {
    next(error);
  }
};
