import React from "react";
import { Link } from "react-router-dom";

const ForgotPasswordMessage = () => {
  return (
    <small>
      <Link
        to="/forgot-password"
        className="text-primary-600 hover:underline dark:text-primary-500"
      >
        Forgot Password ?
      </Link>
    </small>
  );
};

export default ForgotPasswordMessage;
