import { Roles } from "../types/User";

const roles_volume = {
  user: 1,
  moderator: 2,
  admin: 3,
};

export const roles = {
  user: "user",
  moderator: "moderator",
  admin: "admin",
};

export function roles_checker(user_role: Roles, min_required_role: Roles) {
  if (roles_volume[user_role] >= roles_volume[min_required_role]) return true;
  else return false;
}
