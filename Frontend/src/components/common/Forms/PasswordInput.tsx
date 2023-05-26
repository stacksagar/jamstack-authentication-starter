import { useState } from "react";
import Icons, { Icon } from "../Icons/Icons";

interface propTypes extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ value, ...rest }: propTypes) => {
  const [showPass, set_showPass] = useState(false);

  return (
    <div className="relative group">
      <input
        autoComplete="on"
        type={showPass ? "text" : "password"}
        placeholder={rest.placeholder || "Password"}
        required={true}
        {...rest}
        className={`bg-white focus:outline-none text-gray-800 dark:bg-gray-700 dark:text-gray-100 sm:text-sm focus:ring-1 rounded focus:ring-primary-600 block w-full p-2.5 border dark:border-opacity-50 focus:border-primary-600 ${rest.className}
        `}
      />

      <div
        onClick={() => set_showPass((p) => !p)}
        className="text-2xl absolute cursor-pointer flex items-center inset-y-0 right-0 pr-6 text-gray-400 hover:text-primary-600"
      >
        {showPass ? <Icon I={Icons.faEye} /> : <Icon I={Icons.faEyeSlash} />}
      </div>
    </div>
  );
};

export default Input;
