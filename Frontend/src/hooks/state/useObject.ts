import useBoolean from "./useBoolean";
import { useState } from "react";

const useObject = <A>(defaultData?: A) => {
  const [data, setData] = useState<A>(defaultData || ({} as A));
  const loading = useBoolean();

  return {
    data,
    set: setData,
    reset: () => setData({} as A),
    onChange: (e: any) =>
      setData((p) => ({ ...p, [e.target.id]: e.target.value })),
    loading,
  };
};

export default useObject;
