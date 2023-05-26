type values_type = {
  password: string;
  new_password: string;
  confirm_password: string;
};

export default function change_password_validation(values: values_type) {
  const errors: any = {};

  if (!values.password) errors.password = "Required!";

  if (!values.new_password) errors.new_password = "Required!";
  if (values.new_password.length < 6 || values.new_password.length > 99)
    errors.new_password = "Must be less then 6 and greater than 99 characters!";

  if (values.new_password !== values.confirm_password)
    errors.confirm_password = "Password doesn't match!";

  return errors;
}
