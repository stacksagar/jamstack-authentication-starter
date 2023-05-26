import { axios_req } from "../../api/axios_req";
import { useAuth } from "../../contexts/auth";

export default function useLogout() {
  const { setAuth } = useAuth();

  const logout = async () => {
    try {
      await axios_req("/auth/logout", {
        withCredentials: true,
      });
      setAuth({});
    } catch (error) {
      console.log("LOGOUT: ", error);
    }
  };

  return logout;
}
