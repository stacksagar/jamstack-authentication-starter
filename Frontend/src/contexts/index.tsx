import { AuthProvider } from "./auth";

export default function ContextsProvider({ children }: any) {
  return <AuthProvider>{children}</AuthProvider>;
}
