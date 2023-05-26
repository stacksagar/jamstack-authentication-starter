import { useFormik } from "formik";
import { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { axios_req } from "../api/axios_req";
import Button from "../components/common/Buttons/Button";
import FormikInput from "../components/common/Formik/FormikInput";
import ErrorMessage from "../components/common/Utils/ErrorMessage";
import ClientLayout from "../components/layouts/ClientLayout";
import { useAuth } from "../contexts/auth";
import toast from "../libs/toast";
import error_message from "../utils/error_message";
import reset_pass_saving_validate from "../validation/formik/reset_pass_saving_validate";

const ResetPasswordSaving = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { auth, setAuth } = useAuth();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_password: "",
    },

    validate: reset_pass_saving_validate,

    onSubmit: (values) => {
      const func = async () => {
        try {
          await axios_req.put("/auth/set-reset-password", {
            new_password: values.confirm_password,
            token: searchParams.get("token"),
          });

          // Redirect to signin page after set new password
          navigate("/signin", { replace: true });

          // Success toast message
          toast({
            message: "Successfully updated!",
          });
        } catch (error: any) {
          // Handle & Set error
          setAuth((prev: any) => ({ ...prev, error: error_message(error) }));
          setTimeout(() => {
            setAuth((prev: any) => ({ ...prev, error: null }));
          }, 3000);
          console.clear();
        }
      };

      func().finally(() => {
        formik.setSubmitting(false);
      });
    },
  });

  useEffect(() => {
    if (!searchParams.get("token")) {
      navigate("/reset-password");
    }
  }, []);

  return (
    <ClientLayout>
      <div>
        <h2 className="text-2xl text-center pb-4 font-semibold">
          Create New Password
        </h2>
        <form
          onSubmit={formik.handleSubmit}
          className="w-full sm:w-96 p-5 md:p-10 border dark:border-none bg-white dark:bg-gray-800 shadow rounded mx-auto space-y-6"
        >
          <div>
            <ErrorMessage />
            {auth?.error ? (
              <div className="text-red-500 hover:text-blue-500 underline mt-1">
                <Link to="/forgot-password">Please reset again!</Link>
              </div>
            ) : null}
          </div>

          <FormikInput
            label="New Password"
            type="password"
            placeholder="Create New Password"
            {...formik.getFieldProps("password")}
            touched={formik.touched.password}
            error={formik.errors.password}
          />

          <FormikInput
            label="Confirm Password"
            type="password"
            placeholder="Confirm New Password"
            {...formik.getFieldProps("confirm_password")}
            touched={formik.touched.confirm_password}
            error={formik.errors.confirm_password}
          />

          <Button
            loading={formik.isSubmitting}
            type="submit"
            className="bg-blue-600 text-gray-100"
          >
            Update Password
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
    </ClientLayout>
  );
};

export default ResetPasswordSaving;
