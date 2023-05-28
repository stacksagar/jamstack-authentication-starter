import { Link } from "react-router-dom";
import Checkbox from "../../components/common/Forms/Checkbox";
import Icons, { Icon } from "../../components/common/Icons/FIcons";

interface propTypes extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: any;
  touched?: any;
}

const CheckTermsAndCondition = ({ error, touched, ...rest }: propTypes) => {
  return (
    <div>
      <div className="flex items-center">
        <Checkbox {...rest} />
        <div className="ml-3 text-sm">
          <label
            htmlFor="terms"
            className="font-light text-gray-500 dark:text-gray-300"
          >
            I accept the
            <span className="ml-1 font-medium text-primary-600 hover:underline dark:text-primary-500">
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </span>
          </label>
        </div>
      </div>

      {touched && error ? (
        <p className="flex items-center justify-start gap-x-1 pt-0.5">
          <span className="text-red-500 text-sm">
            <Icon I={Icons.faCircleExclamation} />
          </span>
          <small className="text-red-500 font-medium tracking-tight">
            {error}
          </small>
        </p>
      ) : null}
    </div>
  );
};

export default CheckTermsAndCondition;
