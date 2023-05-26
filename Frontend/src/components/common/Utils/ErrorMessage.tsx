import { useAuth } from "../../../contexts/auth";
import Icons, { Icon } from "../Icons/Icons";

const ErrorMessage = () => {
  const { auth } = useAuth();
  if (!auth?.error) return <></>;

  return (
    <p className="col-span-full text-lg font-medium text-red-500 flex items-center gap-x-1">
      <span>
        <Icon I={Icons.faEyeSlash} />
      </span>
      <span>{auth?.error}</span>
    </p>
  );
};

export default ErrorMessage;
