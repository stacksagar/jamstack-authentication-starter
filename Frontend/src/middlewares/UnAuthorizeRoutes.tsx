import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/auth";

const UnAuthorizeRoutes = () => {
  const location = useLocation();

  const { auth } = useAuth();

  return auth?.user ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default UnAuthorizeRoutes;
