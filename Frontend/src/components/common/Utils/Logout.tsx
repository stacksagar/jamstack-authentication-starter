import useLogout from "../../../hooks/axios/useLogout";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const logout = useLogout();
  const navigate = useNavigate();
  const signOut = async () => {
    await logout();
    navigate("/");
  };

  return <button onClick={signOut}>logout</button>;
};

export default Logout;
