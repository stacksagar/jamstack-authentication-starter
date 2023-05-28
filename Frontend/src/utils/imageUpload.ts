import { axios_req } from "../api/axios_req";

export default async function imageUpload(file: any, setLoading?: any) {
  if (!file) return;
  if (setLoading) {
    setLoading(true);
  }

  const formData = new FormData();
  formData.append("file", file);
  const { data } = await axios_req.post("upload/single", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  if (setLoading) {
    setLoading(false);
  }
  return data;
}
