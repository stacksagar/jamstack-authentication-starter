import useBoolean from "./useBoolean";
import { useState } from "react";

const useArray = <A,>(defaultData?: A[]) => {
  const [data, setData] = useState<A[]>(defaultData || []);
  const loading = useBoolean();

  return {
    data,
    reset: () => setData([]),
    set: (d: A[]) => setData(d),
    setSingle: (d: A) => setData((prev) => prev.concat(d)),

    loading,
  };
};

export default useArray;
