import { useFormik } from "formik";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { axios_private } from "../../api/axios_req";
import Button from "../../components/common/Buttons/Button";
import FormikInput from "../../components/common/Formik/FormikInput";
import Checkbox from "../../components/common/Forms/Checkbox";
import Icons, { Icon } from "../../components/common/Icons/FIcons";
import ErrorMessage from "../../components/common/Utils/ErrorMessage";
import ClientLayout from "../../components/layouts/ClientLayout";
import { useAuth } from "../../contexts/auth";
import useBoolean from "../../hooks/state/useBoolean";
import toast from "../../libs/toast";
import error_message from "../../utils/error_message";
import signin_validate from "../../validation/formik/signin_validate";
import ForgotPasswordMessage from "./ForgotPasswordMessage";
import SignupMessage from "./SignupMessage";

const Signin = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const isPersist = useBoolean();
  const from = location.state?.from?.pathname || "/";

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validate: signin_validate,

    onSubmit: (values) => {
      const signin = async () => {
        try {
          const response = await axios_private.post("/auth/login", values);

          setAuth({
            access_token: response.data?.access_token,
            user: response?.data?.user,
          });

          navigate(from, { replace: true });

          toast({
            message: "Logged in!",
          });
        } catch (error: any) {
          setAuth((p: any) => ({ ...p, error: error_message(error) }));

          setTimeout(() => {
            setAuth((p: any) => ({ ...p, error: null }));
          }, 2000);
        }
      };

      signin().finally(() => {
        formik.setSubmitting(false);
      });
    },
  });

  function handleTrustThisDevice(e: React.ChangeEvent<HTMLInputElement>) {
    localStorage.setItem("persist", JSON.stringify(e.target.checked));
    isPersist.set(e.target.checked);
  }

  useEffect(() => {
    const persist = JSON.parse(localStorage.getItem("persist") || "false");

    if (persist) {
      isPersist.setTrue();
    }
  }, []);

  return (
    <ClientLayout>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full md:w-[500px] my-20 p-12 md:p-10 border dark:border-none bg-white dark:bg-gray-800 shadow rounded mx-auto space-y-6"
      >
        <h2 className="text-2xl text-center pb-4 font-semibold flex items-center gap-x-2 text-blue-500">
          <Icon I={Icons.faUnlockAlt} />
          <span>Login Your Account!</span>
        </h2>
        <ErrorMessage />

        <FormikInput
          label="Email"
          type="email"
          placeholder="Email Address"
          {...formik.getFieldProps("email")}
          touched={formik.touched.email}
          error={formik.errors.email}
        />

        <FormikInput
          label="Password"
          type="password"
          placeholder="Password"
          {...formik.getFieldProps("password")}
          touched={formik.touched.password}
          error={formik.errors.password}
        />

        <ForgotPasswordMessage />

        <div className="flex items-center gap-2 dark:text-white">
          <Checkbox
            checked={isPersist.true}
            id="remember"
            onChange={handleTrustThisDevice}
          />
          <label
            htmlFor="remember"
            className="cursor-pointer flex items-center gap-x-1"
            title="If you want to save your Login/Credentials for long time then checked it! Otherwise, If you don't want to save any information then don't checked it!"
          >
            Trust This Device
          </label>
        </div>

        <Button
          loading={formik.isSubmitting}
          type="submit"
          className="bg-blue-600 text-gray-100"
        >
          Login
        </Button>
        <SignupMessage />
      </form>
    </ClientLayout>
  );
};

export default Signin;
