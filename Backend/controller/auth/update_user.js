const User = require("../../models/User");

module.exports = async (req, res, next) => {
  try {
    const id = req?.params?.id;

    await User.update(req.body, {
      where: { id },
    });

    const updated = await User.findOne({ where: { id } });

    res.status(200).json({ message: "User Updated!", updated });
  } catch (error) {
    next(error);
  }
};
