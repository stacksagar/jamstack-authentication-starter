type values_type = {
  email?: string;
};

export default function reset_pass_validate(values: values_type) {
  const errors: { email?: string } = {};
  if (!values.email) {
    errors.email = "Required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
}
