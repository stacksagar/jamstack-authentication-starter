const bcrypt = require("bcrypt");
 
const User = require("../../models/User");

module.exports = async (req, res, next) => {
  try {
    const id = req.id;

    const user = await User.findOne({ where: { id } });
    if (!user) return res.sendStatus(404);

    const { old_password, new_password } = req?.body;
    const matched = await bcrypt.compare(old_password, user.password);
    if (!matched) return res.sendStatus(401);

    const hash = await bcrypt.hash(new_password, 9);

    user.password = hash;
    await user.save();

    res.json({ user });
  } catch (error) {
    next(error);
  }
};
