import useRefreshToken from "./useRefreshToken";
import { useEffect } from "react";
import { axios_private } from "../../api/axios_req";
import { useAuth } from "../../contexts/auth";



const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = axios_private.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.access_token}`;
        }
        // console.log("intercept request success 1", config);
        return config;
      },
      (error) => {
        // console.log("intercept request error 1", error);
        return Promise.reject(error);
      }
    );

    const responseIntercept = axios_private.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newaccess_token = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newaccess_token}`;
          return axios_private(prevRequest);
        }
        if (error) {
          // console.log("intercept response error 2", error);
          return Promise.reject(error);
        } else {
          // console.log("intercept response success 2");
        }
      }
    );

    return () => {
      axios_private.interceptors.request.eject(requestIntercept);
      axios_private.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return axios_private;
};

export default useAxiosPrivate;
