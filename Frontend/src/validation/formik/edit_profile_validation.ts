type values_type = {
  email?: string;
  name?: string;
  phone?: string;
};

export default function edit_profile_validation(values: values_type) {
  const errors: values_type = {};

  if (!values.name) {
    errors.name = "Required!";
  }

  if (!values.phone) {
    errors.phone = "Phone is Required!";
  }

  if (!values.email) {
    errors.email = "Email is Required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
}
