const User = require("../../models/User");

module.exports = async (req, res, next) => {
  try {
    const id = req?.query?.id;
    if (!id) return next("Please provide unique id.");
    await User.destroy({ where: { id } });

    res.status(200).json({ message: "User deleted!" });
  } catch (error) {
    next(error);
  }
};
