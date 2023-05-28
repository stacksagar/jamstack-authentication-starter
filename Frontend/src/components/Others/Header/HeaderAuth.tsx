import { roles_checker } from "../../../config/roles";
import { useAuth } from "../../../contexts/auth";
import useLogout from "../../../hooks/axios/useLogout";
import FIcons, { Icon } from "../../common/Icons/FIcons";
import NLink from "./NLink";

export default function HeaderAuth() {
  const logout = useLogout();
  const { auth } = useAuth();

  if (!auth?.user?.role) return <></>;
  return (
    <>
      {roles_checker(auth?.user?.role || "user", "moderator") ? (
        <NLink to="/admin">Admin</NLink>
      ) : null}

      <button className="flex items-center gap-2 p-2" onClick={logout}>
        Logout
        <Icon I={FIcons.faSignOut} />
      </button>
    </>
  );
}
