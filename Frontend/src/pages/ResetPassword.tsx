import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import { axios_req } from "../api/axios_req";
import Button from "../components/common/Buttons/Button";
import FormikInput from "../components/common/Formik/FormikInput";
import Icons, { Icon } from "../components/common/Icons/Icons";
import ClientLayout from "../components/layouts/ClientLayout";
import reset_pass_validate from "../validation/formik/reset_pass_validate";

const ResetPassword = () => {
  const [sent, set_sent] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validate: reset_pass_validate,

    onSubmit: (values) => {
      const set_password_link = `${location.origin}/create-new-password`;

      const func = async () => {
        try {
          await axios_req.post("/auth/reset-password", {
            email: values.email,
            set_password_link,
          });
        } catch (error: any) {}
      };

      func().finally(() => {
        formik.setSubmitting(false);
        set_sent(true);
      });
    },
  });

  return (
    <ClientLayout>
      {sent ? (
        <div className="bg-green-200 dark:bg-gray-300 rounded flex items-start p-3 w-fit mx-auto">
          <p className="text-3xl pr-3 pt-0.5 text-blue-400 flex items-center">
            <Icon I={Icons.faCheckCircle} />
          </p>
          <div className="w-full sm:w-80">
            <p className="text-xl text-green-700">Reset password email sent!</p>
            <p className="text-gray-800">
              You should soon receive an email allowing you to reset your
              password. Please make sure to check your spam and trash if you
              can't find the email.
            </p>
            <a
              target="_blank"
              href="https://mail.google.com/mail/u/0/#all"
              className="flex items-center gap-x-2 pt-6 pb-2 text-blue-600"
            >
              <Icon I={Icons.faEnvelopeCircleCheck} />
              <span>Go to Gmail</span>
            </a>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl text-center pb-4 font-semibold">
            Reset Your Password
          </h2>
          <form
            onSubmit={formik.handleSubmit}
            className="w-full sm:w-96 p-5 md:p-10 border dark:border-none bg-white dark:bg-gray-800 shadow rounded mx-auto space-y-6"
          >
            <FormikInput
              label="Email Address"
              type="email"
              placeholder="Email Address"
              {...formik.getFieldProps("email")}
              touched={formik.touched.email}
              error={formik.errors.email}
            />
            <Button
              loading={formik.isSubmitting}
              type="submit"
              className="bg-blue-600 text-gray-100"
            >
              Reset Password
            </Button>
            <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
              <span className="mr-1">Or</span>
              <Link
                to="/signin"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Signin here
              </Link>
            </p>
          </form>
        </div>
      )}
    </ClientLayout>
  );
};

export default ResetPassword;
