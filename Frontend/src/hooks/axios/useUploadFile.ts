import error_message from "../../utils/error_message";
import toast from "../../libs/toast";
import { axios_req } from "../../api/axios_req";

export default function useUploadFile() {
  const upload = (file: any, setUploading?: any) => {
    if (setUploading) {
      setUploading(true);
    }

    const formData = new FormData();
    formData.append("file", file);
    return axios_req
      .post("/upload/single", formData)
      .then((res) => res.data?.url)
      .catch((error) =>
        toast({
          message: error_message(error),
          type: "error",
        })
      )
      .finally(() => {
        if (setUploading) {
          setUploading(false);
        }
      });
  };

  return upload;
}
