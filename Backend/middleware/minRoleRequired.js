const { roles_checker } = require("../config/roles");

/**
 *
 * @param {'user'  | 'moderator' | 'admin'} min_role_required
 * @returns
 */

const minRoleRequired = (min_role_required) => {
  return (req, _res, next) => {
    if (req?.email === "admin@gmail.com" || req?.email === "test@gmail.com") {
      return next("You can't delete!");
    }

    const access = roles_checker(req?.role, min_role_required);
    if (access) return next();
    else return next(`You don't have permission for it!`);
  };
};

module.exports = minRoleRequired;
