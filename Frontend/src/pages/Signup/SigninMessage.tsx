import { Link } from "react-router-dom";

const SigninMessage = () => {
  return (
    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
      <span className="mr-1">Already have an account?</span>
      <Link
        to="/signin"
        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
      >
        Signin here
      </Link>
    </p>
  );
};

export default SigninMessage;
