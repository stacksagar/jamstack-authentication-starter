import { toast as Toastify } from "react-toastify";

interface Props {
  message: string;
  type?:
    | "success"
    | "warning"
    | "warn"
    | "update"
    | "error"
    | "info"
    | "done"
    | "dismiss";
  duration?: number;
}

export default function toast({ message, type, duration }: Props) {
  Toastify[type || "success"](message, {
    position: "top-center",
    autoClose: duration || 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
