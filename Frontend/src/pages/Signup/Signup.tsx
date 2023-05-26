import { useFormik } from "formik";
import { axios_private } from "../../api/axios_req";
import Button from "../../components/common/Buttons/Button";
import FormikInput from "../../components/common/Formik/FormikInput";
import Icons, { Icon } from "../../components/common/Icons/Icons";
import ErrorMessage from "../../components/common/Utils/ErrorMessage";
import ClientLayout from "../../components/layouts/ClientLayout";
import { useAuth } from "../../contexts/auth";
import toast from "../../libs/toast";
import error_message from "../../utils/error_message";
import signup_validation from "../../validation/formik/signup_validation";
import CheckTermsAndCondition from "./CheckTermsAndCondition";
import SigninMessage from "./SigninMessage";

const Signup = () => {
  const { setAuth } = useAuth();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
      acceptTos: false,
    },
    validate: signup_validation,
    onSubmit: (values) => {
      const signup = async () => {
        try {
          const response = await axios_private.post("/auth/signup", values);
          setAuth({
            access_token: response.data?.access_token,
            user: response?.data?.user,
          });
          localStorage.setItem("persist", "true");
          toast({
            message: "Registration successfull",
          });
        } catch (error: any) {
          setAuth((prev: any) => ({ ...prev, error: error_message(error) }));
          setTimeout(() => {
            setAuth((prev: any) => ({ ...prev, error: null }));
          }, 2000);
          console.clear();
        }
      };

      signup().finally(() => {
        formik.setSubmitting(false);
      });
    },
  });

  return (
    <ClientLayout>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full md:w-[500px] my-20 p-12 md:p-10 border dark:border-none bg-white dark:bg-gray-800 shadow rounded mx-auto space-y-6"
      >
        <h2 className="text-2xl text-center pb-4 font-semibold flex items-center gap-x-2 text-blue-500">
          <Icon I={Icons.faPerson} />
          <span>Create Your Account!</span>
        </h2>
        <ErrorMessage />
        <FormikInput
          label="Name"
          placeholder="Your Name"
          {...formik.getFieldProps("name")}
          touched={formik.touched.name}
          error={formik.errors.name}
        />
        <FormikInput
          label="Email"
          type="Email"
          placeholder="Email Address"
          {...formik.getFieldProps("email")}
          touched={formik.touched.email}
          error={formik.errors.email}
        />
        <FormikInput
          label="Phone"
          type="tel"
          placeholder="Phone Number"
          {...formik.getFieldProps("phone")}
          touched={formik.touched.phone}
          error={formik.errors.phone}
        />
        <FormikInput
          label="Password"
          type="password"
          placeholder="New Password"
          {...formik.getFieldProps("password")}
          touched={formik.touched.password}
          error={formik.errors.password}
        />
        <FormikInput
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          {...formik.getFieldProps("confirm_password")}
          touched={formik.touched.confirm_password}
          error={formik.errors.confirm_password}
        />
        <CheckTermsAndCondition
          id="terms"
          {...formik.getFieldProps("acceptTos")}
          touched={formik.touched.acceptTos}
          error={formik.errors.acceptTos}
        />
        <Button
          loading={formik.isSubmitting}
          type="submit"
          className="bg-blue-600 text-gray-100"
        >
          Signup
        </Button>
        <SigninMessage />
      </form>
    </ClientLayout>
  );
};

export default Signup;
