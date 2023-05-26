import { axios_req } from "../../api/axios_req";
import { useAuth } from "../../contexts/auth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios_req.get("/auth/refresh", {
      withCredentials: true,
    });
    if (setAuth) {
      setAuth({
        access_token: response.data?.access_token,
        user: response?.data?.user,
      });
    }
    return response.data.access_token;
  };
  return refresh;
};

export default useRefreshToken;
