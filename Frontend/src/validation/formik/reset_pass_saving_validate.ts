type values_type = {
  password: string;
  confirm_password: string;
};

export default function reset_pass_saving_validate(values: values_type) {
  const errors: { password?: string; confirm_password?: string } = {};

  if (!values.password) errors.password = "Required!";
  if (values.password.length < 6 || values.password.length > 99)
    errors.password = "Must be less then 6 and greater than 99 characters!";

  if (values.password !== values.confirm_password)
    errors.confirm_password = "Password doesn't match!";

  return errors;
}
