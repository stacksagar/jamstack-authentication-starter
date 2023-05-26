import error_message from "../../utils/error_message";
import toast from "../../libs/toast";
import useAxiosPrivate from "./useAxiosPrivate";
import { useState } from "react";

export default function useFetchDataAsync(skip?: "skip_store_data") {
  const axiosPrivate = useAxiosPrivate();

  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const start = async (url: string) => {
    setLoading(true);
    try {
      const { data } = await axiosPrivate.get(url);
      if (skip !== "skip_store_data") {
        setData(data);
      }
      return data;
    } catch (error) {
      toast({
        message: error_message(error),
        type: "error",
      });

      setError(error_message(error));
      return error;
    } finally {
      setLoading(false);
    }
  };

  return { start, data, loading, error };
}
