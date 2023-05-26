import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import LoadingScreen from "../components/Others/LoadingScreen";
import { useAuth } from "../contexts/auth";
import useLogout from "../hooks/axios/useLogout";
import useRefreshToken from "../hooks/axios/useRefreshToken";

export default function PersistLogin() {
  const { auth, persist } = useAuth();
  const refresh = useRefreshToken();
  const logout = useLogout();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    !auth?.access_token && isMounted
      ? verifyRefreshToken()
      : setIsLoading(false);

    return () => {
      isMounted = false;
    };
  }, []);

  const signOut = async () => {
    await logout();
  };

  useEffect(() => {
    let isMounted = true;
    if (!persist && isMounted) signOut();
    return () => {
      isMounted = false;
    };
  }, [persist]);

  if (!persist) return <Outlet />;
  else return isLoading ? <LoadingScreen /> : <Outlet />;
}
