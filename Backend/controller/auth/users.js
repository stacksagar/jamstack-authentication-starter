const User = require("../../models/User");

module.exports = async (req, res, next) => {
  try {
    const limit = Number(req?.query?.limit);
    const page = Number(req?.query?.page);

    const sort = req?.query?.sort;
    const order = req?.query?.order;

    const sortBy = (typeof sort === "object" ? sort[0] : sort || "")
      ?.toLowerCase()
      ?.trim();

    const orderBy = (typeof order === "object" ? order[0] : order || "")
      ?.toLowerCase()
      ?.trim();

    const offset = limit * (page - 1);

    const conditions = {
      where: {},
      order: [],
      attributes: [
        "id",
        "name",
        "email",
        "phone",
        "username",
        "nid",
        "refresh_token",
        "access_token",
        "role",
        "createdAt",
        "updatedAt",
        "disabled",
        "isEmailVerified",
      ],
    };

    if (page && limit) {
      conditions.offset = offset;
      conditions.limit = limit;
    }

    if (
      (sortBy === "id" ||
        sortBy === "sent_amount" ||
        sortBy === "receive_amount") &&
      (orderBy === "ascending" || orderBy === "descending")
    ) {
      conditions.order.push([sortBy, orderBy === "ascending" ? "ASC" : "DESC"]);
    }

    const users = await User.findAndCountAll({
      ...conditions,
    });
    res.json({
      totalPages: Math.ceil(users.count / limit),
      totalItems: users.count,
      currentPage: page,
      users: users.rows,
    });
  } catch (error) {
    next(error);
  }
};
