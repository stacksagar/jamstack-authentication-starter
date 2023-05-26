import { Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";

interface propTypes extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: any;
  touched?: any;
  left_icon?: any;
  right_icon?: any;
  label?: any;
}

const InputWithIcon = ({
  error,
  touched,
  label,
  left_icon,
  right_icon,
  value,
  ...rest
}: propTypes) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (error) {
      setCount(1);
    }
    if (count === 1 && !error) {
      setCount(2);
    }
  }, [error]);

  useEffect(() => {
    if (value && !error) setCount(2);
  }, [value]);

  return (
    <div>
      {label ? (
        <Label className="mb-2 flex items-center gap-x-2" htmlFor={rest.id}>
          {label}
        </Label>
      ) : null}

      <div className="bg-gray-100 dark:bg-gray-600 flex w-full items-center">
        {left_icon ? (
          <div className="min-w-fit">
            <div className="flex w-fit items-center gap-x-1 px-2 ">
              {left_icon}
            </div>
          </div>
        ) : null}

        <TextInput
          className={`w-full ${rest.className}`}
          {...rest}
          value={value}
          style={{ borderRadius: "0px" }}
        />

        {right_icon ? (
          <div className="min-w-fit px-2">
            <div className="flex w-fit items-center gap-x-1">{right_icon}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default InputWithIcon;
