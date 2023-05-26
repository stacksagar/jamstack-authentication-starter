import { Link } from "react-router-dom";
import useLogout from "../../../hooks/axios/useLogout";
import Button from "../../common/Buttons/Button";

export default function Header() {
  const logout = useLogout();
  return (
    <header>
      <nav className="flex gap-3">
        <Link to="/admin">Admin Panel</Link>
        <Link to="/">Home</Link>
        <Link to="/profile"> Profile </Link>
        <Link to="/signin">Signin</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/change-password">Change Password</Link>
        <Link to="/reset-password">Reset Password</Link>
        <Link to="/reset-password-saving">Reset Password Saving</Link>
        <Link to="/admin/admin-only">Admin Only</Link>
        <Link to="/admin/moderator">Moderator</Link>

        <Button onClick={logout}>Logout</Button>
      </nav>
    </header>
  );
}
