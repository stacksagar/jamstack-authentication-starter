import error_message from "../../utils/error_message";
import toast from "../../libs/toast";
import useAxiosPrivate from "./useAxiosPrivate";
import { useState } from "react";

export default function useDeleteReq() {
  const [data, setData] = useState();
  const axiosPrivate = useAxiosPrivate();

  return async (url: string, setLoading?: any, deleteRefData?: object) => {
    if (setLoading) {
      setLoading(true);
    }

    try {
      const { data } = await axiosPrivate.delete(url, {
        data: deleteRefData,
      });
      setData(data);
      toast({
        message: `${data?.message || "Deleted!"}`,
        type: "error",
      });

      return data;
    } catch (error) {
      toast({
        message: error_message(error),
        type: "error",
      });
    } finally {
      if (setLoading) {
        setLoading(false);
      }
    }
    return { data };
  };
}
