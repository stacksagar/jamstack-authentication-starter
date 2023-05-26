import { Link } from "react-router-dom";

const SignupMessage = () => {
  return (
    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
      <span className="mr-1"> Don't have an account?</span>
      <Link
        to="/signup"
        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
      >
        Create account!
      </Link>
    </p>
  );
};

export default SignupMessage;
