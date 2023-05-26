import error_message from "../../utils/error_message";
import toast from "../../libs/toast";
import useAxiosPrivate from "./useAxiosPrivate";

export default function useUpdate() {
  const axiosPrivate = useAxiosPrivate();

  return async (
    url: string,
    updateData: object,
    setLoading?: any,
    errorMessage?: any
  ) => {
    if (setLoading) {
      setLoading(true);
    }

    try {
      return await axiosPrivate.put(url, updateData).then((res) => {
        toast({
          message: "Successfully updated!",
          type: "error",
        });
        return res.data;
      });
    } catch (error) {
      toast({
        message: errorMessage || error_message(error),
        type: "error",
      });
      return;
    } finally {
      if (setLoading) {
        setLoading(false);
      }
    }
  };
}
