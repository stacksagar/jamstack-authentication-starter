import ResetPassword from "../pages/ResetPassword";
import ResetPasswordSaving from "../pages/ResetPasswordSaving";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";

const unathorize_pages = {
  signin: Signin,
  signup: Signup,
  "reset-password": ResetPassword,
  "create-new-password": ResetPasswordSaving,
};

export default unathorize_pages;
