export default function error_message(error: any) {
  const errorMessage =
    error?.response?.data?.message || error?.response?.data || error?.message;
  return errorMessage;
}
