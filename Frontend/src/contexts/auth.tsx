import User from "../types/User";
import { createContext, useContext, useState } from "react";

interface Context {
  auth?: {
    user?: User;
    access_token?: string;
    error?: string;
  };
  setAuth?: any;
  persist?: any;
  setPersist?: any;
}

const AuthContext = createContext<Context>({});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState();
  const [persist, setPersist] = useState(
    JSON.parse(localStorage.getItem("persist") || "false")
  );

  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
