import error_message from "../../utils/error_message";
import toast from "../../libs/toast";
import useAxiosPrivate from "./useAxiosPrivate";

export default function useCreateAsync() {
  const axiosPrivate = useAxiosPrivate();

  return async (
    url: string,
    updateData: object,
    setLoading?: any,
    succes_message?: string
  ) => {
    if (setLoading) {
      setLoading(true);
    }

    try {
      return await axiosPrivate.post(url, updateData).then((res) => {
        toast({
          message: succes_message || "Successfully created!",
        });
        return res.data;
      });
    } catch (error) {
      toast({
        message: error_message(error),
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
