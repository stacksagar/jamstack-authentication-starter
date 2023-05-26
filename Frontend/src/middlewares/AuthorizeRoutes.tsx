import { Navigate, Outlet, useLocation } from "react-router-dom";
import { roles_checker } from "../config/roles";
import { useAuth } from "../contexts/auth";
import { Roles } from "../types/User";

const RequireAuth = ({ min_role }: { min_role: Roles }) => {
  const location = useLocation();
  const { auth } = useAuth();

  const role_fulfiled = roles_checker(
    auth?.user?.role || "user",
    min_role
  );

  if (role_fulfiled) return <Outlet />;

  return auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default RequireAuth;
