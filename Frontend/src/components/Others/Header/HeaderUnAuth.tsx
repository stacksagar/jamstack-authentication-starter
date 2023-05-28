import { useAuth } from "../../../contexts/auth";
import NLink from "./NLink";

export default function HeaderUnAuth() {
  const { auth } = useAuth();
  if (auth?.user?.role) return <></>;

  return (
    <>
      <NLink to="/signin">Login</NLink>
      <NLink to="/signup">Signup</NLink>
    </>
  );
}
