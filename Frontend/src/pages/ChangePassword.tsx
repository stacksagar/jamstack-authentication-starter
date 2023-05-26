import { useFormik } from "formik";
import Button from "../components/common/Buttons/Button";
import FormikInput from "../components/common/Formik/FormikInput";
import ErrorMessage from "../components/common/Utils/ErrorMessage";
import ClientLayout from "../components/layouts/ClientLayout";
import { useAuth } from "../contexts/auth";
import useAxiosPrivate from "../hooks/axios/useAxiosPrivate";
import toast from "../libs/toast";
import error_message from "../utils/error_message";
import change_password_validation from "../validation/formik/change_password_validation";

const ChangePassword = () => {
  const { setAuth } = useAuth();
  const axios = useAxiosPrivate();
  const formik = useFormik({
    initialValues: {
      password: "",
      new_password: "",
      confirm_password: "",
    },

    validate: change_password_validation,

    onSubmit: (values) => {
      const submit = async () => {
        try {
          await axios.put(
            "/auth/change-password",
            {
              old_password: values.password,
              new_password: values.confirm_password,
            },
            {
              withCredentials: true,
            }
          );

          toast({
            message: "Password changed!",
          });
        } catch (error: any) {
          setAuth((prev: any) => ({ ...prev, error: error_message(error) }));
          setTimeout(() => {
            setAuth((prev: any) => ({ ...prev, error: null }));
          }, 2000);
        }
      };

      submit().finally(() => {
        setAuth((prev: any) => ({ ...prev, fetched: true }));
        formik.setSubmitting(false);
      });
    },
  });

  return (
    <ClientLayout>
      <h5>Change Password</h5>
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 p-5 gap-8"
      >
        <FormikInput
          label="Old Password"
          type="password"
          placeholder="Old Password"
          {...formik.getFieldProps("password")}
          touched={formik.touched.password}
          error={formik.errors.password}
        />

        <FormikInput
          label="New Password"
          type="password"
          placeholder="Create New Password"
          {...formik.getFieldProps("new_password")}
          touched={formik.touched.new_password}
          error={formik.errors.new_password}
        />

        <FormikInput
          label="Confirm Password"
          type="password"
          placeholder="Confirm New Password"
          {...formik.getFieldProps("confirm_password")}
          touched={formik.touched.confirm_password}
          error={formik.errors.confirm_password}
        />
        <ErrorMessage />
        <div className="col-span-full w-fit">
          <Button
            loading={formik.isSubmitting}
            type="submit"
            className="bg-blue-600 text-gray-100"
          >
            Update Password
          </Button>
        </div>
      </form>
    </ClientLayout>
  );
};

export default ChangePassword;
