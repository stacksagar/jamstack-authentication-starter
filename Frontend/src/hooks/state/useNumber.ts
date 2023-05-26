import useBoolean from "./useBoolean";
import { useState } from "react";

export default function useString(defaultValue?: number) {
  const [value, setValue] = useState<number>(defaultValue || 0);
  const loading = useBoolean();

  return {
    value,
    reset: () => setValue(0),
    change: (e: any) => setValue(Number(e.target.value)),
    setCustom: (val?: number) => setValue(val || 0),
    loading,
  };
}
