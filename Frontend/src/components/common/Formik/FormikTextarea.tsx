import { useEffect, useState } from "react";
import Label from "../Forms/Label";
import Textarea from "../Forms/Textarea";
import Icons, { Icon } from "../Icons/Icons";

interface propTypes extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: any;
  touched?: any;
}

export default function FormikTextarea({
  label,
  name,
  touched,
  error,
  required = true,
  ...rest
}: propTypes) {
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
    if (rest?.value && !error) setCount(2);
  }, [rest?.value]);

  return (
    <div>
      <Label htmlFor={name}>
        {label}
        {label ? (
          <small className="px-1 text-yellow-500">
            {required ? "*" : "(optional)"}
          </small>
        ) : null}
      </Label>

      <Textarea
        className={`  ${!error && "border-gray-300"}
      ${error && touched && "border-red-500"}
      ${count === 2 && "border-green-400"}`}
        required={required}
        name={name}
        id={name}
        {...rest}
      />

      {touched && error ? (
        <p className="flex items-center justify-start gap-x-1 pt-0.5 capitalize">
          <span className="text-red-500 text-sm">
            <Icon I={Icons.faExclamationCircle} />
          </span>
          <small className="text-red-500 font-medium tracking-tight">
            {error}
          </small>
        </p>
      ) : null}
    </div>
  );
}
