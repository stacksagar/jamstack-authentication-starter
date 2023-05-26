const jwt = require("jsonwebtoken");
const User = require("../models/User");

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers?.authorization || req.headers?.Authorization;

  if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);
  const access_token = authHeader.split(" ")[1];

  jwt.verify(
    access_token,
    process.env.JWT_ACCESS_TOKEN,
    async (error, decoded) => {
      if (error) return next("Session Expired!");
      const user = await User.findOne({ where: { id: decoded?.id } });
      req.id = decoded?.id;
      req.email = user.dataValues?.email;
      req.role = decoded?.role;
      next();
    }
  );
};

module.exports = verifyJWT;
