type values_type = {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirm_password?: string;
  acceptTos?: boolean | string;
};

export default function signup_validation(values: values_type) {
  const errors: values_type = {};

  if (!values.phone) {
    errors.phone = "Phone is Required!";
  } else if (values.phone.length < 8) {
    errors.phone = "Invalid Phone Number";
  }

  if (!values.name) {
    errors.name = "Name is Required!";
  }

  if (!values.email) {
    errors.email = "Email is Required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password is Required!";
  } else if (values.password.length < 6 || values.password.length > 99) {
    errors.password = "Must be less then 6 and greater than 99 characters!";
  }

  if (values.password !== values.confirm_password)
    errors.confirm_password = "Password doesn't match!";

  if (!values.acceptTos) {
    errors.acceptTos = "You must agree with terms...!";
  }

  return errors;
}
