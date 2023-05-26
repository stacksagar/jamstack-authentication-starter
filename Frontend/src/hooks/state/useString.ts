import useBoolean from "./useBoolean";
import { useState } from "react";

export default function useString(defaultValue?: string) {
  const [value, setValue] = useState<string>(defaultValue || "");
  const loading = useBoolean();

  return {
    value,
    reset: () => setValue(""),
    change: (e: any) => setValue(e.target.value),
    setCustom: (val?: string) => setValue(val || ""),

    loading,
  };
}
