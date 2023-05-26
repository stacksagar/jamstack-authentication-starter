import { useState } from "react";

export default function useBoolean(_default?: boolean) {
  const [isTrue, set] = useState(_default || false);
  const [loading, setLoading] = useState(false);

  return {
    true: isTrue,
    set,
    setTrue: () => set(true),
    setFalse: () => set(false),
    toggle: () => set((p) => !p),
    loading,
    setLoading,
  };
}
